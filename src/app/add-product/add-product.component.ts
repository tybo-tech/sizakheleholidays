import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ITEM_TYPES, COMPANYID, IMAGE_CROP_SIZE } from 'src/app/utils/constants';
import { environment } from 'src/environments/environment';
import { Item } from 'src/models/item.model';
import { User } from 'src/models/user.model';
import { AccountService } from 'src/services/account.service';
import { ItemService } from 'src/services/item.service';
import { UploadService } from 'src/services/upload.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {


  item?: Item;
  message: string = '';
  itemId: string = '';
  user?: User;
  heading: string = '';
  editorStyle = {
    marginBottom: '30px',
    height: '600px',
    background: '#fff',
  }
  editorConfig = {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }],
      [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
      [{ 'color': [] }, { 'background': [] }],
      [{ 'font': [] }],
      ['blockquote', 'code-block'],

      ['clean'],
      // ['formula']

    ]
  };
 
  
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
      if (this.itemId === 'add') {
        this.heading = `Adding a blog`

        this.item = {
          ItemId: '',
          RelatedId: '',
          RelatedParentId: '',
          Name: '',
          ParentId: '',
          ItemType: ITEM_TYPES.PRODUCT.Name,
          CompanyId: COMPANYID,
          Description: '',
          OrderingNo: 1,
          Price: undefined,
          Quantity: 0,
          ItemStatus: 'Published',
          ItemCode: '',
          ImageUrl: '',
          ImageUrl2: '',
          ImageUrl3: '',
          ItemPin: '',
          ItemCategory: '',
          ItemSubCategory: '',
          CreateUserId: '',
          ModifyUserId: '',
          StatusId: 1
        }

      } else {
        this.getItem();
      }

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

  save() {
    if (this.item && this.item.CreateDate) {
      this.itemService.update(this.item).subscribe(data => {
        if (data && data.ItemId) {
          this.message = 'Item updated successfully.';
          this.itemService.getProductItems();

        }
      })
    } else if(this.item) {
      this.itemService.add(this.item).subscribe(data => {
        if (data && data.ItemId) {
          this.message = 'Item created successfully.';
          this.itemService.getProductItems();

        }
      })
    }

  }

  onImageChangedEvent(url: string) {
    if (this.item) {
      this.item.ImageUrl = url;
    }
  }

  onImageChangedEvent2(url: string) {
    if (this.item) {
      this.item.ImageUrl2 = url;
    }
  }


  onImageChangedEvent3(url: string) {
    if (this.item) {
      this.item.ImageUrl3 = url;
    }
  }

}
