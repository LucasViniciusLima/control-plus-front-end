import { Component, OnInit } from '@angular/core';
import { FluxoReceita } from 'src/app/models/fluxo-receita.model';
import { FluxoReceitaService } from 'src/app/shared/services/fluxo-receita.service';

@Component({
  selector: 'app-criar-fluxo-receita',
  templateUrl: './criar-fluxo-receita.component.html',
  styleUrls: ['./criar-fluxo-receita.component.css']
})
export class CriarFluxoReceitaComponent implements OnInit {

  fluxoReceita: FluxoReceita;

  constructor(private readonly fluxoReceitaService: FluxoReceitaService) {
    this.fluxoReceita = new FluxoReceita('', 0, new Date());
  }

  ngOnInit(): void {

  }

  cadastrarReceita() {
    this.fluxoReceitaService.criarFluxoReceita(this.fluxoReceita);
  }

}
