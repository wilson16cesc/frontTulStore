import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {ItemCart, DEFAULT_ITEM_CART_OBJECT} from '../model/ItemCart';
import {Product} from '../model/Product';
import { Observable } from 'rxjs';


@Injectable()
export class CartService{

    private url = 'http://backTulStore.test/api/carts';
    
    private productsCart: ItemCart[] = [];
    public itemObserver :Observable<ItemCart[]>;
    

    constructor(private http: HttpClient){

    }
    
    public getAll(): Observable<Product[]> {
        return this.http.get(this.url) as Observable<Product[]>;
    }
    
    public create(item: ItemCart): Observable<ItemCart> {
        return this.http.post<ItemCart>(this.url, item);
        this.getAll();
    }    

    public add(item:ItemCart){
        let item1 = Object.assign({}, item);
        // this.create(item1);

        // let flag = true;
        // for (let i = 0; i < this.productsCart.length; i++) {
        //     if(this.productsCart[i].product_id === item1.product_id){
        //         flag = false;
        //         alert("El pruducto ya esta en el carrito");
        //     }
            
        // }
        // if(flag){
        //     this.productsCart.push(item1);
        // }
        
    }
    
    public edit(item:ItemCart){
        let item1 = Object.assign({}, item);
        for (let i = 0; i < this.productsCart.length; i++) {
            if(this.productsCart[i].product_id === item1.product_id){
                const dato = prompt("Cantidad a comprar");  
                const quality = parseInt(dato);
                if(Number.isInteger(quality)){
                    item1.quantity = quality; 
                    this.productsCart.splice(i, 1,item1);
                    // this.productsCart[i] = item1;
                }
            }
            
        } 
    }

    public delete(item:ItemCart){
        let item1 = Object.assign({}, item);
        for (let i = 0; i < this.productsCart.length; i++) {
            if(this.productsCart[i].product_id === item1.product_id){
                delete this.productsCart[i];
                this.productsCart.splice(i, 1);
            }
            
        } 
    }

    public checkout(){

    }

    public getItems(){
      return this.productsCart;
    }
}