import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './modules/layout/components/main-layout/main-layout.component';
import { MainWhiteLayoutComponent } from './modules/layouts/white-theme/components/main-white-layout/main-white-layout.component';
import { NotFoundComponent } from './modules/not-found/components/not-found/not-found.component';

const tilesModule = () => import("../app/modules/tiles/tiles.module").then( m => m.TilesModule );
const taskModule = () => import("../app/modules/task/task.module").then( m => m.TaskModule );
const expenseModule = () => import("../app/modules/expense/expense.module").then( m => m.ExpenseModule );
const reportModule = () => import("../app/modules/report/report.module").then( m => m.ReportModule );
const masterModule = () => import("../app/modules/master/master.module").then( m => m.MasterModule );

const routes: Routes = [
    { path: "", redirectTo: "/task", pathMatch: 'full' },
    {
        path: "",
        component: MainWhiteLayoutComponent,
        children: [
            { path: "task", loadChildren: taskModule },
            { path: "expense", loadChildren: expenseModule },
            { path: "report", loadChildren: reportModule  },
            { path: "master", loadChildren: masterModule  }
        ]
    },
    {
        path: "tiles",
        component: MainLayoutComponent,
        children: [
            { path: "", loadChildren: tilesModule },
        ]
    },
    { path: "**", component: NotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
