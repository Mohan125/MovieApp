import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { SharedDataService } from 'src/app/Services/shared-data.service';


@Component({
  selector: 'MovieApp-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

 
  isAdmin:any;
  subscription:any;
  constructor(private router:Router,private User:SharedDataService) {
    }

  ngOnInit(): void {
    this.isAdmin = this.User.User.isAdmin;
    
  }
  
  toLogin(){
    
    if(this.User.User == undefined){
      this.router.navigate(['login']);
    }
    else{
      
      this.router.navigate(['account']);
      
    }
    
    this.User.getUserChangeEmitter()
    .subscribe(item => this.isAdmin = item);
    
  
    
  }

}
