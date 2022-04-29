import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { Tokens } from './models/tokens.model';
//import { JwtHelperService } from '@auth0/angular-jwt';


export const JWT_NAME = 'MYJWTSECRET';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url: string = `http://localhost:3000/api/v1/`;
  loggedUser: string = '';

  constructor(
    private http: HttpClient
    //private readonly jwtHelper: JwtHelperService
  ) { }

  isAuthenticated() {
    //const token = localStorage.getItem(JWT_NAME) || undefined ;
    //return !this.jwtHelper.isTokenExpired(token);
    return true;
  }

  login(user: { email: string, password: string }): Observable<boolean> {
    return this.http.post<any>(`${this.url}/login`, user)
      .pipe(
        tap(tokens => this.doLoginUser(user.email, tokens)),
        //map(true),
        catchError(error => {
          alert(error.error);
          return of(false);
        })
      )
  }


  doLoginUser(username: string, tokens: Tokens){
    this.loggedUser = username;
    this.storeTokens(tokens);
  }


  storeTokens(token: Tokens){
    //localStorage.setItem(this.JWT_TOKEN, tokens.jwt);
    //localStorage.setItem(this.REFRESH_TOKEN, tokens.refreshToken);
  }

  logout(){
    alert(`not implemented`);
  }
}
