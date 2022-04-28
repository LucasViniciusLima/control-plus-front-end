import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import { JwtHelperService } from '@auth0/angular-jwt';


export const JWT_NAME = 'MYJWTSECRET';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url: string = `http://localhost:3000/api/v1/`;

  constructor(
    private http: HttpClient
    //private readonly jwtHelper: JwtHelperService
    ) { }


  isAuthenticated() {
    //const token = localStorage.getItem(JWT_NAME) || undefined ;
    //return !this.jwtHelper.isTokenExpired(token);
    return true;
  }

  async login(user: any){
    const loginUrl = this.url+'login';

    return this.http.post(loginUrl, user);
  }
}
