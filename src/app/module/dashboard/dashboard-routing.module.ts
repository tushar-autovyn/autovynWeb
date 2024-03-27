import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:"",
    loadChildren:() => import('./landing-page/landing-page.module').then(m=>m.LandingPageModule)
  },
  {
    path:"about",
    loadChildren:() => import('./about-page/about-page.module').then(m=>m.AboutPageModule)
  },
  {
    path:"contact",
    loadChildren:() => import('./contact-page/contact-page.module').then(m=>m.ContactPageModule)
  },
  {
    path:"service",
    loadChildren:() => import('./our-service/our-service.module').then(m=>m.OurServiceModule)
  },
  {
    path:"portfolio",
    loadChildren:() => import('./portfolio/portfolio.module').then(m=>m.PortfolioModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
