import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';

import { AuthGuardService } from './auth-guard.service'
import { PlotComponent } from './plot/plot.component';
import { PlotDetailComponent } from './plot-detail/plot-detail.component';
import { PlotCreateComponent } from './plot-create/plot-create.component';
import { PlotEditComponent } from './plot-edit/plot-edit.component';
const routes: Routes = [
  {
    path:'',
    component:HomeComponent
   
  },
  {
    path:'register',
    component:RegistrationComponent,
    canActivate:[AuthGuardService]

  },
  {
    path:'login',
    component:LoginComponent,
    canActivate:[AuthGuardService]

  },
  {
    path: 'plot',
    component: PlotComponent,
    data: { title: 'plot List' }
  },
  {
    path: 'plot-detail/:id',
    component: PlotDetailComponent,
    data: { title: 'Plot Details' }
  },
  {
    path: 'plot-create',
    component: PlotCreateComponent,
    data: { title: 'Create Plot' }
  },
  {
    path: 'plot-edit/:id',
    component: PlotEditComponent,
    data: { title: 'Edit Plot' }
  },
  {
    path:'**',
    redirectTo:''

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
