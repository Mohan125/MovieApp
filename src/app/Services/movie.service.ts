import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  readonly APIUrl = "https://movieappbackend20211007082817.azurewebsites.net/api";
  constructor(private httpClient:HttpClient) { }

  addMovie(movie:any){
    return this.httpClient.post(this.APIUrl+"/MovieApp/addMovie",movie)
  }

  deleteMovie(movieName:any){
    return this.httpClient.delete(this.APIUrl+"/MovieApp/deleteMovie?name="+movieName)
  }
}
