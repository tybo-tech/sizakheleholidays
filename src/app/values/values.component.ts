import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-values',
  templateUrl: './values.component.html',
  styleUrls: ['./values.component.scss']
})
export class ValuesComponent implements OnInit {
  items = [
    {
      Name: 'Attention To Detail',
      Dp: 'assets/images/man.png',
      Data: 'As a company we are focused on providing a seamless experience for all our guests and this can only be achieved through, meticulous attention to detail from reservation to tour completion it is essential that we leave nothing to chance and our organization is meticulous.'
    },
    {
      Name: 'Relationships',
      Dp: 'assets/images/man.png',
      Data: 'We pride ourselves on fostering long lasting relationships that promote the individual and how we interact with them. This is a value that is used throughout our company to not just regulate interactions between employees and guests but inter- company relationships and those we share with our suppliers.'
    },
    {
      Name: 'Our People',
      Dp: 'assets/images/man.png',
      Data: 'People are at the cornerstone of what Sizakhele represents, the company was built by the people for the people and we ensure that we invest in the growth of not just our staff but the communities which provide once in a lifetime travel experiences to our international guests.'
    }, {
      Name: 'Friendliness',
      Dp: 'assets/images/man.png',
      Data: 'Though understated this value is one of the reasons for the South African success story, as a country we pride ourselves on our friendliness in all situations and it is this trait of South African hospitality that we reflect in all our interactions with our customers, people and suppliers.'
    }, {
      Name: 'Fun',
      Dp: 'assets/images/man.png',
      Data: 'Travel is a labor of love and due to this it is essential that as a company we always have fun whilst working hard and this is reflected onto our guests.'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
