import { Component, OnInit } from '@angular/core';
import { User } from "../../models/User";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  user: User = {
    firstName: '',
    lastName: '',
    age: null,
    address: {
      street: '',
      city: '',
      state: ''
    }
  };
  users: User[];
  showExtended: boolean = true;
  loaded: boolean = false;
  enableAdd: boolean = true;
  showUserForm: boolean = false;


  constructor() {
    // for dependency injection
  }

  ngOnInit() {

    this.users = [
      {
        firstName: 'John',
        lastName: 'Doe',
        age: 70,
        address: {
          street: '50 Main St',
          city: 'Seattle',
          state: 'WA'
        },
        isActive: true,
        registered: new Date('01/02/2018 08:30:00'),
        hide: true
      },
      {
        firstName: 'Kevin',
        lastName: 'Johnson',
        age: 33,
        address: {
          street: '26th Main St',
          city: 'Bellevue',
          state: 'WA'
        },
        registered: new Date('03/11/2018 08:30:00'),
        hide: true
      },
      {
        firstName: 'Karen',
        lastName: 'Williams',
        age: 32,
        address: {
          street: '55 Mill St',
          city: 'Miami',
          state: 'FL'
        },
        registered: new Date('04/05/2018 08:30:00'),
        hide: true
      }
    ];

    this.loaded = true;

  }

  addUser(user: User) {
    this.users.push(user);
  }

  toggleHide(user: User) {
    user.hide = !user.hide; 
  }

  onSubmit(e) {
    e.preventDefault();
  }

  fireEvent(e) {
    console.log(e.type);
    console.log(e.target.value);
  }
}
