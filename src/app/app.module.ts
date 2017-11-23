import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DataService } from './data.service';
import { RouterModule, Routes } from '@angular/router';
import { MaterializeModule } from 'angular2-materialize';
import { AppComponent } from './app.component';
import { WriteReportComponent } from './write-report/write-report.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import {AddUserComponent} from './admin-page/add-user/add-user.component';


const appRoutes: Routes = [
  { path: '',
    redirectTo: '/index',
    pathMatch: 'full'
  },
  {
    path:'write-report',
    component:WriteReportComponent
  },
  {
    path: 'welcome',
    component : WelcomeComponent
  },
  {
    path: 'list_users',
    component : ListUsersComponent
  },
  {
    path: 'admin_page',
    component: AdminPageComponent
  },
  {
    path : "addUser",
    component: AddUserComponent,
    outlet: "addUser"
  }
];


@NgModule({
  declarations: [
    AppComponent,
    WriteReportComponent,
    WelcomeComponent,
    ListUsersComponent,
    AdminPageComponent,
    AddUserComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true}
    ),
    MaterializeModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
