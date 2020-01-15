import { Component } from '@angular/core';

class Pizza {
  id: number;
  name: string;
  price: number;

}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Pizzaparty';
  pizza = {
    id: 1,
    name: 'Reine',
    price: 12
  }
}
