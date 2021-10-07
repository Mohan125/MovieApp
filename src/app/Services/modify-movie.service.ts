import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModifyMovieService {
  readonly APIUrl = "https://movieappbackend20211007082817.azurewebsites.net/api";
  constructor(private httpClient:HttpClient) { }

  PutModifyMovie(value:any){
    return this.httpClient.put(this.APIUrl+"/MovieApp/movies/movie/edit/a",value);
  }


}
