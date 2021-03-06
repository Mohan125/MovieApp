import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {
  readonly APIUrl = "https://movieappbackend20211007082817.azurewebsites.net/api";

  constructor(private httpClient:HttpClient) { }

  addFavorite(value:any){
     return this.httpClient.post(this.APIUrl+"/MovieApp/addFavorite",value)
  }

  getAllFavorite(name:any){
    return this.httpClient.get(this.APIUrl+"/MovieApp/getAllFavorite?name="+name)
  }

  removeFavorite(value:any){
    return this.httpClient.post(this.APIUrl+"/MovieApp/removeFavorite",value)
  }
}
