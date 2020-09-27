import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import * as moment from 'moment';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.scss']
})
export class QuestionnaireComponent implements OnInit {
  public showResponse;
  public pageLoading = true;
  public dateFormat = 'YYYY-MM-DD';
  public questionnaire;
  public formGroup = new FormGroup({});
  public responseTemplate = {
    resourceType: 'QuestionnaireResponse',
    id: Math.random().toString(36), // Unique id for this set of answers
    basedOn: [{ reference: '#question' }], // Request fulfilled by this QuestionnaireResponse
    partOf: [{ reference: 'Procedure/f201' }], // Part of this action
    status: 'completed', // R!  in-progress | completed | amended | entered-in-error | stopped
    subject: { reference: '#patsub' }, // The subject of the questions
    encounter: { reference: 'Encounter/example' }, // Encounter created as part of
    authored: '2013-02-19T14:15:00-05:00', // Date the answers were gathered
    author: {reference: '#questauth'}, // Person who received and recorded the answers
    source: {reference: '#source'}, // The person who answered the questions
    item: []
  };

  constructor(
    private httpClient: HttpClient,
    private alertBanner: MatSnackBar
  ) { }

  ngOnInit() {
    this.loadQuestionnaire();
  }

  async loadQuestionnaire() {
    try {
      const res = await this.httpClient.get('assets/questionnaire.json').toPromise();
      this.questionnaire = res['item'];
      if (!res.hasOwnProperty('item')) {
        this.showAlert('Failed to parse quesionnaire.', 'alert-error');
        return;
      }
      this.constructFormGroup(this.questionnaire);
    } catch (error) {
      this.showAlert('Not able to load questionnaire.', 'alert-error');
    }
    this.pageLoading = false;
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

  submit() {
    this.responseTemplate.item = this.questionnaire;
    this.showResponse = true;
  }

  constructFormGroup(items) {
    for (let item of items) {
      if (item.type === 'group') {
        this.constructFormGroup(item.item);
      } else if (item.type === 'string') {
        item.answer = [{valueString: ''}];
        this.formGroup.addControl(item.linkId, new FormControl('', [Validators.required]));
      } else if (item.type === 'date') {
        item.answer = [{valueDate: null}];
        this.formGroup.addControl(item.linkId, new FormControl('', [Validators.required, this.dateValidate.bind(this)]));
      } else if (item.type === 'boolean') {
        item.answer = [{valueBoolean: true}];
      }
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

  dateChange(event, item) {
    item.answer[0].valueDate = '';
    if (event.value) {
      item.answer[0].valueDate = event.value.format(this.dateFormat);
    }
  }

  radioChange(event, item) {
    item.answer[0].valueBoolean = event.value === 'true';
  }
}
