import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { RegistrationComponent } from './user/registration/registration.component';


const routes: Routes = [
  // {path:'',redirectTo:'abc',pathMatch:'full'},
  // {path:'abc',component:UserComponent}
  // {path:'abc',component:RegistrationComponent},
  {path:'',redirectTo:'/user/registration',pathMatch:'full'},
  {
    path:'user',component:UserComponent,
    children:[
      {path:'registration',component:RegistrationComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
