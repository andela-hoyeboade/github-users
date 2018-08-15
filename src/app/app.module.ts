import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {NgModule} from '@angular/core';
import {NgxChartsModule} from '@swimlane/ngx-charts';

import {AppComponent} from './app.component';
import {MyMaterialModule} from './material.module';
import {HomeComponent} from './home/home.component'
import {AppRoutingModule} from './app-routing.module';
import {UserDetailComponent} from './user-detail/user-detail.component';
import {FollowersComponent} from './followers/followers.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserDetailComponent,
    FollowersComponent
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
