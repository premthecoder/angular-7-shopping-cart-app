import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  totalCost: any;
  totalCostN: number;

  timeLeft: number = 3;
  interval;

  payment: boolean = false;

startTimer() {
    this.interval = setInterval(() => {
      if(this.timeLeft > 0) {
        this.timeLeft--;
      }
      else
      {
        this.payment = true;
      }
    },1000)
  }

  constructor(private dataService: DataService) { 
      this.dataService.totalCost.subscribe(totalCost => {
        this.totalCostN = totalCost;
        this.totalCost = this.totalCostN+".00"
      });
  }

  ngOnInit() {
    this.dataService.totalCost.subscribe(totalCost => {
      this.totalCostN = totalCost;
      this.totalCost = this.totalCostN+".00"
    });
  }

}
