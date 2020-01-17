import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PizzaService } from '../pizza.service';
import { Pizza } from '../models/pizza.model';

@Component({
  selector: 'app-pizza-single',
  templateUrl: './pizza-single.component.html',
  styleUrls: ['./pizza-single.component.scss']
})
export class PizzaSingleComponent implements OnInit {
  pizza: Pizza;

  constructor (
    private route: ActivatedRoute,
    private pizzaService: PizzaService
) { }

  ngOnInit() {
    // je récupére l'id de la pizza dans l'url = $_GET['id]
    let id = this.route.snapshot.paramMap.get('id');
    this.pizzaService.getPizzas(id).then(pizza => this.pizza = pizza);
    console.log(this.route.snapshot.paramMap.get('id'));

  }

}
