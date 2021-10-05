import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  readonly APIUrl = "https://localhost:44377/api";
  constructor(private httpClient: HttpClient) { }

  public PostIsLoggedIn(value:any){
     return this.httpClient.post(this.APIUrl+"/MovieApp/IsLoggedIn",value);
  }
}
