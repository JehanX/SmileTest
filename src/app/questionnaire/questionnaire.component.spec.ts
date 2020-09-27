import { Overlay } from '@angular/cdk/overlay';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatSnackBar, MatSnackBarConfig, MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { of } from 'rxjs';
import questionnaireInput from 'src/mock/questionnaireInput';
import questionnaireOutput from 'src/mock/questionnaireOutput';
import questionnaireWithoutItemInput from 'src/mock/questionnaireWithoutItemInput';
import { QuestionnaireComponent } from './questionnaire.component';
import * as moment from "moment";
import responseTemplate from 'src/mock/responseTemplate';

describe('QuestionnaireComponent', () => {
  let component: QuestionnaireComponent;
  let fixture: ComponentFixture<QuestionnaireComponent>;
  let alertBannerSpy: any;
  let alertBannerConfig = new MatSnackBarConfig();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule],
      providers: [
        FormsModule,
        HttpClient,
        HttpHandler,
        MatSnackBar,
        Overlay
      ],
      declarations: [QuestionnaireComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionnaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    alertBannerSpy = spyOn(component.alertBanner, 'open');
    alertBannerConfig.duration = 4000;
    alertBannerConfig.panelClass = ['alert', 'alert-error'];
    alertBannerConfig.verticalPosition = 'top';
    alertBannerConfig.horizontalPosition = 'center';
  });

  it('should create questionnaire component', () => {
    expect(component).toBeTruthy();
  });

  it('load questionnaire.json - success', async () => {
    spyOn(component.httpClient, 'get')
      .and.returnValue(
        of(questionnaireInput)
      );
    await component.loadQuestionnaire();
    expect(component.questionnaire).toEqual(questionnaireOutput);
    expect(component.pageLoading).toBeFalse();
    expect(component.showResponse).toBeFalse();
  });

  it('load questionnaire.json - without items', async () => {
    spyOn(component.httpClient, 'get')
      .and.returnValue(
        of(questionnaireWithoutItemInput)
      );
    await component.loadQuestionnaire();
    expect(component.questionnaire).toBeUndefined();
    expect(alertBannerSpy).toHaveBeenCalledWith('Failed to parse quesionnaire.', null, alertBannerConfig);
    expect(component.pageLoading).toBeTrue();
    expect(component.showResponse).toBeFalse();
  });

  it('load questionnaire.json - connection error', async () => {
    spyOn(component.httpClient, 'get')
      .and.throwError('404');
    await component.loadQuestionnaire();
    expect(component.questionnaire).toBeUndefined();
    expect(alertBannerSpy).toHaveBeenCalledWith('Not able to load questionnaire.', null, alertBannerConfig);
    expect(component.pageLoading).toBeTrue();
    expect(component.showResponse).toBeFalse();
  });

  it('show error alert banner', async () => {
    const bannerMessage = 'Error banner shows';
    const alertType = 'alert-error';
    await component.showAlert(bannerMessage, alertType);
    expect(alertBannerSpy).toHaveBeenCalledWith(bannerMessage, null, alertBannerConfig);
    expect(component.showResponse).toBeFalse();
  });

  it('show success alert banner', async () => {
    const bannerMessage = 'Success banner shows';
    const alertType = 'alert-success';
    await component.showAlert(bannerMessage, alertType);
    alertBannerConfig.panelClass = ['alert', 'alert-success'];
    expect(alertBannerSpy).toHaveBeenCalledWith(bannerMessage, null, alertBannerConfig);
    expect(component.showResponse).toBeFalse();
  });

  it('construct form group - empty', async () => {
    spyOn(component.httpClient, 'get')
      .and.returnValue(
        of(questionnaireInput)
      );
    await component.constructFormGroup([]);
    expect(component.questionnaire).toBeUndefined();
    expect(component.showResponse).toBeFalse();
  });

  it('construct form group', async () => {
    component.questionnaire = questionnaireInput.item;
    spyOn(component.httpClient, 'get')
      .and.returnValue(
        of(questionnaireInput)
      );
    await component.constructFormGroup(component.questionnaire);
    expect(component.questionnaire).toEqual(questionnaireOutput);
    expect(component.showResponse).toBeFalse();
  });

  it('change date - no value', async () => {
    const event = {};
    const item = {
      "linkId": "2.2",
      "text": "What is your date of birth?",
      "type": "date",
      "answer": [{ valueDate: null }]
    };
    await component.dateChange(event, item);
    expect(item).toEqual({
      "linkId": "2.2",
      "text": "What is your date of birth?",
      "type": "date",
      "answer": [{ valueDate: '' }]
    });
    expect(component.showResponse).toBeFalse();
  });

  it('change date - correct format', async () => {
    const event = {value: moment('2020-09-26')};
    const item = {
      "linkId": "2.2",
      "text": "What is your date of birth?",
      "type": "date",
      "answer": [{ valueDate: null }]
    };
    await component.dateChange(event, item);
    expect(item).toEqual({
      "linkId": "2.2",
      "text": "What is your date of birth?",
      "type": "date",
      "answer": [{ valueDate: '2020-09-26' }]
    });
    expect(component.showResponse).toBeFalse();
  });

  it('change date - different format', async () => {
    const event = {value: moment('09-26-2020')};
    const item = {
      "linkId": "2.2",
      "text": "What is your date of birth?",
      "type": "date",
      "answer": [{ valueDate: null }]
    };
    await component.dateChange(event, item);
    expect(item).toEqual({
      "linkId": "2.2",
      "text": "What is your date of birth?",
      "type": "date",
      "answer": [{ valueDate: '2020-09-26' }]
    });
    expect(component.showResponse).toBeFalse();
  });

  it('change radio - true', async () => {
    const event = {value: 'true'};
    const item = {
      "linkId": "1",
      "text": "Do you have allergies?",
      "type": "boolean",
      "answer": [{ valueBoolean: false }]
    };
    await component.radioChange(event, item);
    expect(item).toEqual({
      "linkId": "1",
      "text": "Do you have allergies?",
      "type": "boolean",
      "answer": [{ valueBoolean: true }]
    });
    expect(component.showResponse).toBeFalse();
  });

  it('change radio - false', async () => {
    const event = {value: 'false'};
    const item = {
      "linkId": "1",
      "text": "Do you have allergies?",
      "type": "boolean",
      "answer": [{ valueBoolean: true }]
    };
    await component.radioChange(event, item);
    expect(item).toEqual({
      "linkId": "1",
      "text": "Do you have allergies?",
      "type": "boolean",
      "answer": [{ valueBoolean: false }]
    });
    expect(component.showResponse).toBeFalse();
  });

  it('should submit', async () => {
    component.questionnaire = questionnaireOutput;
    await component.submit();
    responseTemplate.id = component.responseTemplate.id;
    expect(component.responseTemplate).toEqual(responseTemplate);
    expect(component.showResponse).toBeTrue();
  });
});
