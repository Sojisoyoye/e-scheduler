import { Injectable } from '@angular/core';
import { IUser } from './user.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser: IUser;

  constructor(private http: HttpClient) { }

  loginUser(userName: string, password: string) {
    const loginInfo = { username: userName, password};
    const options = { headers: new HttpHeaders({'Content-Type': 'application/json'})};
    const url = '/api/login';

    return this.http.post(url, loginInfo, options)
    .pipe(tap(data => {
      this.currentUser = data['user'] as IUser;
    }))
    .pipe(catchError(err => {
      return of(false);
    }));
  }

  isAuthenticated() {
    return !!this.currentUser;
  }

  updateCurrentUser(firstName: string, lastName: string) {
    this.currentUser.firstName = firstName;
    this.currentUser.lastName = lastName;

    const options = { headers: new HttpHeaders({'Content-Type': 'application/json'})};
    const url = `/api/users/${this.currentUser.id}`;

    return this.http.put(url, this.currentUser, options);
  }

  logout() {
    this.currentUser = undefined;

    const options = { headers: new HttpHeaders({'Content-Type': 'application/json'})};
    return this.http.post('/api/logout', {}, options);
  }

  checkAuthenticationStatus() {
    this.http.get('/api/currentIdentity')
    .pipe(tap(data => {
      if (data instanceof Object) {
        this.currentUser = data as IUser;
      }
    }))
    .subscribe();
  }
}


// tap is a way to tap into the stream and take an action when a piece of data comes throught the observable,
// it lets us just see the value that comes through then take action based on the value because we are not manipulating DataCue, if
// we were we would use map
