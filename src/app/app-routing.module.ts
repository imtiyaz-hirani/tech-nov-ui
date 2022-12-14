import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { ApplyLeaveComponent } from './components/employee/apply-leave/apply-leave.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { GenerateTicketComponent } from './components/employee/generate-ticket/generate-ticket.component';
import { ViewLeavesComponent } from './components/employee/view-leaves/view-leaves.component';
import { ViewTicketsComponent } from './components/employee/view-tickets/view-tickets.component';
import { ManagerComponent } from './components/manager/manager.component';
import { ApplyFormComponent } from './loan/components/apply-form/apply-form.component';
import { ApplyComponent } from './loan/components/apply/apply.component';

const routes: Routes = [
  { path:'', component: LoginComponent },
 // { path:'', component: ApplyComponent },
 { path:'apply-loan', component: ApplyComponent, children:[
      { path:'form', component: ApplyFormComponent }
    ]
  },
 { path:'sign-up', component: SignUpComponent },
  { path:'employee', component: EmployeeComponent, children:[
    { path:'generate-ticket', component: GenerateTicketComponent },
    { path:'apply-leave', component: ApplyLeaveComponent },
    { path:'ticket-list', component: ViewTicketsComponent },
    { path:'leave-list', component: ViewLeavesComponent }
    ]
  },
  { path:'manager', component: ManagerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
