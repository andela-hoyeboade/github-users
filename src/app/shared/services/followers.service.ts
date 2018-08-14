import {Injectable} from '@angular/core';

import {IUserFollowerChart} from "../interfaces/user-to-follower-chart";
import {DummyDataService} from "./dummy-data.service";


@Injectable({
  providedIn: 'root'
})
export class FollowersService {

  usersCount: number = 10;
  chartOptions: any = {};

  constructor(private _dummyDataService: DummyDataService) {
    this.setChartOptions()
  }

  setChartOptions() {
    this.chartOptions = {
      view: [700, 400],
      scheme: {
        domain: this._dummyDataService.colors(this.usersCount)
      },
      results: [],
      gradient: false,
      xAxis: true,
      yAxis: true,
      legend: true,
      showXAxisLabel: true,
      showYAxisLabel: true,
      xAxisLabel: 'Users',
      yAxisLabel: 'Followers'
    }
  }

  getUsersFollowersChartData(): IUserFollowerChart[] {
    return this._dummyDataService.usersFollowersChartData(this.usersCount)
  }
}
