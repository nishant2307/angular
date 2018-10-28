import { Component, OnInit } from '@angular/core';
import { removeDebugNodeFromIndex } from '@angular/core/src/debug/debug_node';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  //properties
  //user:User[];
  user:User;
  constructor(){
    
  }
  ngOnInit() {
    this.user={
      firstName: 'john',
      lastName: 'doe',
      email:'john@gmail.com'
    }
    //life cycle method
    //runs when component is inititalised
    //do things like ajax and serive calls 
  //   this.user =[{
  //     firstName : 'Nishant',
  //     lastName: 'Bhardwaj',
  //     age: 24,
  //     address:{
  //       street:'12 baker street',
  //       city: 'Jonesboro',
  //       state: 'Arkansas'
  //     }
  //   }]
  // }
} 
}
//==========================================================
  // firstName: string;
  // lastName : string;
  // age : number;
  // address;
  // foo: any;
  // hasKids: boolean;
  // numberArray: number[];
  // mixedArray : any[];
  // myTuple: [number,string,boolean];
  // unusable: void;
  // u: undefined;
  // n: null;

  // constructor() { 
  //   this.firstName = 'Nishant';
  //   this.lastName = 'Bhardwaj';
  //   this.age = 24;
  //   this.address={
  //     street: '13 Bakers Street',
  //     city: 'London',
  //     country: 'England'
  //     }
  //   this.numberArray = [1,2,3,4];
  //   this.mixedArray = [true,24,'hello'];
  //   this.myTuple = [12,'frfr',true];
  //   this.unusable = undefined;
  //   this.u = undefined;
  //   this.n = null;
  //   console.log(this.addNumbers(2,3));
  //   }

  
  // sayHello(){
  //   console.log('Hello ${this.firstName} '+this.firstName);
  // }

  // addNumbers(num1:number,num2:number):number{
  //   return num1+num2;
  // }

//}
