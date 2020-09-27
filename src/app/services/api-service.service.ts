import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getPatients(patientName = '', patientBirthday = '') {
    let requestURI = environment.queryURI + '/Patient?';
    const requestParams = [];
    if (!patientName && !patientBirthday) {
      requestParams.push('birthdate=ge1960-01-01');
      requestParams.push('birthdate=le1965-12-31');
    }
    if (patientName) {
      requestParams.push('name=' + patientName);
    }
    if (patientBirthday) {
      requestParams.push('birthdate=eq' + patientBirthday);
    }
    requestURI += requestParams.join('&');

    return this.httpClient.get(requestURI,
      { headers: this.getHeaders() });
  }

  private getHeaders(): HttpHeaders {
    const headers = new HttpHeaders({
      'Content-Type': 'application/fhir+json'
    });
    return headers;
  }
}


