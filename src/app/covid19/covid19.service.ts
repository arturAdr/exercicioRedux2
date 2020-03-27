import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class Covid19Service {

  constructor(protected http: HttpClient) { }

  getCovid19() {
    return this.http.get(environment.endpointCovid19);
  };

}
