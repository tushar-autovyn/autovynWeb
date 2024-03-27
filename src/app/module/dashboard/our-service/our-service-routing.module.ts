import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainServiceComponent } from './main-service/main-service.component';

const routes: Routes = [
  {path:"", component:MainServiceComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OurServiceRoutingModule { }
