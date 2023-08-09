import { food } from "./food";

export class cartitem{
    foodid!: number;

    constructor(food:food){
        this.food = food;
        this.price;
    }
    food!: food;
    quantity:number = 1;

    get price():number{
        return this.food.price * this.quantity;
    }
}