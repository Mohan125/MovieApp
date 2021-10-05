import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {
  readonly APIUrl = "https://localhost:44377/api";

  constructor(private httpClient:HttpClient) { }

  addUser(userDate:any){

    return this.httpClient.post(this.APIUrl+"/MovieApp/addUser",userDate)

  }
}
