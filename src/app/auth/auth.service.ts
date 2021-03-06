import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';;
import { JwtHelperService } from '@auth0/angular-jwt';;


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly TOKEN_NAME = 'contr_auth'
  private readonly url: string = `https://api-control-plus.herokuapp.com/api/v1/`;
  loggedUser: string = '';

  constructor(
    private http: HttpClient,
    private readonly jwtHelper: JwtHelperService
  ) { }

  isAuthenticated() {
    const token = localStorage.getItem(this.TOKEN_NAME) || undefined;
    return !this.jwtHelper.isTokenExpired(token);
  }

  login(user: { email: string, password: string }) {
    return this.http.post<any>(`${this.url}login`, user, { withCredentials: false });      
  }


  doLoginUser(username: string, tokens: string) {
    this.loggedUser = username;
    this.storeTokens(tokens);
  }


  storeTokens(token: string) {
    localStorage.setItem(this.TOKEN_NAME, token);
  }

  logout() {
    alert(`not implemented`);
  }

  token() {
    return localStorage.getItem(this.TOKEN_NAME) || '';
  }
}
