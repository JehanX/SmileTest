import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../app/services/api-service.service';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { FormControl, Validators } from '@angular/forms';
import * as moment from "moment";
@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss']
})
export class PatientComponent implements OnInit {

  // Page Settings
  public dateFormat = 'YYYY-MM-DD';
  public searchPatientName = '';
  public searchPatientBirthday = '';
  public startTime;
  public endTime;
  public searchPatientNameForm = new FormControl('', [
    Validators.pattern('^[a-zA-Z]+')
  ]);
  public searchPatientDateForm = new FormControl('', [
    this.dateValidate.bind(this)
  ]);

  // Table Settings
  public colName: string[] = ['id', 'firstName', 'lastName', 'gender', 'birthday'];
  public tableData = [];
  public tableLoading = true;

  constructor(
    public apiService: ApiService,
    public alertBanner: MatSnackBar
  ) { }

  ngOnInit() {
    this.loadTable();
  }

  async loadTable() {
    this.tableData = [];
    this.startTime = Date.now();
    this.tableLoading = true;
    try {
      const res = await this.apiService.getPatients(this.searchPatientName, this.searchPatientBirthday).toPromise();
      
      if (res.hasOwnProperty('total') && res['total'] === 0) {
        this.tableData = [];
      } else if (!res.hasOwnProperty('total')) {
          this.showAlert('The format of response is not expected.', 'alert-error');
          return;
      } else {
        this.prepareTableData(res['entry']);
      }
    } catch (error) {
      this.showAlert('No able to establish the connection with the server. Please try again.', 'alert-error');
    }
    this.endTime = Date.now();
    this.tableLoading = false;
  }

  prepareTableData(patientLst) {
    // Prepare table data
    patientLst.forEach(entry => {
      const patient = {
        id: entry.resource && entry.resource.id ? entry.resource.id : '',
        firstName: entry.resource &&
          entry.resource.name &&
          entry.resource.name.length &&
          entry.resource.name[0].given ? entry.resource.name[0].given.join(' ') : '',
        lastName: entry.resource &&
          entry.resource.name &&
          entry.resource.name.length &&
          entry.resource.name[0].family ? entry.resource.name[0].family : '',
        gender: entry.resource && entry.resource.gender ? entry.resource.gender : '',
        birthday: entry.resource && entry.resource.birthDate ? entry.resource.birthDate : ''
      };
      this.tableData.push(patient);
    });

    // Sort table by age
    this.tableData.sort((a, b) => {
      const dateA = new Date(a.birthday);
      const dateB = new Date(b.birthday);
      return dateA > dateB ? -1 : dateA < dateB ? 1 : 0;
    });
  }

  showAlert(message: string, alertType) {
    // Alert config
    const config = new MatSnackBarConfig();
    config.duration = 4000;
    config.panelClass = ['alert', alertType];
    config.verticalPosition = 'top';
    config.horizontalPosition = 'center';

    this.alertBanner.open(message, null, config);
  }

  search() {
    this.loadTable();
  }

  dateChange(event) {
    this.searchPatientBirthday = '';
    if (event.value) {
      this.searchPatientBirthday = event.value.format(this.dateFormat);
    }
  }

  dateValidate(format = this.dateFormat): any {
    return (control: FormControl): { [key: string]: any } => {
      const val = moment(control.value, format, true);
      if (!val.isValid()) {
        return { invalidDate: true };
      }
      return null;
    };
  }

}
