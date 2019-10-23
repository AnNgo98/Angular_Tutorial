import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private fb:FormBuilder,private http:HttpClient) { }
  readonly BaseURL = ('http://localhost:55450/api')

  formModel = this.fb.group({
    UserName :['',Validators.required],
    Email :['',Validators.email],
    FullName :[''],
    PassWords : this.fb.group({
      PassWord :['',[Validators.required,Validators.minLength(4)]],
    ConfirmPassWord :['',Validators.required]
    },{validator: this.comparePasswords})
  });
  
  comparePasswords(fb: FormGroup){
    let confirmPswdCtrl = fb.get('ConfirmPassWord');
    //passwordMismatch
    if(confirmPswdCtrl.errors==null || 'passwordMismatch' in confirmPswdCtrl.errors){
      if(fb.get('PassWord').value != confirmPswdCtrl.value)
        confirmPswdCtrl.setErrors({passwordMismatch: true});
      else
        confirmPswdCtrl.setErrors(null);
    }
  }
  registerUser(){
    var body = {
      UserName : this.formModel.value.UserName,
      Email: this.formModel.value.Email,
      FullName: this.formModel.value.FullName,
      PassWord: this.formModel.value.PassWords.PassWord 
    };
    return this.http.post(this.BaseURL + '/ApplicationUser/Register',body);
  }

  login(formData){
    return this.http.post(this.BaseURL + '/ApplicationUser/Login',formData);
  }

  getUserProfile(){
    // var tokenHeader = new HttpHeaders({'Authorization':'Bearer' + localStorage.getItem('token')});
    // return this.http.get(this.BaseURL+'/UserProfile',{headers : tokenHeader});
    return this.http.get(this.BaseURL+'/UserProfile');
  }
}
