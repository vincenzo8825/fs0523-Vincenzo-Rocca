// src/app/favorites/favorites.component.ts
import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {
  favorites!: any[];

  constructor(private serviceService: ServiceService) {}

  ngOnInit(): void {
    this.favorites = this.serviceService.getFavorites();
    this.serviceService.favoritesUpdated.subscribe(() => {
      this.favorites = this.serviceService.getFavorites();
    });
  }
}
