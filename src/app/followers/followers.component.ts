import {Component, OnInit} from '@angular/core';
import {FollowersService} from "../shared/services/followers.service";
import {IUserFollowerChart} from "../shared/interfaces/user-to-follower-chart";

@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.css']
})
export class FollowersComponent implements OnInit {
  usersFollowersChartData: IUserFollowerChart[] = [];

  constructor(public followersService: FollowersService) {
  }

  ngOnInit() {
    this.getUsersFollowers();
  }

  getUsersFollowers() {
    this.usersFollowersChartData = this.followersService.getUsersFollowersChartData()
  }
}
