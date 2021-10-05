import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModifyMovieService {
  readonly APIUrl = "https://localhost:44377/api";
  constructor(private httpClient:HttpClient) { }

  PutModifyMovie(value:any){
    return this.httpClient.put(this.APIUrl+"/MovieApp/movies/movie/edit/a",value);
  }


}
