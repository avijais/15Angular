import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MasterRoutingModule } from './master-routing.module';
import { TaskCategoryComponent } from './components/task-category/task-category.component';
import { ExpenseCategoryComponent } from './components/expense-category/expense-category.component';


@NgModule({
  declarations: [
    TaskCategoryComponent,
    ExpenseCategoryComponent
  ],
  imports: [
    CommonModule,
    MasterRoutingModule
  ]
})
export class MasterModule { }
