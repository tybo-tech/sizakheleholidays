import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  items = [
    { Name: 'Home', Url: '/' },
    { Name: 'About us', Url: '/about-us' },
    { Name: 'Our Experiences', Url: '/our-experiences' },
    { Name: 'Our People', Url: '/our-people' },
    { Name: 'Our Values', Url: '/our-values' },
    { Name: 'Our Community', Url: '/our-community' },
    { Name: 'Contact us', Url: '/contact-us' },
    // { Name: 'Book now', Url: '/book-now' }
  ];
  showMenu = false;
  constructor() { }

  ngOnInit(): void {
  }

}
