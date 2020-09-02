import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {ProductsComponent} from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { ContainerBuyComponent } from './container-buy/container-buy.component';

import {ProductsService} from './services/products.service';
import {CartService} from './services/cart.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    CartComponent,
    ContainerBuyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [ProductsService,CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
