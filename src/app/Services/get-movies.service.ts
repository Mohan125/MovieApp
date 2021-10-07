import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetMoviesService {
  readonly APIUrl = "https://movieappbackend20211007082817.azurewebsites.net/api";
  constructor(private httpClient: HttpClient) { }

  GetMovies(){
    return this.httpClient.get(this.APIUrl+"/MovieApp/movies");
  }
}
