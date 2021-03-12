import { Component, OnInit } from '@angular/core';
import {DataService} from '../service/data.service';

@Component({
  selector: 'app-parent2',
  templateUrl: './parent2.component.html',
  styleUrls: ['./parent2.component.scss']
})
export class Parent2Component implements OnInit {
product$
  constructor(private productServ: DataService) { }

  ngOnInit(): void {
    this.product$ = this.productServ.getProducts()
  }

}
