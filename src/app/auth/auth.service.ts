import { Injectable } from '@angular/core';
//import { JwtHelperService } from '@auth0/angular-jwt';


export const JWT_NAME = 'MYJWTSECRET';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    //private readonly jwtHelper: JwtHelperService
    ) { }


  isAuthenticated() {
    //const token = localStorage.getItem(JWT_NAME) || undefined ;
    //return !this.jwtHelper.isTokenExpired(token);
    return false;
  }
}
