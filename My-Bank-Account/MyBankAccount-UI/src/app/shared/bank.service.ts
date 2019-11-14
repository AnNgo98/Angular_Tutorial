import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class BankService {

  constructor(private http: HttpClient) { }
  readonly BaseURL = ('http://localhost:55724/api')
  getBankList(){
    return this.http.get(this.BaseURL+'/bank');
  }
}
