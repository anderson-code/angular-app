import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-clientes-list',
  templateUrl: './clientes-list.component.html',
  styleUrls: ['./clientes-list.component.css']
})
export class ClienteListComponent implements OnInit {

  cars: any[];

  constructor() { }

  ngOnInit() {

    this.cars = [
      { nome: 'vin', valor: 'Vin' },
      {nome: 'year', valor: 'Year' },
      { nome: 'brand', valor: 'Brand' },
      { nome: 'color', valor: 'Color' }
    ];
  }

}
