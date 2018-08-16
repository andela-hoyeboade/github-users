import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowersChartComponent } from './followers-chart.component';

describe('FollowersChartComponent', () => {
  let component: FollowersChartComponent;
  let fixture: ComponentFixture<FollowersChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FollowersChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FollowersChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
