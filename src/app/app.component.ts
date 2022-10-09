import { Component } from '@angular/core';
import dataLancamento from '../data/lancamento-conta-legado.json';
import {SummaryInterface, PaginationInterface, ItemInterface} from '../interfaces/data-interfaces';

interface DataInterface{
  summary: SummaryInterface,
  pagination: PaginationInterface,
  items: ItemInterface[]
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'lancamento-conta';

  data: DataInterface = dataLancamento;
  valorTotal: String = new Intl.NumberFormat('pt-BR').format(dataLancamento.summary.totalAmount);
  valorTotalTaxado: String = new Intl.NumberFormat('pt-BR').format(dataLancamento.summary.totalNetAmount);

  viewType: String = 'card';
}
