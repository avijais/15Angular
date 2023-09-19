import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './modules/layout/components/main-layout/main-layout.component';
import { MainWhiteLayoutComponent } from './modules/layouts/white-theme/components/main-white-layout/main-white-layout.component';
import { NotFoundComponent } from './modules/not-found/components/not-found/not-found.component';

const tilesModule = () => import("../app/modules/tiles/tiles.module").then( m => m.TilesModule );
const taskModule = () => import("../app/modules/task/task.module").then( m => m.TaskModule );

const routes: Routes = [
    { path: "", redirectTo: "/task", pathMatch: 'full' },
    {
        path: "",
        children: [
            {
                path: "tiles",
                component: MainLayoutComponent,
                children: [
                    { path: "", loadChildren: tilesModule },
                ]
            },
            {
                path: "task",
                component: MainWhiteLayoutComponent,
                children: [
                    { path: "", loadChildren: taskModule },
                ]
            }
        ]
    },
    { path: "**", component: NotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
