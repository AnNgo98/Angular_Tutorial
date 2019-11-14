import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class BankAccountService {

  constructor(private http:HttpClient) { }
  readonly BaseURL = ('http://localhost:55724/api')
  postBankAccount(formData){
    return this.http.post(this.BaseURL + "/BankAccount",formData);
  }
  putBankAccount(formData){
    return this.http.put(this.BaseURL + "/BankAccount/"+formData.bankAccountID,formData);
  }
  getBankAccountList(){
    return this.http.get(this.BaseURL+"/BankAccount");
  }
  deleteBankAccount(id){
    return this.http.delete(this.BaseURL+"/BankAccount/"+id);
  }
}
