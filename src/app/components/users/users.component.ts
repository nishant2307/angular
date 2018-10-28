import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  user: User ={
    firstName: '',
    lastName: '',
    email: '',
    // age: null,
    // address:{
    //   street:'',
    //   city:'',
    //   state:''
    // }
  }
  users: User[];
  showExtended: boolean = true;
  loaded: boolean = false;
  enableAdd: boolean = false;
  // currentClasses = {};
  // currentStyles = {};
  showUserForm: boolean = true;
  @ViewChild('userForm')form: any;
  data: any;

  constructor(private dataService: DataService) { }
  // "../node_modules/bootstrap/dist/js/bootstrap.js"
  ngOnInit() {
    this.dataService.getData().subscribe(data=>{

    });
    //setTimeout(() => {
      // this.users = [
      //   {
      //     firstName : 'Nishant',
      //     lastName: 'Bhardwaj',
      //     email: 'nishant@gmail.com',
      //     // age: 24,
      //     // address:{
      //     //   street:'12 baker street',
      //     //   city: 'Jonesboro',
      //     //   state: 'Arkansas'
      //     // },
      //     //image: 'https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwiMsfL84KvcAhWHc98KHb5rBwwQjRx6BAgBEAQ&url=https%3A%2F%2Fpixabay.com%2Fen%2Fseat-600-utilitarian-cropped-photo-1454271%2F&psig=AOvVaw1irQx0wdyRiuQOzNYvKkmf&ust=1532110085112493',
      //     isActive: true,
      //     //balance :100,
      //     registered : new Date('01/02/2018 08:30:00'),
      //     hide: true
      //   },
      //   {
      //     firstName : 'Hitesh',
      //     lastName: 'Sharma',
      //     email:'hitesh@gmail.com',
      //     // age: 25,
      //     // address:{
      //     //   street:'11 baker street',
      //     //   city: 'Jonesboro',
      //     //   state: 'Arkansas'
      //     // },
      //     //image: 'http//lorempixel.com/600/600/people/2',
      //     isActive: false,
      //     //balance :100,
      //     registered : new Date('01/03/2018 08:30:00'),
      //     hide: true
      //   },{
      //     firstName : 'Ashit',
      //     lastName: 'Mittal',
      //     email: 'ashit@gmail.com',
      //     // age: 24,
      //     // address:{
      //     //   street:'13 baker street',
      //     //   city: 'Jonesboro',
      //     //   state: 'Arkansas'
      //     // },
      //     //image: 'http//lorempixel.com/600/600/people/1',
      //     isActive:true,
      //     //balance :100,
      //     registered : new Date('01/04/2018 08:30:00'),
      //     hide: true
      //   }
      // ];
      //this.users = this.dataService.getUsers();
      this.dataService.getUsers.subscribe(users =>{
        this.users = users;
        this.loaded = true;
      });
      
    //}
    //,2000);
    
    //this.showExtended = false;
    // this.addUser({
    //   firstName : 'Nishant',   
    //   lastName: 'Bhardwaj',
    //   age: 24,
    //   address:{
    //     street:'14 baker street',
    //     city: 'Jonesboro',
    //     state: 'Arkansas'
    //   }
    // });
    //this.setCurrentClasses();
    //this.setCurrentStyles();
  }
  addUser(){
    this.user.isActive =true;
    this.user.registered =new Date();
    this.users.unshift(this.user);
    // this.user ={
    //   firstName: '',
    //   lastName: '',
    //   email:''
      // age: null,
      // address:{
      //   street:'',
      //   city:'',
      //   state:''
      // }
    //}
  }
  toggleHide(user:User){
    user.hide = !user.hide;
  }
  onSubmit({value,valid}:{value:User,valid:boolean}){
    if(!valid){
      console.log('invalid form');
    }else{
      value.isActive=true;
      value.registered=new Date();
      value.hide=true;
      //this.users.unshift(value);
      this.dataService.addUser(value);
      this.form.reset();
    }
    
  }
  // setCurrentClasses(){
  //   this.currentClasses = {
  //     'btn-success': this.enableAdd
  //   }
  // }
  // setCurrentStyles(){
  //   this.currentStyles = {
  //     'padding-top': this.showExtended ? '0':'40px',
  //     'font-size':this.showExtended ? '':'40px'
  //   }
  // }
  // fireEvent(e){
  //   //console.log('Button clicked');
  //   console.log(e.type);
  // }
  
  // fireEvent(e){
  //   console.log(e.target.value);
  //   console.log(e.type);
  // }
}
