import { Statement } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { food } from 'src/app/shared/models/food';
import { tag } from 'src/app/shared/models/tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  static getfoodbyid(arg0: any): food {
    throw new Error('Method not implemented.');
  }

  constructor() {}

  getfoodbyid(id:number):food{
    return this.getall().find(food => food.id == id)!;
  }

  getallfoodsbysearchterm(searchTerm:string):food[]{
    return this.getall().filter(food => food.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }
  getalltags():tag[]{
    return [
      {name: 'all', count: -14 },
      {name: 'fastfood', count: -4 },
      {name: 'lunch', count: -1 },
      {name: 'pizza', count: -2 },
      {name: 'hamburger', count: -1 },
      {name: 'fry', count: -1 },
      {name: 'soup', count: -5 },
      {name: 'chips', count: -1 },
      {name: 'fish', count: -2 },
      {name: 'meat', count: -3 },
      {name: 'friedchicken', count: -4 },
      {name: 'seafood', count: -2 },
      {name: 'vegetable', count: -3 }

      
    ]
  }

  getallfoodsbytag(tag:string):food[]{
    // Statement?dojob1:job2

    return tag == "all"? 
    this.getall():
     this.getall().filter(food => food.tags?.includes(tag));

  }

  getall():food[]{
    return[
      {
        id:1,
        name:'pizza pepperoni',
        cooktime:'10-20',
        price:100,
        favorite:false,
        origins:['italy'],
        stars:4.5,
        imageurl:'/assets/images/pizza.jpg',
        tags:['fastfood','pizza']

      },
      {
        id:2,
        name:'pizza',
        cooktime:'12-25',
        price:120,
        favorite:true,
        origins:['italy'],
        stars:4.5,
        imageurl:'/assets/images/pizza1.jpg',
        tags:['fastfood','pizza']

      },
      {
        id:3,
        name:'lunch',
        cooktime:'15-28',
        price:290,
        favorite:true,
        origins:['german'],
        stars:4.5,
        imageurl:'/assets/images/lunch.jpg',
        tags:['fastfood','lunch']

      },
      {
        id:4,
        name:'lunch',
        cooktime:'15-28',
        price:390,
        favorite:true,
        origins:['german'],
        stars:4.5,
        imageurl:'/assets/images/lunch1.jpg',
        tags:['fastfood','lunch']

      },
      {
        id:5,
        name:'fast food',
        cooktime:'7-12',
        price:610,
        favorite:false,
        origins:['england'],
        stars:4.5,
        imageurl:'/assets/images/slowfood1.jpg',
        tags:['fastfood']

      },
      {
        id:6,
        name:'hamburger',
        cooktime:'15-20',
        price:1013,
        favorite:false,
        origins:['USA'],
        stars:4.5,
        imageurl:'/assets/images/hamburger.jpg',
        tags:['hamburger']

      },
      {
        id:7,
        name:'fry',
        cooktime:'6-12',
        price:580,
        favorite:true,
        origins:['china'],
        stars:4.5,
        imageurl:'/assets/images/fry.jpg',
        tags:['fry']

      },
    
      {
        id:8,
        name:'soup',
        cooktime:'2-5',
        price:360,
        favorite:true,
        origins:['brazil'],
        stars:4.5,
        imageurl:'/assets/images/soup.jpg',
        tags:['soup']

      },
      {
        id:9,
        name:'chips',
        cooktime:'5-13',
        price:200,
        favorite:false,
        origins:['kenya'],
        stars:4.5,
        imageurl:'/assets/images/chips1.jpg',
        tags:['chips']

      },
      {
        id:10,
        name:'fish',
        cooktime:'2-5',
        price:220,
        favorite:true,
        origins:['tanzania'],
        stars:4.5,
        imageurl:'/assets/images/fish.jpg',
        tags:['fish']

      },
      {
        id:11,
        name:'fish',
        cooktime:'2-5',
        price:220,
        favorite:true,
        origins:['tanzania'],
        stars:4.5,
        imageurl:'/assets/images/fish1.jpg',
        tags:['fish']

      },
      {
        id:12,
        name:'meat',
        cooktime:'8-15',
        price:660,
        favorite:false,
        origins:['uk'],
        stars:4.5,
        imageurl:'/assets/images/meat.jpg',
        tags:['meat']

      },
      {
        id:13,
        name:'meat',
        cooktime:'8-15',
        price:660,
        favorite:false,
        origins:['uk'],
        stars:4.5,
        imageurl:'/assets/images/meat1.jpg',
        tags:['meat']

      },
      {
        id:14,
        name:'fried chicken',
        cooktime:'12-15',
        price:1513,
        favorite:true,
        origins:['korea'],
        stars:4.5,
        imageurl:'/assets/images/chicken.jpg',
        tags:['friedchicken']

      },
      {
        id:15,
        name:'sea food',
        cooktime:'7-22',
        price:780,
        favorite:true,
        origins:['netherland'],
        stars:4.5,
        imageurl:'/assets/images/sea.jpg',
        tags:['seafood']

      },
      {
        id:16,
        name:'sea food',
        cooktime:'7-22',
        price:780,
        favorite:true,
        origins:['netherland'],
        stars:4.5,
        imageurl:'/assets/images/sea1.jpg',
        tags:['seafood']

      },
      {
        id:17,
        name:'vegetables',
        cooktime:'3-6',
        price:60,
        favorite:false,
        origins:['japan'],
        stars:4.5,
        imageurl:'/assets/images/vegetable.jpg',
        tags:['vegetable']

      },
    ]
  }
}
