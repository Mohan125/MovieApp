import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  constructor() { }

  public User:any;
  userChange: EventEmitter<boolean> = new EventEmitter();


  setUser(value:any){
    this.User = value;
  }
  emitUserChangeEvent(val:boolean) {
    this.userChange.emit(val);
  }
  getUserChangeEmitter() {
    return this.userChange;
  }

    
}
