import { Component, OnInit } from '@angular/core';
import { PizzaService } from '../pizza.service';
import { Pizza } from '../models/pizza.model';

@Component({
  selector: 'app-pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.scss']
})

export class PizzaListComponent implements OnInit {
    pizzas: Pizza[] = [];

  constructor(private PizzaService: PizzaService) { }
  ngOnInit() {
    //on récupére les pizzas via le service sur l'api
    this.PizzaService.getPizza().then(pizzas => this.pizzas = pizzas)
  }

}
