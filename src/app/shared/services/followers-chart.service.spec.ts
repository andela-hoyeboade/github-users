import { TestBed, inject } from '@angular/core/testing';

import { FollowersChartService } from './followers-chart.service';

describe('FollowersChartService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FollowersChartService]
    });
  });

  it('should be created', inject([FollowersChartService], (service: FollowersChartService) => {
    expect(service).toBeTruthy();
  }));
});
