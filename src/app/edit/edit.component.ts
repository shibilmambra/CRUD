import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppConfig } from '../Class/AppConfig';
import { EditForm } from '../Class/Edit';


import { UserLogin } from '../Class/UserLogin';
import { LoginserviceService } from '../loginservice.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent  implements OnInit{

  editfor=new EditForm()
  appconfig=new AppConfig
 

constructor(private edit:LoginserviceService,private router:Router,private activatedroute:ActivatedRoute){this.val()}
  ngOnInit(): void {
    
  }

ngOnInIt(){

}


EditForm(Id:any){

  this.edit.EditUser(this.editfor).subscribe((data:any)=>{
      alert('User Edited')
      this.router.navigateByUrl('dashboard')
    })
    }

    val(){
      this.activatedroute.queryParams.subscribe(params=>{
        if(this.router.getCurrentNavigation()?.extras.state){
          this.editfor=this.router.getCurrentNavigation()?.extras.state?.['data']
        }
        
      })
    }



}
