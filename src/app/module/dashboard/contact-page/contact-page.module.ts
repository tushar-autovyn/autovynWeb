import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactPageRoutingModule } from './contact-page-routing.module';
import { MainContactComponent } from './main-contact/main-contact.component';


@NgModule({
  declarations: [
    MainContactComponent
  ],
  imports: [
    CommonModule,
    ContactPageRoutingModule
  ]
})
export class ContactPageModule { }
