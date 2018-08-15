import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {HomeComponent} from "./home/home.component";
import {UserDetailComponent} from "./user-detail/user-detail.component";
import {FollowersComponent} from "./followers/followers.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'users/:login', component: UserDetailComponent},
  {path: 'followers', component: FollowersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
