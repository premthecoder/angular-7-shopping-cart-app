import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Item } from './item';
import { isNgTemplate } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private items = [
    {name: "Fresh Mangoes", imageUrl: "https://i.ndtvimg.com/i/2017-09/mango-620x350_620x350_71505731672.jpg", qty: 0, price: 80},
    {name: "Broccoli", imageUrl: "https://img.purch.com/h/1000/aHR0cDovL3d3dy5saXZlc2NpZW5jZS5jb20vaW1hZ2VzL2kvMDAwLzA1MS8xNTYvb3JpZ2luYWwvYnJvY2NvbGktMTAwOTE1LTAyLmpwZw==", qty: 0, price: 110},
    {name: "Frozen Peas", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYAHMr8BO9cpJ7-12_AQmAtzkelMZxeeFGB1p4rkqV8-8vvpbM", qty: 0, price: 120},
    {name: "Apple", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReezRIZbVqdktehxGFX3I_JMngVbBtlqVeGZzE4gi3ojJVRpu7", qty: 0, price: 130},
    {name: "Oranges", imageUrl: "https://foodrevolution.org/wp-content/uploads/2017/12/blog-featured-eat_the_rainbow_oranges-20171207.png", qty: 0, price: 60},
    {name: "Avocado", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAc1r3GTHCnyQQPoYxkj32gukK7vUuiwVz7l1pdgJvtTIDb09b", qty: 0, price: 77},
    {name: "Strawberries", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp-9aG2gYZFosr3uk_a5CM7-dMmO3cvGobV1XKkz7viKql1Iju", qty: 0, price: 89}
  ];

  private cartItems = [];

  private messageSource = new BehaviorSubject<Item[]>(this.items);
  itemList = this.messageSource.asObservable();

  private cartCountSource = new BehaviorSubject<number>(0);
  cartCount: number;

  private cartItemsSource = new BehaviorSubject<Item[]>(this.cartItems);
  cartItemList = this.cartItemsSource.asObservable();

  constructor() { }

  private totalCostSource = new BehaviorSubject<number>(0);
  totalCost = this.totalCostSource.asObservable(); 

  updateTotalCost(cost)
  {
    this.totalCostSource.next(cost);
  }

  updateItemList(itemList)
  {
    this.messageSource.next(itemList);
    this.updateCartCount(itemList);
    this.udpateCartItems(itemList);
  }

  updateCartCount(items)
  {
    let itemCount = 0;
    for(let i=0;i<items.length;i++){
        if(this.items[i].qty!=0)
        {
          itemCount++;
        }
    }
    this.cartCount = itemCount;
    this.cartCountSource.next(this.cartCount);
  }

  udpateCartItems(items)
  {
    this.cartItems = [];
      for(let i=0; i<items.length; i++)
      {
        if(items[i].qty>0)
        {
            this.cartItems.push(items[i]);
        }
      }
      this.cartItemsSource.next(this.cartItems);
  }

}
