import { Component } from '@angular/core';
import { DataService } from './data.service';
import { Item } from './item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'shopping-cart';
  cartCount: any;
  items: Item[];

  constructor(public dataService: DataService)
  {
    this.cartCount = dataService.cartCount;
  }

}
