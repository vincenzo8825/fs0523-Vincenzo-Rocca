
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { ListaProdottiComponent } from './lista-prodotti/lista-prodotti.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaProdottiComponent,
    FavoritesComponent,
    ShoppingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
