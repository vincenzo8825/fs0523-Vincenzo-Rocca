// src/app/service.service.ts
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private favoritesSubject: Subject<any[]> = new Subject<any[]>();
  favorites$ = this.favoritesSubject.asObservable();

  private cartSubject: Subject<any[]> = new Subject<any[]>();
  cart$ = this.cartSubject.asObservable();

  private currentFavorites: any[] = [];
  private currentCart: any[] = [];
  cartUpdated: any;
  favoritesUpdated: any;

  constructor() {}

  addToFavorites(product: any): void {
    this.currentFavorites = [...this.currentFavorites, product];
    this.favoritesSubject.next([...this.currentFavorites]);
  }

  addToCart(product: any): void {
    this.currentCart = [...this.currentCart, product];
    this.cartSubject.next([...this.currentCart]);
  }

  getFavorites(): any[] {
    return [...this.currentFavorites];
  }

  getCart(): any[] {
    return [...this.currentCart];
  }
}
