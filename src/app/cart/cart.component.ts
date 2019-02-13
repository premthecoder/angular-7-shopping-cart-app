import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Item } from '../item';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  items: Item[];
  cartItems: Item[];
  totalCostN: number;
  totalCost: any;

  constructor(private dataService: DataService, private router: Router) { 
    this.dataService.cartItemList.subscribe(items => this.cartItems = items);
    this.getTotalCost();
  }

  ngOnInit() {
    
  }

  getTotalCost()
  {
    let count = 0;
    for(let i=0; i<this.cartItems.length; i++)
    {
      count+=this.cartItems[i].qty*this.cartItems[i].price;
    }
    this.totalCostN = count;
    this.totalCost = count+".00";
  }

  redirectToCheckout()
  {
    if(this.totalCostN===0)
    {
      // alert("Please buy some items first.");
      return false;
    }
    this.dataService.updateTotalCost(this.totalCostN);
    this.router.navigateByUrl('/checkout');
  }

}
