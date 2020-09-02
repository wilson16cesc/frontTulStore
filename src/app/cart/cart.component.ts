import { Component, OnInit } from '@angular/core';
import {CartService} from '../services/cart.service';

import { Observable } from 'rxjs';

import {ItemCart} from '../model/ItemCart';
import { Product } from '../model/Product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  public productsItem: Observable<Product[]>;
  public items: ItemCart[];
  
  constructor(public cartService: CartService) { }

  ngOnInit(): void {

    // this.items = this.cartService.getItems();
    this.getProducts();
  }
  public getProducts(){
    this.productsItem = this.cartService.getAll();
  }

  public edit(item :ItemCart){
      this.cartService.edit(item);
  }
  public delete(item :ItemCart){
    this.cartService.delete(item);
  }
  public pay(){
    
  }
}
