import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MainLayoutComponent } from './modules/layout/components/main-layout/main-layout.component';
import { MainWhiteLayoutComponent } from './modules/layouts/white-theme/components/main-white-layout/main-white-layout.component';
import { NotFoundComponent } from './modules/not-found/components/not-found/not-found.component';

@NgModule({
    declarations: [
        AppComponent,
        MainLayoutComponent,
        MainWhiteLayoutComponent,
        NotFoundComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        MatSidenavModule,
        MatListModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
