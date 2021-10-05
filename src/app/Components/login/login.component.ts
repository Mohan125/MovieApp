
import { Router, RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { LoginService } from './../../Services/login.service';
import { Component, OnInit } from '@angular/core';
import { SharedDataService } from 'src/app/Services/shared-data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'MovieAppLogin',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private LoginService:LoginService,private sharedData:SharedDataService,private router:Router) { }

  ngOnInit(): void {
  }
  onSubmit(value:any){

      let object = {UserName:value.value.UserName,Password:value.value.Password}
      this.LoginService.PostIsLoggedIn(object).subscribe(data => {this.sharedData.setUser(data);this.sharedData.emitUserChangeEvent(this.sharedData.User.isAdmin)
      })
      this.router.navigate(['movies']);

  }
  loadSignup(){
    this.router.navigate(['signup']);
  }

}
