import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from 'src/models/item.model';
import { User } from 'src/models/user.model';
import { AccountService } from 'src/services/account.service';
import { ItemService } from 'src/services/item.service';
import { UploadService } from 'src/services/upload.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {



  item?: Item;
  message: string = '';
  itemId: string = '';
  user?: User;
  heading: string = '';

 
  constructor(
    private itemService: ItemService,
    private activatedRoute: ActivatedRoute,
    private accountService: AccountService,
    private uploadService: UploadService,
    private router: Router,
  ) {

    this.activatedRoute.params.subscribe(r => {
      this.itemId = r['id'];
      this.user = accountService.currentUserValue;
      this.getItem();

    });

  }

  ngOnInit() {


  }
  back() {
    this.router.navigate(['/products'])
  }
  getItem() {
    this.itemService.getItem(this.itemId).subscribe(data => {
      if (data && data.ItemId) {
        this.item = data;
        this.heading = data.Name
      }

    });
  }
  enquire(){
    this.router.navigate(['/enquire', this.item?.ItemId])
  }
}
