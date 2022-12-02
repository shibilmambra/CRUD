import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService  {
  search: any;
  viewAllproduct() {
    throw new Error('Method not implemented.');
  }


  constructor(private http:HttpClient) 
  { }
  user(){
    const baseurl='http://localhost:3000/user'
    return this.http.get(baseurl)
  }
  adduser(userdata:any){
    const baseurl='http://localhost:3000/user'
    return this.http.post(baseurl,userdata)
  }
 
  remove(removeuser:any){
    const baseurl='http://localhost:3000/user'
    return this.http.delete(baseurl,removeuser)
 }

}
