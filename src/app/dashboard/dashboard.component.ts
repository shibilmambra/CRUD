import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { LoginserviceService } from '../loginservice.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  user:any
  userid:any
  currentuser=''
 
  api: any;
  userlist: any;


  constructor( private router:Router, private activated:ActivatedRoute,private viewuser:LoginserviceService){
    this.getviewuser()
    
  }

  ngOnInit(): void {

    this.currentuser=localStorage.getItem('currentuser') || ''
  }
    logout(){
     
      this.router.navigate([''])
    }
    
    getviewuser(){
      this.viewuser.ViewUsers().subscribe((data:any)=>{
        this.userlist=data
      })
    }  
delete(Id: any){
  console.log(Id);
  this.viewuser.del(Id).subscribe((data:any)=>{
    alert("Deletd User")
    this.router.navigateByUrl('dashboard')
  })

}

    add(){
      this.router.navigateByUrl('adduser')
    }

    editbutton(i:any){
      let navigationextras:NavigationExtras={
        state:{
          data:i
        }
      }

      console.log(navigationextras.state);
      
      this.router.navigate(['/edit'],navigationextras)
    }
   

 


}
