import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { GetMoviesService } from 'src/app/Services/get-movies.service';
import { SharedDataService } from 'src/app/Services/shared-data.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movies:any;
  
  constructor(private movieService:GetMoviesService,private user: SharedDataService) { 
  
    
  }

  ngOnInit(): void {
    this.movieService.GetMovies().subscribe(data => {this.movies = data;})

    
    
  }
  
  


  

}
