import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OurServiceRoutingModule } from './our-service-routing.module';
import { MainServiceComponent } from './main-service/main-service.component';


@NgModule({
  declarations: [
    MainServiceComponent
  ],
  imports: [
    CommonModule,
    OurServiceRoutingModule
  ]
})
export class OurServiceModule { }
