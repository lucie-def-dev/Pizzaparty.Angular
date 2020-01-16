import { Component } from '@angular/core';
import { Pizza } from './models/pizza.model';
import { User } from  './models/user.model';
import { Ingredient } from './models/ingredient.model';

const PIZZAS : Pizza[] = [
  { id: 1, name: 'Reine', price: 12 },
  { id: 2, name: '4 fromages', price: 13 },
  { id: 3, name: 'Orientale', price: 11 },
  { id: 4, name: 'Cannibale', price: 9 }
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Pizza party';
  selectedPizza: Pizza;
  pizzas:Pizza[] = PIZZAS;
  users:User[] = USERS;
  ingredients: Ingredient[] =[
    { name: 'Tomate', image: 'tomate.png', weight: 50 , price: 2},
    { name: 'Olive', image: 'olive.jpg', weight: 5 , price: 2}

  ];

  onSelect(pizza: Pizza): void {
    //on récupére la pizza cliquée
    console.log(pizza);
    this.selectedPizza = pizza;
  }
 
}

const USERS : User[] = [
  { name: 'Defossez'},
  { name: 'Lucie'},
  { name: '28 ans'},

];

