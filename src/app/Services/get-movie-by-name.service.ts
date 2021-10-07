import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetMovieByNameService {
  readonly APIUrl = "https://movieappbackend20211007082817.azurewebsites.net/api";

  constructor(private httpClient:HttpClient) { }

  GetMovieByName(value:string){

    return this.httpClient.get(this.APIUrl+"/MovieApp/movies/movie?title="+value)
  }
}
