// src/app/lista-prodotti/lista-prodotti.component.ts
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-lista-prodotti',
  templateUrl: './lista-prodotti.component.html',
  styleUrls: ['./lista-prodotti.component.scss']
})
export class ListaProdottiComponent implements OnInit {
  products!: any[];

  constructor(
    private productService: ProductService,
    private serviceService: ServiceService
  ) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe(products => {
      this.products = products;
    });
  }

  addToFavorites(product: any): void {
    this.serviceService.addToFavorites(product);
  }

  addToCart(product: any): void {
    this.serviceService.addToCart(product);
  }
}
