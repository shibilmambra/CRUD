import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { UserForm } from './Class/Adduser';
import { AppConfig } from './Class/AppConfig';
import { EditForm } from './Class/Edit';


@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {
  search: any;
  viewAllproduct() {
    
  }
  appconfig = new AppConfig()

  constructor(public http:HttpClient) { }

  InsertUsers(Id: UserForm)
  {
   
    let headers=new HttpHeaders();
    headers.append("Accept",'application/json');
    headers.append('content-type','application/json');
    let option={headers:headers};
    return this.http.post(this.appconfig.url+"/Sample",Id,option).pipe(map(res => res));
   
  }

  del(id:any){
    let headers=new HttpHeaders();
    headers.append("Accept",'application/json');
    headers.append('content-type','application/json');
    let option={headers:headers};
    return this.http.get(this.appconfig.url+"/Sample?id="+id,option).pipe(map(res => res));
  }

  
  ViewUsers()
  {
   
    let headers=new HttpHeaders();
    headers.append("Accept",'application/json');
    headers.append('content-type','application/json');
    let option={headers:headers};
    return this.http.get(this.appconfig.url+"/Sample",option).pipe(map(res => res));
   
  }

  EditUser(Id: EditForm)
  {
   
    let headers=new HttpHeaders();
    headers.append("Accept",'application/json');
    headers.append('content-type','application/json');
    let option={headers:headers};

    console.log('api');
    
    return this.http.post(this.appconfig.url+"/Update",Id,option).pipe(map(res => res));
   
  }

}
