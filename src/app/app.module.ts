import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PizzaComponent } from './pizza/pizza.component';
import { UserComponent } from './user/user.component';
import { IngredientListComponent } from './ingredient-list/ingredient-list.component';
// import { UserComponent } from './models/user.model';

@NgModule({
  declarations: [
    AppComponent,
    PizzaComponent,
    UserComponent,
    IngredientListComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // UserComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
