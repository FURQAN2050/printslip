import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrintslipComponent } from './printslip/printslip.component';
import {DashboardComponent} from './dashboard/dashboard.component'
import { RouterModule, Routes } from '@angular/router';
import { dashCaseToCamelCase } from '@angular/compiler/src/util';

const routes: Routes = [
  { path: 'printslip',component: PrintslipComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];
@NgModule({
  exports: [ RouterModule ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ], 
  declarations: []
})
export class AppRoutingModule { }

