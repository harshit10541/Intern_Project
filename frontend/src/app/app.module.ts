import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AnnexureAComponent } from './annexure-a/annexure-a.component';
import { AnnexureBComponent } from './annexure-b/annexure-b.component';
import { AnnexureCComponent } from './annexure-c/annexure-c.component';
import { AnnexureDComponent } from './annexure-d/annexure-d.component';
import { AnnexureEComponent } from './annexure-e/annexure-e.component';
import { Msme1Component } from './msme-1/msme-1.component';
import { Msme2Component } from './msme-2/msme-2.component';
import { Msme3Component } from './msme-3/msme-3.component';
import { AnnexureE1Component } from './annexure-e.1/annexure-e.1.component';
import { AnnexureE2Component } from './annexure-e.2/annexure-e.2.component';
import { AnnexureE3Component } from './annexure-e.3/annexure-e.3.component';
import { AnnexureE4Component } from './annexure-e.4/annexure-e.4.component';
import { AnnexureE5Component } from './annexure-e.5/annexure-e.5.component';
import { AnnexureFComponent } from './annexure-f/annexure-f.component';
import { StickyButtonComponent } from './shared/sticky-button/sticky-button.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    DashboardComponent,
    AnnexureAComponent,
    AnnexureBComponent,
    AnnexureCComponent,
    AnnexureDComponent,
    AnnexureEComponent,
    Msme1Component,
    Msme2Component,
    Msme3Component,
    AnnexureE1Component,
    AnnexureE2Component,
    AnnexureE3Component,
    AnnexureE4Component,
    AnnexureE5Component,
    AnnexureFComponent,
    StickyButtonComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
