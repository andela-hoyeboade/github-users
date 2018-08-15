import {Injectable} from '@angular/core';
import {IUser} from "../interfaces/user";
import {DummyDataService} from "./dummy-data.service";
import {HttpService} from "./http.service";
import {IUserSearchResults} from "../interfaces/search-user-results";
import {Observable} from "rxjs/index";

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
}
