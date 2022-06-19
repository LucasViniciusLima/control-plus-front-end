import { Component, OnInit } from '@angular/core';
import { FluxoCaixa } from 'src/app/models/fluxo-caixa.model';
import { FluxoCusto } from 'src/app/models/fluxo-custo.model';
import { FluxoReceita } from 'src/app/models/fluxo-receita.model';
import { FluxoCaixaService } from 'src/app/shared/services/fluxo-caixa.service';

@Component({
  selector: 'app-home-dashboard',
  templateUrl: './home-dashboard.component.html',
  styleUrls: ['./home-dashboard.component.css']
})
export class HomeDashboardComponent implements OnInit {
  saleData = [];
  costData = [];
  quantsaleData = [];  
  quantCostData = [];

  comparativoChart: Array<any> = [];

  constructor(private readonly fluxoCaixaService: FluxoCaixaService) { }

  ngOnInit(): void {
    this.fluxoCaixaService.carregarFluxosCusto()
      .subscribe((custo) => {
        this.comparativoChart.push({ name: 'Custos', value: custo.total });
        this.comparativoChart = [...this.comparativoChart];

        let custoList: any = [];
        let quantCustoList: any = [];

        custoList[0] = custo.listaCusto[0];
        custoList[0].data = new Date(custoList[0].data).toLocaleString().substring(0, 10);

        quantCustoList[0] = { name: custoList[0].data, value: 1 };


        for (let i = 1; i < custo.listaCusto.length; i++) {

          const itemReceita = custo.listaCusto[i];
          itemReceita.data = new Date(itemReceita.data).toLocaleString().substring(0, 10);

          let indexDataEncontrada = custoList.findIndex((item: any) => item.data == itemReceita.data);

          if (indexDataEncontrada >= 0) {
            custoList[indexDataEncontrada].preco += itemReceita.preco;
            custoList[indexDataEncontrada].value++;
          } else {
            custoList.push(itemReceita);
            quantCustoList.push({ name: itemReceita.data, value: 1 });
          }

        }


        this.costData = custoList.map((item: any) => {
          return { name: item.data, value: item.preco };
        });
        this.quantCostData = quantCustoList;
      });

    this.fluxoCaixaService.carregarFluxosReceita()
      .subscribe((receita) => {
        this.comparativoChart.push({ name: 'Receitas', value: receita.total });
        this.comparativoChart = [...this.comparativoChart];

        let receitaList: any = [];
        let quantReceitaList: any = [];

        receitaList[0] = receita.listaReceita[0];
        receitaList[0].data = new Date(receitaList[0].data).toLocaleString().substring(0, 10);

        quantReceitaList[0] = { name: receitaList[0].data, value: 1 };


        for (let i = 1; i < receita.listaReceita.length; i++) {

          const itemReceita = receita.listaReceita[i];
          itemReceita.data = new Date(itemReceita.data).toLocaleString().substring(0, 10);

          let indexDataEncontrada = receitaList.findIndex((item: any) => item.data == itemReceita.data);

          if (indexDataEncontrada >= 0) {
            receitaList[indexDataEncontrada].preco += itemReceita.preco;
            quantReceitaList[indexDataEncontrada].value++;
          } else {
            receitaList.push(itemReceita);
            quantReceitaList.push({ name: itemReceita.data, value: 1 });
          }

        }


        this.saleData = receitaList.map((item: any) => {
          return { name: item.data, value: item.preco };
        });
        this.quantsaleData = quantReceitaList;

      });
  }


}
