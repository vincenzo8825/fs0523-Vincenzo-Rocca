
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaProdottiComponent } from './lista-prodotti/lista-prodotti.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { ShoppingComponent } from './shopping/shopping.component';

const routes: Routes = [
  { path: '', component: ListaProdottiComponent },
  { path: 'favorites', component: FavoritesComponent },
  { path: 'shopping', component: ShoppingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
