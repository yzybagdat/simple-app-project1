import { Component, OnInit } from '@angular/core';
import {DataService} from '../service/data.service';

@Component({
  selector: 'app-parent1',
  templateUrl: './parent1.component.html',
  styleUrls: ['./parent1.component.scss']
})
export class Parent1Component implements OnInit {
product$
  constructor(public productServ: DataService) { }

  ngOnInit(): void {
    this.product$ = this.productServ.getProducts()
  }

}
