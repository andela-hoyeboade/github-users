import {Injectable} from '@angular/core';
import {IUser} from "../interfaces/user";
import {DummyDataService} from "./dummy-data.service";
import {HttpService} from "./http.service";
import {IUserSearchResults} from "../interfaces/search-user-results";
import {from, Observable} from "rxjs/index";
import {mergeMap} from "rxjs/internal/operators";
import {ISearchedUser} from "../interfaces/searched-user";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _dummyDataService: DummyDataService, private _httpService: HttpService) {
  }

  searchUsers(query: string): Observable<IUserSearchResults> {
    return this._httpService.searchUsers(query)
  }

  fetchUser(userLogin): Observable<IUser> {
    return this._httpService.fetchUser(userLogin)
  }

  fetchUsers(users: ISearchedUser[]): Observable<IUser> {
    return from(users).pipe(
      mergeMap(user => <Observable<IUser>> this.fetchUser(user.login))
    )
  }
}
