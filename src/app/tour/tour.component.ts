import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../utils/email.model';

@Component({
  selector: 'app-tour',
  templateUrl: './tour.component.html',
  styleUrls: ['./tour.component.scss']
})
export class TourComponent implements OnInit {
@Input() tour? : Product;
  constructor() { }

  ngOnInit(): void {
  }

}
