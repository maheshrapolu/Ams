import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReportsComponent } from './dashboard/reports/reports.component';
import { AdminComponent } from './dashboard/admin/admin.component';
import { AssigmentsComponent } from './dashboard/assigments/assigments.component';
import { EmpolyeeComponent } from './dashboard/empolyee/empolyee.component';
import { ClientComponent } from './dashboard/client/client.component';
import { AddempolyeeComponent } from './dashboard/addempolyee/addempolyee.component';
import { MyaccountComponent } from './dashboard/myaccount/myaccount.component';


const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent,
  children: [     
    {path: '', component:ReportsComponent},
    {path: 'reports', component:ReportsComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'client', component: ClientComponent},
  {path: 'empolyee', component: EmpolyeeComponent},
  {path: 'assigments', component: AssigmentsComponent},
  {path: 'addempolyee', component: AddempolyeeComponent},
  {path: 'myaccount', component: MyaccountComponent},
  ]},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
