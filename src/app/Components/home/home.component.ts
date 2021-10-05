import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { GetMoviesService } from 'src/app/Services/get-movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  movies:any;
  constructor(private movieService:GetMoviesService,private router:Router) { }

  ngOnInit(): void {
    this.movieService.GetMovies().subscribe(data => {this.movies = data;})

  }
  toLogin(){
    this.router.navigate(['login'])
  }

}
