import {Component, Input, OnInit} from '@angular/core';
import {FollowersChartService} from "../shared/services/followers-chart.service";
import {IUserFollowerChart} from "../shared/interfaces/user-to-follower-chart";

@Component({
  selector: 'followers-chart',
  templateUrl: './followers-chart.component.html',
  styleUrls: ['./followers-chart.component.css']
})
export class FollowersChartComponent implements OnInit {

  @Input() usersFollowersChartData: IUserFollowerChart[] = [];

  constructor(public followersChartService: FollowersChartService) {
  }

  ngOnInit() {
  }

}
