import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {
  readonly APIUrl = "https://movieappbackend20211007082817.azurewebsites.net/api";

  constructor(private httpClient:HttpClient) { }

  addUser(userDate:any){

    return this.httpClient.post(this.APIUrl+"/MovieApp/addUser",userDate)

  }
}
