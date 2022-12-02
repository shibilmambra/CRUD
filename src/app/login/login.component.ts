import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {  Loginform } from '../Class/Login';
import { LoginserviceService } from '../loginservice.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  log = new Loginform()
  logindata: any;
  UserName:any
  Password:any

  type=''
  currentuser=''
  
  constructor(private service:LoginserviceService,private router:Router,private fb:FormBuilder ){
      this.getuser()
  }
 
ngOnInit(){
}

getuser(){
  this.service.ViewUsers().subscribe(data=>{
    this.logindata=data
    console.log(this.logindata);
    
  })

}




// welcome message 
login(){


  for(let i of this.logindata){
    if(this.Password==i.Password&&this.UserName==i.UserName){
    {this.type=i.UserType
    this.currentuser=i.UserName
    localStorage.setItem('currentuser',this.currentuser)}
  }
  }
  if(this.currentuser){
    if(this.type=='1')
    {
      alert("Login Success")
  this.router.navigateByUrl('dashboard')
    }
    else{
      alert("Login Success")
      this.router.navigateByUrl('user')
    }
  }
  else{
    alert('Invalid  Username Or Password')
  }


}}
