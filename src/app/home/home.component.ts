import {Component, OnInit} from '@angular/core';
import {IUser} from "../shared/interfaces/user";
import {UserService} from "../shared/services/user.service";
import {ISearchedUser} from "../shared/interfaces/searched-user";
import {MessageService} from "../shared/services/message.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  searchedUsers: ISearchedUser[] = [];
  columnsToDisplay: string[] = ['no', 'avatar', 'login'];
  resultsCount: number;
  searchRequested: boolean;
  searchText: string = '';

  constructor(private _userService: UserService, private _messageService: MessageService) {
  }

  ngOnInit() {
  }

  searchUsers(query:string): void {
    this._userService.searchUsers(query).subscribe((searchResults) => {
      this.searchRequested = true;
      this.resultsCount = searchResults.total_count;
      this.searchedUsers = searchResults.items.slice(0,10);
      this._messageService.toastSuccessMessage('Search successful');
    }, (error) => {
      this._messageService.toastErrorMessage(error);
    })
  }

  onSubmitSearchForm(e) {
    e.preventDefault();
    this.searchUsers(this.searchText);
  }

}
