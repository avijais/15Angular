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
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

registerLocaleData(en);

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
        FormsModule,
        HttpClientModule,
    ],
    providers: [
    { provide: NZ_I18N, useValue: en_US }
  ],
    bootstrap: [AppComponent]
})
export class AppModule { }
