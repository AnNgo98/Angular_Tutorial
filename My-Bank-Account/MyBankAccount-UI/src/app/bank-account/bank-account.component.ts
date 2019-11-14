import { Component, OnInit,OnChanges } from '@angular/core';
import { FormBuilder, FormArray, FormGroup, Validators } from '@angular/forms';
import { BankService } from '../shared/bank.service';
import { BankAccountService } from '../shared/bank-account.service';
import { ToastrModule, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-bank-account',
  templateUrl: './bank-account.component.html',
  styleUrls: ['./bank-account.component.sass']
})
export class BankAccountComponent implements OnInit {

  bankAccountForms : FormArray = this.fb.array([]);
  constructor(private fb: FormBuilder,
    private bankService: BankService,
    private bankAccountService: BankAccountService,
    private toastr: ToastrService) { }
  bankList= [];
  // bankAccountList=[];
  // khởi tạo các gtri cho component
  ngOnInit() {
    this.bankService.getBankList().subscribe(res => this.bankList = res as []);
    this.bankAccountService.getBankAccountList().subscribe(
      res =>{
        if(res==[]){
          this.addBankAccountForm();
        }
        else{
          // generate formarray as per the data received form BankAccount table
          (res as []).forEach((bankAccount:any)=>{
            this.bankAccountForms.push(this.fb.group({
              bankAccountID: [bankAccount.bankAccountID],
              accountNumber: [bankAccount.accountNumber,Validators.required],
              accountHolder: [bankAccount.accountHolder,Validators.required],
              bankID: [bankAccount.bankID,Validators.min(1)],
              IFSC: [bankAccount.ifsc,Validators.required]
            }));
          });
        }
      }
    );
  }

  // Create value for form
  addBankAccountForm(){
    this.bankAccountForms.push(this.fb.group({
      bankAccountID: [0],
      accountNumber: ["",Validators.required],
      accountHolder: ["",Validators.required],
      bankID: [0,Validators.min(1)],
      IFSC: ["",Validators.required]
    }))
  }

  recordSubmit(fg:FormGroup){
    if(fg.value.bankAccountID == 0){
      this.bankAccountService.postBankAccount(fg.value).subscribe(
        (res: any)=>{
          fg.patchValue({bankAccountID: res.bankAccountID})
          this.toastr.success("Create bank successfull !")
        }
      );
    }
    else{
      this.bankAccountService.putBankAccount(fg.value).subscribe(
        (res: any)=>{
        //  this.toastr.success("Update bank successfull !")
        }
      );
    }
  }

  onDelete(bankAccountID,i){
    if(bankAccountID==0)
    {
      this.bankAccountForms.removeAt(i)
      this.toastr.warning("Delete bank successfull")
    }
    else
      if(confirm('Are you sure ?')){
        this.bankAccountService.deleteBankAccount(bankAccountID).subscribe(
          res=>{
            this.bankAccountForms.removeAt(i)
            this.toastr.warning("Delete bank successfull")
        });
      }
  }

}
