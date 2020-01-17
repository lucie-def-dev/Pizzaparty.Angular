import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PizzaComponent } from './pizza/pizza.component';
import { UserComponent } from './user/user.component';

import { IngredientListComponent } from './ingredient-list/ingredient-list.component';
import { MenuComponent } from './menu/menu.component';
import { TestPipe } from './pipe/test.pipe';
import { TvaPipe } from './pipe/tva.pipe';
import { HomeComponent } from './home/home.component';
import { PizzaListComponent } from './pizza-list/pizza-list.component';
import { PizzaSingleComponent } from './pizza-single/pizza-single.component';


@NgModule({
  declarations: [
    AppComponent,
    PizzaComponent,
    UserComponent,
    IngredientListComponent,
    MenuComponent,
    TestPipe,
    TvaPipe,
    HomeComponent,
    PizzaListComponent,
    PizzaSingleComponent,

    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {path : '', component: HomeComponent },
      { path : 'pizzas', component: PizzaListComponent },
      { path : 'pizzas/:id', component: PizzaSingleComponent } // un objet représente une route
       // un objet représente une route
    ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
