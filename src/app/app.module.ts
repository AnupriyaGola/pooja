
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

//routing
import { RouterModule, Routes } from '@angular/router';
import { ChatModule } from './chat/chat.module';
import { UserModule } from './user/user.module';
import { ChatboxComponent } from './chat/chatbox/chatbox.component';
import { LoginComponent } from './user/login/login.component';
import { SignupComponent } from './user/signup/signup.component';
import { AppService } from './app.service';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from "@angular/common/http";
import { HttpModule } from '@angular/http';
import { SocketService } from './socket.service';


@NgModule({
   
  declarations: [
    AppComponent
   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    ChatModule,
    UserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      { path: 'login', component: LoginComponent, pathMatch: 'full'},
      { path: 'signup',component: SignupComponent, pathMatch: 'full'},
      { path: 'chat',component: ChatboxComponent, pathMatch: 'full'},
      { path: '', redirectTo: 'login' , pathMatch: 'full'},
      { path: '*', component: LoginComponent},
      { path: '**', component: LoginComponent}
    ])
  ],
  providers: [AppService,SocketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
