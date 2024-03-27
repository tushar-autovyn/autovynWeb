import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPageRoutingModule } from './landing-page-routing.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { CounterComponent } from './counter/counter.component';
import { HireComponent } from './hire/hire.component';
import { OverviewAComponent } from './overview-a/overview-a.component';
import { OverviewBComponent } from './overview-b/overview-b.component';
import { PartnerComponent } from './partner/partner.component';
import { ServiceComponent } from './service/service.component';
import { TeamComponent } from './team/team.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

@NgModule({
  declarations: [
    HomeComponent,
    ServiceComponent,
    AboutComponent,
    OverviewAComponent,
    OverviewBComponent,
    CounterComponent,
    TestimonialComponent,
    TeamComponent,
    BlogComponent,
    HireComponent,
    PartnerComponent, 
    PortfolioComponent

  ],
  imports: [
    CommonModule,
    LandingPageRoutingModule
  ],
  exports:[
    // HomeComponent,
    // ServiceComponent,
    // AboutComponent,
    // OverviewAComponent,
    // OverviewBComponent,
    // CounterComponent,
    // TestimonialComponent,
    // TeamComponent,
    // BlogComponent,
    // HireComponent,
    // PartnerComponent, 
    // PortfolioComponent
  ]
})
export class LandingPageModule { }
