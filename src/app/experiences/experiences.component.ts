import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from 'src/models/user.model';
import { AccountService } from 'src/services/account.service';
import { ProductService } from '../utils/product.service';
import { Order, Product as Experience } from 'src/app/utils/email.model';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss']
})
export class ExperiencesComponent implements OnInit {

  order?: Order;
  experiences?: Experience[];
  showProduct?: boolean;
  selectedProduct?: Experience;
  user?: User;
  saleId: any;
  allExperiences?: Experience[];
  constructor(
    // private uxService: UxService,
    private router: Router,
    private productService: ProductService,
    private accountService: AccountService,
    private activatedRoute: ActivatedRoute,

  ) {


    this.activatedRoute.params.subscribe(r => {
      this.saleId = r['id'];
      this.getProducts()
    });
  }

  ngOnInit() {
    this.accountService.user.subscribe(data => { if (data) this.user = data })
    if (this.experiences && this.experiences.length) {
      this.selectedProduct = this.experiences[0];
    }

  }

  getProducts() {
    this.productService.productObservable.subscribe(data => {
      if (data && data.length > 1) {
        this.experiences = data;
        this.allExperiences = data;
        if (this.saleId) {
          this.experiences = this.allExperiences.filter(x => x.OldPrice);
        }
      }
    });
  }

  addToCart(item: Experience) {

  }
  getTotal() {
    if (this.order && this.order.Products) {
      let tot = 0;

      this.order.Products.forEach(data => {
        tot += (Number(data.Price) * Number(data.Quantity));
      });
      this.order.Total = tot;
      // this.uxService.updateOrderState(this.order);
    }

  }
  changeSlide(product: Experience) {
    const temp = product.Icon;
    product.Icon = product.Icon2;
    product.Icon2 = temp;
  }
  view(product: Experience) {
    this.showProduct = true;
    this.selectedProduct = product;
  }

  add(product?: Experience) {
    if (!product) {
      this.router.navigate(['/manage-experience/add']);
      return;
    }

    if (product) {
      this.router.navigate(['/manage-experience', product.Id]);
    }

  }

  goto(product?: Experience) {
    this.router.navigate(['/experience', product?.Id]);
  }

}
