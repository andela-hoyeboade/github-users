import {Component, OnInit} from '@angular/core';
import {IUser} from "../shared/interfaces/user";
import {UserService} from "../shared/services/user.service";
import {ISearchedUser} from "../shared/interfaces/searched-user";
import {MessageService} from "../shared/services/message.service";
import {FollowersChartService} from "../shared/services/followers-chart.service";
import {IUserFollowerChart} from "../shared/interfaces/user-to-follower-chart";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  searchedUsers: ISearchedUser[] = [];
  resultsCount: number;
  searchRequested: boolean;
  showSearchResults: boolean = true;
  searchText: string = '';
  usersFollowersChartData: IUserFollowerChart[] = [];

  constructor(private _userService: UserService,
              private _messageService: MessageService) {
  }

  ngOnInit() {
  }

  searchUsers(query:string): void {
    this._userService.searchUsers(query).subscribe((searchResults) => {
      this.searchRequested = true;
      this.resultsCount = searchResults.total_count;
      this.searchedUsers = searchResults.items.slice(0,10);
      this.showSearchResults = true;
      this._messageService.toastSuccessMessage('Search successful');
    }, (error) => {
      this._messageService.toastErrorMessage(error);
    })
  }

  onSubmitSearchForm(e) {
    e.preventDefault();
    this.searchUsers(this.searchText);
  }

  showFollowersBarChart() {
     if (!this.searchedUsers.length) {
       this._messageService.toastErrorMessage('Chart can\'t be shown for empty search results');
       return;
     }
     this.usersFollowersChartData = [];

     this._userService.fetchUsers(this.searchedUsers).subscribe(
       user => {
         this.usersFollowersChartData.push({name: user.login, value: user.followers});
         if (this.usersFollowersChartData.length === this.searchedUsers.length) {
           this.showSearchResults = false;
         }
       },
       error => this._messageService.toastErrorMessage(error)
     );
  }

}
