import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExpenseCategoryComponent } from './components/expense-category/expense-category.component';
import { TaskCategoryComponent } from './components/task-category/task-category.component';

const routes: Routes = [
    { path: "expense-category", component: ExpenseCategoryComponent },
    { path: "task-category", component: TaskCategoryComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MasterRoutingModule { }
