import { Overlay } from '@angular/cdk/overlay';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ApiService } from '../services/api-service.service';
import { PatientComponent } from './patient.component';
import { of } from 'rxjs';
import getPatientsDefaultOutput from 'src/mock/getPatientsDefaultOutput';
import patientsTableDefaultData from 'src/mock/patientsTableDefaultData';
import patientListMissingData from 'src/mock/patientListMissingData';
import tableDataMissingData from 'src/mock/tableDataMissingData';
import * as moment from "moment";


describe('PatientComponent', () => {
  let component: PatientComponent;
  let fixture: ComponentFixture<PatientComponent>;
  let alertBannerSpy: any;
  let alertBannerConfig = new MatSnackBarConfig();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule],
      providers: [
        FormsModule,
        ReactiveFormsModule,
        Overlay,
        MatSnackBar,
        ApiService,
        HttpClient,
        HttpHandler
      ],
      declarations: [ PatientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    alertBannerSpy = spyOn(component.alertBanner, 'open');
    alertBannerConfig.duration = 4000;
    alertBannerConfig.panelClass = ['alert', 'alert-error'];
    alertBannerConfig.verticalPosition = 'top';
    alertBannerConfig.horizontalPosition = 'center';
  });

  it('should create patient component', () => {
    expect(component).toBeTruthy();
  });

  it('load table - success', async () => {
    spyOn(component.apiService, 'getPatients')
      .and.returnValue(
        of(getPatientsDefaultOutput)
      );
    await component.loadTable();
    expect(component.tableData).toEqual(patientsTableDefaultData);
    expect(component.tableLoading).toBeFalse();
  });

  it('load table - without entry', async () => {
    spyOn(component.apiService, 'getPatients')
      .and.returnValue(
        of({})
      );
    await component.loadTable();
    expect(alertBannerSpy).toHaveBeenCalledWith('The format of response is not expected.', null, alertBannerConfig);
    expect(component.tableData).toEqual([]);
    expect(component.tableLoading).toBeFalse();
  });

  it('load table - connection error', async () => {
    spyOn(component.apiService, 'getPatients')
    .and.throwError('404');
    await component.loadTable();
    expect(alertBannerSpy).toHaveBeenCalledWith('No able to establish the connection with the server. Please try again.', null, alertBannerConfig);
    expect(component.tableData).toEqual([]);
    expect(component.tableLoading).toBeFalse();
  });

  it('prepare table data - has everything', async () => {
    const patientLst = getPatientsDefaultOutput.entry;
    await component.prepareTableData(patientLst);
    expect(alertBannerSpy).toHaveBeenCalledWith('No able to establish the connection with the server. Please try again.', null, alertBannerConfig);
    expect(component.tableData).toEqual(patientsTableDefaultData);
  });

  it('prepare table data - missing data', async () => {
    await component.prepareTableData(patientListMissingData);
    expect(component.tableData).toEqual(tableDataMissingData);
  });

  it('show error alert banner', async () => {
    const bannerMessage = 'Error banner shows';
    const alertType = 'alert-error';
    await component.showAlert(bannerMessage, alertType);
    expect(alertBannerSpy).toHaveBeenCalledWith(bannerMessage, null, alertBannerConfig);
  });

  it('show success alert banner', async () => {
    const bannerMessage = 'Success banner shows';
    const alertType = 'alert-success';
    await component.showAlert(bannerMessage, alertType);
    alertBannerConfig.panelClass = ['alert', 'alert-success'];
    expect(alertBannerSpy).toHaveBeenCalledWith(bannerMessage, null, alertBannerConfig);
  });

  it('change date - no value', async () => {
    const event = {};
    await component.dateChange(event);
    expect(component.searchPatientBirthday).toEqual('');
  });

  it('change date - correct format', async () => {
    const event = {value: moment('2020-09-26')};
    await component.dateChange(event);
    expect(component.searchPatientBirthday).toEqual('2020-09-26');
  });

  it('change date - different format', async () => {
    const event = {value: moment('09-26-2020')};
    await component.dateChange(event);
    expect(component.searchPatientBirthday).toEqual('2020-09-26');
  });

  it('should search', async () => {
    spyOn(component.apiService, 'getPatients')
      .and.returnValue(
        of(getPatientsDefaultOutput)
      );
    await component.search();
    expect(component.tableData).toEqual(patientsTableDefaultData);
    expect(component.tableLoading).toBeFalse();
  });
});
