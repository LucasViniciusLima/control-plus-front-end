import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
//import { JwtHelperService } from '@auth0/angular-jwt';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly TOKEN_NAME = 'contr_auth'
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
        catchError(error => {
          alert(error.error);
          return of(false);
        })
      )
  }


  doLoginUser(username: string, tokens: string){
    this.loggedUser = username;
    this.storeTokens(tokens);
  }


  storeTokens(token: string){
    localStorage.setItem(this.TOKEN_NAME, token);
  }

  logout(){
    alert(`not implemented`);
  }

  token(){
    //return localStorage.getItem(this.TOKEN_NAME) || '';
    return `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NTEyMzIxNjIsImV4cCI6MTY1MTQ5MTM2Mn0.vmBSiFHs4G3-P15wi0rILkbjMBzUeECw74c_XoXTSII`;
  }
}
