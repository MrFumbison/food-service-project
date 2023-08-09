import { Component,OnInit } from '@angular/core';
import { CartService } from '../services/cart/cart.service';
import { cartitem } from '../shared/models/cartitem';
import { cart } from '../shared/models/cart';
import { FoodService } from '../services/food/food.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
  cart!:cart;
  constructor(private cartservice:CartService){
    this.setcart()
  }

  ngOnInit(): void {
    
  }

  removefromcart(cartitem:cartitem){
    this.cartservice.removefromcart(cartitem.food.id);
    this.setcart();
  }

  changequantity(cartitem:cartitem, quantityInString:string){
    const quantity = parseInt(quantityInString);
    this.cartservice.changequantity(cartitem.food.id, quantity);
    this.setcart();
  }

  setcart(){
    this.cart = this.cartservice.getcart();
  }

}
