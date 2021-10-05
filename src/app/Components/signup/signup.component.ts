import { Router } from '@angular/router';
import { SignUpService } from './../../Services/sign-up.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private signup:SignUpService,private router:Router) { }

  ngOnInit(): void {
  }
  onSubmit(value:any){

    let object = {
      UserName: value.value.UserName,
      FirstName: value.value.FirstName,
      LastName: value.value.LastName,
      Password: value.value.Password,
      IsAdmin:false
    };
    this.signup.addUser(object).subscribe(data => {this.router.navigate(['login']);})

    
    


  }

}
