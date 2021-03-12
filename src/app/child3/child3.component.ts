import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-child3',
  templateUrl: './child3.component.html',
  styleUrls: ['./child3.component.scss']
})
export class Child3Component implements OnInit {
@Input() product
  constructor() { }

  ngOnInit(): void {
  }

}
