import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string = '';
  password: string = '';

  constructor(
    private readonly authService: AuthService,
    private router: Router) { }


  ngOnInit(): void {
  }

  login() {
    this.authService.login({ email: this.email, password: this.password }).subscribe(response => {
      this.authService.doLoginUser(this.email, response["access_token"]);
      this.router.navigate(['home']);
    });

  }

}
