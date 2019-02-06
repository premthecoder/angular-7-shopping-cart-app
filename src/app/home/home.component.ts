import { Component, OnInit, Output } from '@angular/core';
import { Item } from '../item';
import { DataService } from '../data.service';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  items: Item[];

  constructor(private dataService: DataService) { 
    this.dataService.itemList.subscribe(items => this.items = items);
  }

  ngOnInit() {
    
  }

  increaseItem(item)
  {
    let index = this.items.indexOf(item);
    item.qty++;
    this.items[index] = item;
    this.dataService.updateItemList(this.items);
    this.dataService.updateCartCount(this.items);
  }

  decreaseItem(item)
  {
    let index = this.items.indexOf(item);
    if(item.qty!=0)
    {
      item.qty--;
    }
    this.items[index] = item;
    this.dataService.updateItemList(this.items);
    this.dataService.updateCartCount(this.items);
  }
}
