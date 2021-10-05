import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/Services/movie.service';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css'],
})
export class AddMovieComponent implements OnInit {
  movieAdded: any = 0;
  alreadyAdded: any = 0;

  constructor(private movie: MovieService) {}

  ngOnInit(): void {}
  onSubmit(value: any) {
    let obj = {
      title: value.value.title,
      boxOffice: value.value.boxOffice,
      active: Boolean(value.value.active),
      dateOfLaunch:new Date(value.value.dateOfLaunch) ,
      genre: value.value.genre,
      hasTeaser: Boolean(value.value.hasTeaser),
      favoriteIndicator: false
    };


    
    this.movie.addMovie(obj).subscribe((data) => {
  
      if (data != null) {
        this.movieAdded = true;
      }
      if (data == null) {
        this.movieAdded = false;
        this.alreadyAdded = true;
      }
    });
  }
}
