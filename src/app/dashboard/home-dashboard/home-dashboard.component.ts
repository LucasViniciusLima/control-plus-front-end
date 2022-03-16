import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-dashboard',
  templateUrl: './home-dashboard.component.html',
  styleUrls: ['./home-dashboard.component.css']
})
export class HomeDashboardComponent implements OnInit {
  saleData = [
    { name: "02/02", value: 10050 },//quantidade gasta naquele dia
    { name: "13/02", value: 5500 },
    { name: "14/02", value: 1000 },
    { name: "11/03", value: 1900 },
    { name: "12/03", value: 990 },
    { name: "14/03", value: 10000 },
  ];

  quantsaleData = [
    { name: "02/02", value: 5 },//quantidade de itens comprados
    { name: "13/02", value: 10 },
    { name: "14/02", value: 15 },
    { name: "11/03", value: 8 },
    { name: "12/03", value: 2 },
    { name: "14/03", value: 1 },
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
