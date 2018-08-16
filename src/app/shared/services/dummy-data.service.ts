import {Injectable} from '@angular/core';
import faker from 'faker';

@Injectable({
  providedIn: 'root'
})
export class DummyDataService {

  constructor() {
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
}


