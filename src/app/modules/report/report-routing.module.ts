import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReportExpenseComponent } from './components/report-expense/report-expense.component';
import { ReportTaskComponent } from './components/report-task/report-task.component';

const routes: Routes = [
    { path: "expense", component: ReportExpenseComponent },
    { path: "task", component: ReportTaskComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ReportRoutingModule { }
