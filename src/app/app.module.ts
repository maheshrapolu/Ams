import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarDirective } from './sidebar.directive';
import { ReportsComponent } from './dashboard/reports/reports.component';
import { AdminComponent } from './dashboard/admin/admin.component';
import { RouterModule } from '@angular/router';
import { EmpolyeeComponent } from './dashboard/empolyee/empolyee.component';
import { ClientComponent } from './dashboard/client/client.component';
import { AssigmentsComponent } from './dashboard/assigments/assigments.component';
import { AddempolyeeComponent } from './dashboard/addempolyee/addempolyee.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MyaccountComponent } from './dashboard/myaccount/myaccount.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    SidebarDirective,
    ReportsComponent,
    AdminComponent,
    EmpolyeeComponent,
    ClientComponent,
    AssigmentsComponent,
    AddempolyeeComponent,
    MyaccountComponent,
    
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
