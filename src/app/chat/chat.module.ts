import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatboxComponent } from './chatbox/chatbox.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ToastModule } from 'ng2-toastr';
import {SharedModule } from '../shared/shared.module';
import { RemoveSpecialCharPipe } from './../shared/pipe/remove-special-char.pipe';
import { ChatRouteGaurdService } from './chat-route-gaurd.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ToastModule.forRoot(),
    RouterModule.forChild([
      { path: 'chat', component: ChatboxComponent, canActivate:[ChatRouteGaurdService] }
    ]),
    SharedModule
  ],
  declarations: [ChatboxComponent,RemoveSpecialCharPipe],
  providers: [ChatRouteGaurdService]
})
export class ChatModule { }
