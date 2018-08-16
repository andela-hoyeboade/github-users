import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {NgModule} from '@angular/core';
import {NgxChartsModule} from '@swimlane/ngx-charts';

import {AppComponent} from './app.component';
import {MyMaterialModule} from './material.module';
import {HomeComponent} from './home/home.component'
import {AppRoutingModule} from './app-routing.module';
import {UserDetailComponent} from './user-detail/user-detail.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from '@angular/forms';
import { UserListComponent } from './user-list/user-list.component';
import { FollowersChartComponent } from './followers-chart/followers-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserDetailComponent,
    UserListComponent,
    FollowersChartComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MyMaterialModule,
    AppRoutingModule,
    NgxChartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
