import {Component, Input, OnInit} from '@angular/core';
import {IUser} from "../shared/interfaces/user";
import {UserService} from "../shared/services/user.service";

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  user: IUser;

  constructor(private _userService: UserService) {
  }

  ngOnInit() {
    this.getUserDetail()
  }

  getUserDetail() {
    this.user = this._userService.getUserDetail()
  }

}
