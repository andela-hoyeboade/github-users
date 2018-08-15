import {Injectable} from '@angular/core';
import faker from 'faker';
import {IUser} from "../interfaces/user";

@Injectable({
  providedIn: 'root'
})
export class DummyDataService {

  constructor() {
  }

  usersFollowersChartData(count: number = 10) {
    return Array.from(Array(count), () => {
      return {name: faker.internet.userName(), value: faker.random.number(9999)}
    });
  }

  colors(count: number = 1) {
    if (count === 1) {
      return [faker.internet.color()]
    } else {
      return Array.from(Array(count), () => {
        return faker.internet.color()
      });
    }
  }

  user(): IUser {
    return {username: faker.internet.userName(), avatar: faker.internet.avatar()}
  }
}


