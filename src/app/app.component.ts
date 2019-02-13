import { Component } from '@angular/core';
import { DataService } from './data.service';
import { Item } from './item';

declare var $:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'shopping-cart';
  cartCount: any;
  items: Item[];
  isHidden: boolean;

  constructor(public dataService: DataService)
  {
    this.cartCount = dataService.cartCount;
  }

  ngOnInit(){
    $(document).ready(function () {
      $(document).click(function (event) {
          var clickover = $(event.target);
          var _opened = $(".navbar-collapse").hasClass("show");
          if (_opened === true && !clickover.hasClass("navbar-toggler")) {
              $("button.navbar-toggler").click();
          }
      });
  });
  }

   onActivate(event) {
    window.scroll(0,0);
  }

}
