import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { LoginComponent } from './user/login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth/auth.guard';


const routes: Routes = [
  // {path:'',redirectTo:'abc',pathMatch:'full'},
  // {path:'abc',component:UserComponent}
  // {path:'abc',component:RegistrationComponent},
  {path:'',redirectTo:'/user/registration',pathMatch:'full'},
  {
    path:'user',component:UserComponent,
    children:[
      {path:'registration',component:RegistrationComponent},
      {path:'login',component:LoginComponent}
    ]
  },
  {path:'home',component:HomeComponent,canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
