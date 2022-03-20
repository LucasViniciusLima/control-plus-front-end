import { Component, OnInit } from '@angular/core';
import { FluxoCusto } from 'src/app/models/fluxo-custo.model';
import { FluxoReceita } from 'src/app/models/fluxo-receita.model';
import { FluxoCaixaService } from 'src/app/shared/services/fluxo-caixa.service';

@Component({
  selector: 'app-home-dashboard',
  templateUrl: './home-dashboard.component.html',
  styleUrls: ['./home-dashboard.component.css']
})
export class HomeDashboardComponent implements OnInit {
  saleData = [
    { name: "02/02", value: 1000050 },
    { name: "13/02", value: 550000 },
    { name: "14/02", value: 100000 },
    { name: "11/03", value: 190000 },
    { name: "12/03", value: 99000 },
    { name: "14/03", value: 1000000 },
  ];
  //os gráficos carregam normalmente se os dados forem apresentados aos mesmos de forma unica sem necessidade de mais de uma requisição
  quantsaleData = [
    { name: "02/02", value: 5000000 },
    { name: "13/02", value: 10000 },
    { name: "14/02", value: 15000 },
    { name: "11/03", value: 800000 },
    { name: "12/03", value: 20000 },
    { name: "14/03", value: 100000 },
  ];

  comparativoChart: Array<any> = [];

  constructor(private readonly fluxoCaixaService: FluxoCaixaService) { }

  ngOnInit(): void {
    this.fluxoCaixaService.carregarFluxosCusto()
      .subscribe((custo) => {
        this.comparativoChart.push({ name: 'Custos', value: custo?.total });
        this.comparativoChart = [...this.comparativoChart];
      });

    this.fluxoCaixaService.carregarFluxosReceita()
      .subscribe((receita) => {
        this.comparativoChart.push({ name: 'Receitas', value: receita?.total });
        this.comparativoChart = [...this.comparativoChart];
      });


  }


}
