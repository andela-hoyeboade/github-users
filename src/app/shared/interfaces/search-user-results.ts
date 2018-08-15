import {ISearchedUser} from "./searched-user";

export interface IUserSearchResults {
  total_count: number,
  incomplete_results: boolean,
  items: ISearchedUser[]
}
