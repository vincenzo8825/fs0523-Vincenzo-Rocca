import { Component } from '@angular/core';

@Component({
  selector: 'app.component.html',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
addToCart(_t6: any) {
throw new Error('Method not implemented.');
}
  title = 'Project1';
products: any;
}
export class Product{
  name: string;
  price: number;
  description: string;
  image: string;
  constructor(name: string, price: number, description: string, image: string) {
    this.name = name;
    this.price = price;
    this.description = description;
    this.image = image;
  }
}
export class Service{
  addToCart(_t6: any) {
    throw new Error('Method not implemented.');
  }
}
export class ServiceService{
  addToCart(_t6: any) {
    throw new Error('Method not implemented.');
  }
}


