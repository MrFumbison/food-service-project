import { Injectable } from '@angular/core';
import { cart } from 'src/app/shared/models/cart';
import { cartitem } from 'src/app/shared/models/cartitem';
import { food } from 'src/app/shared/models/food';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: cart = new cart();

  addtocart(food: food): void {
    let cartItem = this.cart.items.find(item => item.food.id === food.id);
    if (cartItem) {
      this.changequantity(food.id, cartItem.quantity + 1);
      return;
    }
    this.cart.items.push(new cartitem(food));
  }

  removefromcart(foodid: number): void {
    this.cart.items = 
    this.cart.items.filter(item => item.food.id != foodid);
  }

  changequantity(foodid: number, quantity: number) {
    let cartItem = this.cart.items.find(item => item.food.id === foodid);
    if (!cartItem) return;
    cartItem.quantity = quantity;
  }

  getcart(): cart {
    return this.cart;
  }
}




// import { Injectable } from '@angular/core';
// import { cart } from 'src/app/shared/models/cart';
// import { cartitem } from 'src/app/shared/models/cartitem';
// import { food } from 'src/app/shared/models/food';


// @Injectable({
//   providedIn: 'root'
// })
// export class CartService {
//   private cart :cart = new cart();

//   addtocart(food:food):void{
//     let cartitem = this.cart.items.find(item => item.food.id === food.id);
//     if(cartitem){
//       this.changequantity(food.id, cartitem.quantity + 1);
//       return;
//     }
//     this.cart.items.push(new cartitem(food));
    
//   }
  

//   removefromcart(foodid:number):void{
//     this.cart.items =
//     this.cart.items.filter(item => item.food.id !== foodid)

//   }

//   changequantity(foodid:number, quantity:number){
//     let cartitem = this.cart.items.find(item => item.food.id === foodid);
//     if(!cartitem) 
//     return;
//     cartitem.quantity = quantity;
//   }

//   getcart():cart{
//     return this.cart;
//   }

// }
