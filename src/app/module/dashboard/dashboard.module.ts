import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';




@NgModule({
  declarations: [
 
  
        HeaderComponent,
         FooterComponent,
        //  HomeComponent,
        //  AboutComponent,
        //  BlogComponent,
        //  CounterComponent,
        //  HireComponent,
        //  OverviewAComponent,
        //  OverviewBComponent,
        //  PartnerComponent,
        //  PortfolioComponent,
        //  ServiceComponent,
        //  TeamComponent,
        //  TestimonialComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent
  ]
})
export class DashboardModule { }
