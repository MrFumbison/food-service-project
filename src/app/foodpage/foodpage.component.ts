import { Component,OnInit } from '@angular/core';
import { food } from '../shared/models/food';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { FoodService } from '../services/food/food.service';
import { CartService } from '../services/cart/cart.service';

@Component({
  selector: 'app-foodpage',
  templateUrl: './foodpage.component.html',
  styleUrls: ['./foodpage.component.css']
})
export class FoodpageComponent implements OnInit {
  food!: food;
  constructor(private activatedroute:ActivatedRoute,
     private foodservice:FoodService, 
     private cartservice:CartService,
     private router:Router){
    activatedroute.params.subscribe((params) =>{
      if (params['id'])
      this.food = foodservice.getfoodbyid(params['id'])
    })
  }
  ngOnInit(): void {
   
  }

  addtocart(){
    this.cartservice.addtocart(this.food);
    this.router.navigateByUrl('/cart-page');
  }
}
