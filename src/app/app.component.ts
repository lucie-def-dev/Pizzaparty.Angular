import { Component } from '@angular/core';

class Pizza {
  id: number;
  name: string;
  price: number;

}
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
  title = 'Pizzaparty';
  selectedPizza: Pizza;
  pizzas:Pizza[] = PIZZAS;

  onSelect(pizza: Pizza): void {
    //on récupére la pizza cliquée
    console.log(pizza);
    this.selectedPizza = pizza;
  }
  
}
