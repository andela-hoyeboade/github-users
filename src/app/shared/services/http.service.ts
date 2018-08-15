import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {IUserSearchResults} from "../interfaces/search-user-results";
import {catchError} from "rxjs/internal/operators";
import {throwError} from "rxjs/index";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  private _getSearchUrl(query: string) {
    return `https://api.github.com/search/users?q=${query}`;
  }

  handleError(error: HttpErrorResponse) {
    return throwError(
    error.message || 'An error occurred. Please try again later.'
    );
  }

  searchUsers(query: string='') {
    return this._http.get<IUserSearchResults>(this._getSearchUrl(query)).pipe(
      catchError(this.handleError)
    );
  }
}
