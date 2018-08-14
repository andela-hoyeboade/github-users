import {Injectable} from '@angular/core';
import {IUser} from "../interfaces/user";
import {DummyDataService} from "./dummy-data.service";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _dummyDataService: DummyDataService) {
  }

  getUsers(): IUser[] {
    return this._dummyDataService.users()
  }

  getUserDetail(): IUser {
    return this._dummyDataService.user()
  }
}
