import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginserviceService } from '../loginservice.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

  export class UserComponent implements OnInit {
    Name=''
    products:any
    filtercategory:any
    searchkey:any=''
  usersname: string | null;

      constructor(private loginservice:LoginserviceService,public router:Router ) { 

        
       const a= localStorage.getItem('currentuser')
        this.usersname=a
        console.log(a)
      }
    
      ngOnInit(): void {
        // if(!localStorage.getItem('token')){
        //   alert('please login')
        //   this.router.navigateByUrl('')
        // }
       }


      logout(){
        
        this.router.navigate([''])
      }
    
      
          login(){
        this.loginservice.search.subscribe((value:any)=>{
        this.searchkey=value
        })
      }
    filter(category:any){
      this.filtercategory=this.products.filter((item:any)=>
      {
        if((item.categoryId == category) || (category ==''))
        {
          return item
        }
        
      })
    }
    
}
