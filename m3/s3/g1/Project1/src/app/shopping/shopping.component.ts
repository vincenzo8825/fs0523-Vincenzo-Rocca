import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.scss']
})
export class ShoppingComponent implements OnInit {
  cartItems: any[] = [];

  constructor(private serviceService: ServiceService) {}

  ngOnInit(): void {
    this.cartItems = this.serviceService.getCart();
    this.serviceService.cartUpdated.subscribe(() => {
      this.cartItems = this.serviceService.getCart();
    });
  }
}

