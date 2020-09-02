import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Product, DEFAULT_PRODUCT_OBJECT } from '../model/Product';
import { Observable } from 'rxjs';
import {CartService} from '../services/cart.service';
import { ItemCart,DEFAULT_ITEM_CART_OBJECT } from '../model/ItemCart';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
 
  products: Observable<Product[]>;
  product: Product  = DEFAULT_PRODUCT_OBJECT;
  item: ItemCart  = DEFAULT_ITEM_CART_OBJECT;
  

  

  constructor(private productsService: ProductsService,public cartService: CartService){

  }

  ngOnInit(){
    this.getProducts();
    

    // const observable = this.productsService.buildObservable();
    // observable.subscribe((data) => {
    //   console.log(data);
    // })
  }

  public getProducts(){
    this.products = this.productsService.getAll();
  }

  public addCart(p : Product){
    const dato = prompt("Cantidad a Comprar");  
    const quality = parseInt(dato);
    if(Number.isInteger(quality)){
      console.log("hola");
      this.item.product_id = p.id;
      this.item.cart_id = 0;
      this.item.name = p.name;
      this.item.quantity = quality;
      this.cartService.create(this.item).subscribe((data) =>{
      

      });

    }else{
      alert("No es un numero!")
    }
  }

}
