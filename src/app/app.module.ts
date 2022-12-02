import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {HttpClientModule} from '@angular/common/http'
import { ReactiveFormsModule,FormsModule} from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdduserComponent } from './adduser/adduser.component';
import { UserComponent } from './user/user.component';
import { EditComponent } from './edit/edit.component';






@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    AdduserComponent,
    UserComponent,

    EditComponent,
    
  
    
    

  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
