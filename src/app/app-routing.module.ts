import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardMenuComponent } from './dashboard-menu/dashboard-menu.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AuthGuard } from './auth-guard.servic';
import { PracticeComponent } from './practice/practice.component';
import { DynamicFormComponent } from './DynamicForm/Components/dynamic-form/dynamic-form.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'Login',component:LoginComponent},
  {path:'DynamicForm',component:DynamicFormComponent},
  {path:'Dashboard-Menu',canActivate:[AuthGuard],component:DashboardMenuComponent, 
  children:[
    {path:'Home', component:HomeComponent},
    {path:'Dashboard', component:DashboardComponent},
    {path:'Practice',component:PracticeComponent}
  ]},
  {path:'Not-Found',component:PagenotfoundComponent},
  {path:'**', redirectTo:'/Not-Found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
