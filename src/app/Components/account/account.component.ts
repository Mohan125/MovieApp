import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { SharedDataService } from 'src/app/Services/shared-data.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  user:any ;
  
  constructor(private User:SharedDataService,private router:Router) { 
     
  }

  ngOnInit(): void {

    this.user = this.User.User;
  }

  logOut(){
    this.User.setUser(undefined);
    this.router.navigate(['']);
    this.User.emitUserChangeEvent(false)
  }


}
