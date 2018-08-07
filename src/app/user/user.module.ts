import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { FormsModule } from '@angular/forms';
import { ToastModule } from 'ng2-toastr';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ToastModule.forRoot(),
    RouterModule.forChild([
      { path: 'sign-up',component: SignupComponent}
    ])
  ],
  declarations: [LoginComponent, SignupComponent]
})
export class UserModule { }
