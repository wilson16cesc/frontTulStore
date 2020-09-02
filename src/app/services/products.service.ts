import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

import {Product} from '../model/Product';


@Injectable()
export class ProductsService{

    private url = 'http://backTulStore.test/api/products';
    public productsObserver :Observable<Product[]>;

    constructor(private http: HttpClient){

    }

    public getAll(): Observable<Product[]> {
        return this.http.get(this.url) as Observable<Product[]>;
    }

    // getAll(){
    //     this.http.get(this.url)
    //     .pipe(map((data:Product[]) => {
    //         return data.map((p:any) => new Product(p.id, p.name,p.sku,p.description))   
    //     }))
        
    //     .subscribe(data => {
    //         console.log(data);
            
    //     })
    // }

    buildObservable() : Observable<any>{
        return Observable.create(function(observer){
            setInterval(() => observer.next('hola'),1000)
        })
    }

}