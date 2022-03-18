import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {

  imagemLogo: string = 'assets/img/fluxo-dinheiro.png';
  constructor() { }

  ngOnInit(): void {
  }

}
