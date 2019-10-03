import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';
import { Toast, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.sass']
})
export class RegistrationComponent implements OnInit {

  constructor(public service:UserService,private toastr:ToastrService) { }

  ngOnInit() {
  }

  onSubmit(){
    this.service.registerUser().subscribe(
      (res:any) =>{
        if(res.succeeded){
          this.service.formModel.reset();
          this.toastr.success('New user created','Registration successfull')
        }
        else{
          res.errors.forEach(element =>{
            switch (element.code) {
              case 'DuplicateUsername':
                this.toastr.error('Username is already taken','Registration failed')
                break;
              default:
              this.toastr.error(element.description,'Registration failed')
                break;
            }
          });
          
        }
      },
      err => {
        console.log(err);
      }
    )
  }
}
