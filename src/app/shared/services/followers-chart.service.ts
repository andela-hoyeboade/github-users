import {Injectable} from '@angular/core';

import {DummyDataService} from "./dummy-data.service";


@Injectable({
  providedIn: 'root'
})
export class FollowersChartService {

  usersCount: number = 10;
  chartOptions: any = {};

  constructor(private _dummyDataService: DummyDataService) {
    this.setChartOptions()
  }

  setChartOptions() {
    this.chartOptions = {
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
      yAxisLabel: 'No of Followers'
    }
  }
}
