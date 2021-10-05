import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetMoviesService {
  readonly APIUrl = "https://localhost:44377/api";
  constructor(private httpClient: HttpClient) { }

  GetMovies(){
    return this.httpClient.get(this.APIUrl+"/MovieApp/movies");
  }
}
