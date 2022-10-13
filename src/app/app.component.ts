import { Component,AfterViewInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { ItemService } from 'src/services/item.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements AfterViewInit{
  title = 'zizakhele';
  constructor( private itemService: ItemService,     private router: Router
){
    this.itemService.getProductItems();

  }
  ngAfterViewInit(): void {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      let container = document.querySelector('.main-container');
      if (container) {
        window.scroll(0,0);
        console.log(container);
        
      }
    });
  }
}
