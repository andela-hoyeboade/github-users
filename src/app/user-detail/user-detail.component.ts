import {Component, Input, OnInit} from '@angular/core';
import {IUser} from "../shared/interfaces/user";
import {UserService} from "../shared/services/user.service";
import {MessageService} from "../shared/services/message.service";
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  user: IUser;

  constructor(private _userService: UserService, private _messageService: MessageService,
              private _route: ActivatedRoute) {
  }

  ngOnInit() {
    this.getUserDetail()
  }

  getUserDetail() {
    const userLogin = this._route.snapshot.paramMap.get('login');
    if (!userLogin) {
      this._messageService.toastErrorMessage('Invalid login supplied');
      return;
    }
    this._userService.fetchUser(userLogin).subscribe((user) => {
      this.user = user
    }, (error) => {
      this._messageService.toastErrorMessage(error)
    })
  }

}
