import {Component, OnInit} from '@angular/core';
import {IUser} from "../shared/interfaces/user";
import {UserService} from "../shared/services/user.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  users: IUser[] = [];
  columnsToDisplay: string[] = ['no', 'avatar', 'username'];
  resultsCount: number = 0;

  constructor(private _userService: UserService) {
  }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.users = this._userService.getUsers()
  }

}
