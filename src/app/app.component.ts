import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private readonly authService: AuthService) { }

  authenticated: boolean = false;

  ngOnInit(){
    this.authenticated = this.authService.isAuthenticated();
  }

}
