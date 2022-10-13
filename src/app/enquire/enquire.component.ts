import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from 'src/models/item.model';
import { ItemService } from 'src/services/item.service';
import { COMPANY_EMIAL } from '../utils/constants';
import { Email, Product } from '../utils/email.model';
import { EmailService } from '../utils/email.service';
import { ProductService } from '../utils/product.service';

@Component({
  selector: 'app-enquire',
  templateUrl: './enquire.component.html',
  styleUrls: ['./enquire.component.scss']
})
export class EnquireComponent implements OnInit {


  // <app-add-customer [user]="user">
  name = '';
  email = '';
  actionType = 'Volunteer';
  massage = '';
  phone = '';
  address = '';

  showLoader = false;
  sent: boolean = false;
  itemId: any;
  item?: Item;
  experiences?: Product[];
  constructor(
    private emailService: EmailService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private itemService: ItemService,
    private productService: ProductService,

  ) {
    this.activatedRoute.params.subscribe(r => {
      this.itemId = r['id'];
      this.getItem();

    });

  }

  ngOnInit() {
  }

  getProducts() {
    this.productService.productObservable.subscribe(data => {
      if (data && data.length > 1) {
        this.experiences = data;
      }
    });
  }
  getItem() {
    this.itemService.getItem(this.itemId).subscribe(data => {
      if (data && data.ItemId) {
        this.item = data;
        this.getProducts()
        this.actionType = this.item.Name;
      }

    });
  }

  back() {
    this.router.navigate([``]);
  }

  sendEmail() {
    const emailToSend: Email = {
      From: this.email,
      Email: COMPANY_EMIAL,
      Subject: this.name + ' Enquiry',
      Message: `${this.massage}  | ${this.email} | ${this.phone}`,
      UserFullName: this.name
    };
    this.showLoader = true;
    this.emailService.sendGeneralTextEmail(emailToSend)
      .subscribe(response => {
        if (response > 0) {
          this.sent = true;
          //Thank you for contacting us we will reply as soon as possible
        }
      });
  }

}
