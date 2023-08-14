import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './modules/layout/components/main-layout/main-layout.component';

const tilesModule = () => import("../app/modules/tiles/tiles.module").then( m => m.TilesModule );

const routes: Routes = [
    { path: "", redirectTo: "/tiles", pathMatch: 'full' },
    {
        path: "",
        component: MainLayoutComponent,
        children: [
            { path: "tiles", loadChildren: tilesModule },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
