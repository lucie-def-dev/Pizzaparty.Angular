import { Component, OnInit } from '@angular/core';
import { Pizza } from '../models/pizza.model';
import { Ingredient } from '../models/ingredient.model';
import { User } from  '../models/user.model';
import { PizzaService } from '../pizza.service';

const USERS : User[] = [
  { name: 'Defossez'},
  { name: 'Lucie'},
  { name: '28 ans'},
];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent   {

  selectedPizza: Pizza;
  pizzas:Pizza[] = [];
  number = 2;
  users:User[] = USERS;
  ingredients: Ingredient[] =[
    { name: 'Tomate', image: 'tomate.png', weight: 50 , price: 2 , color: 'danger'},
    { name: 'Olive', image: 'olive.jpg', weight: 5 , price: 2 , color: 'dark'}
  ];
  selectedIngredients: Ingredient[] = [];

  constructor(private pizzaService:PizzaService) {
    //on récupére les piizzas dans le service
  }
  ngOnInit() {
    this.pizzaService.getPizza().then(
      pizzas => this.pizzas = pizzas
    );
  }


  onSelect(pizza: Pizza): void {
    //on récupére la pizza cliquée
    console.log(pizza);
    this.selectedPizza = pizza;
  }
  selectIngredient(event: Ingredient) {
    console.log(event);
    if(!this.selectedIngredients.includes(event)){
       this.selectedIngredients.push(event);
    }
   
  }
  deleteIngredient(index: number, event) {
    event.stopPropagation();
    //on supprime l'index du tableau
    this.selectedIngredients.splice(index, 1);
  }
 
}


