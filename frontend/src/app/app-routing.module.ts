import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { AnnexureAComponent } from './annexure-a/annexure-a.component';
import { AnnexureBComponent } from './annexure-b/annexure-b.component';
import { AnnexureCComponent } from './annexure-c/annexure-c.component';
import { AnnexureDComponent } from './annexure-d/annexure-d.component';
import { AnnexureEComponent } from './annexure-e/annexure-e.component';
import { Msme1Component } from './msme-1/msme-1.component';
import { Msme2Component } from './msme-2/msme-2.component';
import { Msme3Component } from './msme-3/msme-3.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AnnexureE1Component } from './annexure-e.1/annexure-e.1.component';
import { AnnexureE2Component } from './annexure-e.2/annexure-e.2.component';
import { AnnexureE3Component } from './annexure-e.3/annexure-e.3.component';
import { AnnexureE4Component } from './annexure-e.4/annexure-e.4.component';
import { AnnexureE5Component } from './annexure-e.5/annexure-e.5.component';
import { AnnexureFComponent } from './annexure-f/annexure-f.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'annexure-a', component: AnnexureAComponent },
  { path: 'annexure-b', component: AnnexureBComponent },
  { path: 'annexure-c', component: AnnexureCComponent },
  { path: 'annexure-d', component: AnnexureDComponent },
  { path: 'annexure-e', component: AnnexureEComponent },
  { path: 'annexure-e.1', component: AnnexureE1Component },
  { path: 'annexure-e.2', component: AnnexureE2Component },
  { path: 'annexure-e.3', component: AnnexureE3Component },
  { path: 'annexure-e.4', component: AnnexureE4Component },
  { path: 'annexure-e.5', component: AnnexureE5Component },
  { path: 'annexure-f', component: AnnexureFComponent },

  { path: 'msme-1', component: Msme1Component },
  { path: 'msme-2', component: Msme2Component },
  { path: 'msme-3', component: Msme3Component },
  { path: 'dashboard', component: DashboardComponent }, // Add this route for your dashboard/next page

  { path: '', redirectTo: '/login', pathMatch: 'full' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
