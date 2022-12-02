

import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserForm } from '../Class/Adduser';
import { AppConfig } from '../Class/AppConfig';

import { LoginserviceService } from '../loginservice.service';


@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit{


  userform=new UserForm()
appconfig=new AppConfig()
  currentuser=''
  // addproductform=this.fb.group({
    
  //       username: [''],
  //       password: [''],
  //       usertype: ['']
  // })
  
  logindata: any;
  userlist: any;
  constructor(private fb:FormBuilder,private router:Router,private viewuser:LoginserviceService){}
  ngOnInit(): void {}
    
adduser(){

  this.viewuser.InsertUsers(this.userform).subscribe((data:any)=>{
    alert('User Added')
    this.router.navigateByUrl('dashboard')
  })


}
}
