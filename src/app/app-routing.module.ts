import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdduserComponent } from './adduser/adduser.component';
// import { UserForm } from './Class/Adduser';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditComponent } from './edit/edit.component';
import { LoginComponent } from './login/login.component';

import { UserComponent } from './user/user.component';




const routes: Routes = [{path:'',component:LoginComponent},
{path:'dashboard',component:DashboardComponent},
{path:'adduser',component:AdduserComponent},
{path:'user',component:UserComponent},

{path:'edit',component:EditComponent}]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
