import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieModule } from 'src/app/Model/movie/movie.module';
import { GetMovieByNameService } from 'src/app/Services/get-movie-by-name.service';
import { ModifyMovieService } from 'src/app/Services/modify-movie.service';


@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.css']
})
export class EditMovieComponent implements OnInit {
  //movie: MovieModule = {title:'',boxOffice:'',active:'',genre:'',hasTeaser:'',dateOfLaunch:''};
  name:any=1;
  movieEditForm: FormGroup|any;
  movie:any;
  // title:any=1;
  // boxOffice:any=1;
  // active:any=1;
  // dateOfLaunch:any=1;
  // genre:any=1;
  // hasTeaser:any=1;
  
  
  constructor(private activatedRoute:ActivatedRoute,private getMovieByName:GetMovieByNameService,private modifyMovie:ModifyMovieService,private router:Router) {
    
   }

  ngOnInit(): void {

    this.movieEditForm = new FormGroup({
      'title': new FormControl(null),
      'boxOffice':new FormControl(null),
      'active':new FormControl(null),
      'dateOfLaunch':new FormControl(null),
      'genre':new FormControl(null),
      'hasTeaser':new FormControl(null),

    });
    
    this.activatedRoute.queryParams.subscribe((params) => {
      this.name = params.title;
    });

    this.getMovieByName.GetMovieByName(this.name).subscribe((data) => {this.movie = data;
      this.movieEditForm.setValue({
        'title': this.movie.title,
        'boxOffice': this.movie.boxOffice,
        'active': this.movie.active,
        'dateOfLaunch': this.movie.dateOfLaunch,
        'genre': this.movie.genre,
        'hasTeaser': this.movie.hasTeaser

      })
      
    });

    

    // this.title =this.movie.title;

  
  }
  onSubmit(){

    let value = this.movieEditForm.value;
    let object = {title:String(value.title),
                  boxOffice:String(value.boxOffice),
                  active:(value.active == ("True"||"true"))? true : false,
                  dateOfLaunch: new Date(value.dateOfLaunch),
                  genre: String(value.genre),
                  hasTeaser:(value.active == ("True"||"true"))? true : false}
                 
    this.modifyMovie.PutModifyMovie(object).subscribe(data => {console.log(data)})
    
    this.router.navigate(['movies']);

  }
 

}
