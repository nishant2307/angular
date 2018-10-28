import { Injectable } from '@angular/core';
//import { Observable } from 'rxjs/Observable';
import { Observable } from '../../../node_modules/rxjs';
import { of } from 'rxjs/observable/of';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  users: User[];
  data : Observable<any>;

  constructor() { 
    this.users = [
      {
        firstName : 'Nishant',
        lastName: 'Bhardwaj',
        email: 'nishant@gmail.com',
        isActive: true,
        registered : new Date('01/02/2018 08:30:00'),
        hide: true
      },
      {
        firstName : 'Hitesh',
        lastName: 'Sharma',
        email:'hitesh@gmail.com',
        isActive: false,
        registered : new Date('01/03/2018 08:30:00'),
        hide: true
      },{
        firstName : 'Ashit',
        lastName: 'Mittal',
        email: 'ashit@gmail.com',
        isActive:true,
        registered : new Date('01/04/2018 08:30:00'),
        hide: true
      }
    ];
  }
  getData(){
    this.data = new Observable(observer =>{
      setTimeout(()=> {
        observer.next(1);
      },1000);
      
      setTimeout(()=> {
        observer.next(2);
      },2000);
    
    setTimeout(()=> {
      observer.next(3);
    },3000);
    setTimeout(()=> {
      observer.next({name: ' Bradd'});
    },3000);
  return this.data;
  });
    
}
  getUsers(): Observable<User[]> {
    console.log('loading users from serrvice');
    return of(this.users);
  }
  addUser(user: User){
    this.users.unshift(user);
  }
}
