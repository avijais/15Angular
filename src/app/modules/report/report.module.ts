import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportRoutingModule } from './report-routing.module';
import { ReportExpenseComponent } from './components/report-expense/report-expense.component';
import { ReportTaskComponent } from './components/report-task/report-task.component';


@NgModule({
  declarations: [
    ReportExpenseComponent,
    ReportTaskComponent
  ],
  imports: [
    CommonModule,
    ReportRoutingModule
  ]
})
export class ReportModule { }
