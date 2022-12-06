import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoPendingComponent } from './components/todo-pending/todo-pending.component';
import { TodoDoneComponent } from './components/todo-done/todo-done.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import {HttpClientModule} from '@angular/common/http';
import { PostComponent } from './components/post/post.component';
import { LoginComponent } from './auth/login/login.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { ManagerComponent } from './components/manager/manager.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoPendingComponent,
    TodoDoneComponent,
    NavbarComponent,
    PostComponent,
    LoginComponent,
    SignUpComponent,
    EmployeeComponent,
    ManagerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
