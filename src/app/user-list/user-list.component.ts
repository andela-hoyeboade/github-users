import {Component, Input, OnInit} from '@angular/core';
import {ISearchedUser} from "../shared/interfaces/searched-user";

@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  columnsToDisplay: string[] = ['no', 'avatar', 'login'];
  @Input() searchedUsers: ISearchedUser[];
  @Input() resultsCount: number;

  constructor() { }

  ngOnInit() {

  }

}
