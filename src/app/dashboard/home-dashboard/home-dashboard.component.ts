import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-dashboard',
  templateUrl: './home-dashboard.component.html',
  styleUrls: ['./home-dashboard.component.css']
})
export class HomeDashboardComponent implements OnInit {
  saleData = [
    { name: "02/02/2022", value: 105000 },//quantidade gasta naquele dia
    { name: "13/02/2022", value: 55000 },
    { name: "14/02/2022", value: 15000 },
    { name: "11/03/2022", value: 150000 },
    { name: "12/03/2022", value: 20000 },
    { name: "14/03/2022", value: 105000 },
    { name: "15/03/2022", value: 55000 },
    { name: "16/03/2022", value: 15000 },
    { name: "17/03/2022", value: 150000 },
    { name: "18/03/2022", value: 20000 }
  ];

  quantsaleData = [
    { name: "02/02/2022", value: 5 },//quantidade de itens comprados
    { name: "13/02/2022", value: 10 },
    { name: "14/02/2022", value: 15 },
    { name: "11/03/2022", value: 8 },
    { name: "12/03/2022", value: 2 },
    { name: "14/03/2022", value: 1 },
    { name: "15/03/2022", value: 5 },
    { name: "16/03/2022", value: 10 },
    { name: "17/03/2022", value: 15 },
    { name: "18/03/2022", value: 20 }
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
