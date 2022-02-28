import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QrcodeComponent } from './qrcode/qrcode.component';
import { ResultsComponent } from './results/results.component';
import { OfficerComponent } from './officer/officer.component';
const routes: Routes = [
  {path:'qrcode',component:QrcodeComponent},
  {path:'results',component:ResultsComponent},
  {path:'officer',component:OfficerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
const routingComponents = [QrcodeComponent,ResultsComponent,OfficerComponent]