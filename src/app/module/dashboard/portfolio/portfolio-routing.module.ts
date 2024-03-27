import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPortfolioComponent } from './main-portfolio/main-portfolio.component';

const routes: Routes = [
  {
    path:"", component:MainPortfolioComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortfolioRoutingModule { }
