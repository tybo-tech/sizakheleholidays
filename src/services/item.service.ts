import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { COMPANYID, ITEM_TYPES } from "src/app/utils/constants";
import { Product } from "src/app/utils/email.model";
import { ProductService } from "src/app/utils/product.service";
import { environment } from "src/environments/environment";
import { Item } from "src/models/item.model";


@Injectable({
  providedIn: 'root'
})
export class ItemService {


  private ItemListBehaviorSubject: BehaviorSubject<Item[]>;
  public ItemListObservable: Observable<Item[]>;

  private ItemBehaviorSubject: BehaviorSubject<Item | undefined>;
  public ItemObservable: Observable<Item | undefined>;
  url: string;

  constructor(
    private http: HttpClient,
    private productservice: ProductService,
  ) {
    this.ItemListBehaviorSubject = new BehaviorSubject<Item[]>([]);
    this.ItemBehaviorSubject = new BehaviorSubject<Item | undefined>(undefined);
    this.ItemListObservable = this.ItemListBehaviorSubject.asObservable();
    this.ItemObservable = this.ItemBehaviorSubject.asObservable();
    this.url = environment.API_URL;
  }

  public get currentItemValue(): Item | undefined {
    return this.ItemBehaviorSubject.value;
  }



  add(Item: Item) {
    return this.http.post<Item>(`${this.url}/api/item/add-item.php`, Item);
  }
  addRange(items: Item[]) {
    return this.http.post<Item>(`${this.url}/api/item/add-item-range.php`, items);
  }
  getItems(companyId: string, itemType: string, showChildren = false) {
    return this.http.get<Item[]>(`${this.url}/api/item/get-items.php?CompanyId=${companyId}&ItemType=${itemType}&ShowChildren=${showChildren}`)
  }

  getItem(ItemId: string) {
    return this.http.get<Item>(`${this.url}/api/item/get-by-id.php?ItemId=${ItemId}`);
  }

  getItemsBySubjectID(subjectId: string, gradeId: string): Observable<Item[]> {
    return this.http.get<Item[]>(`${this.url}/api/Item/get-Items.php?SubjectId=${subjectId}&GradeId=${gradeId}`)
  }
  update(Item: Item) {
    return this.http.post<Item>(`${this.url}/api/item/update-item.php`, Item);
  }
  getProductItems() {
    this.getItems(COMPANYID, ITEM_TYPES.PRODUCT.Name).subscribe(data => {
      const products: Product[] = [];
      data.forEach(item => {
        if (item && item.ItemStatus === 'Published') {

          const product: Product = {
            Id: item.ItemId,
            Name: item.Name,
            Description: item.ItemSubCategory,
            Icon: item.ImageUrl,
            Icon2: item.ImageUrl2,
            Icon3: item.ImageUrl3,
            Price: item.Price,
            Quantity: 1,
            AvailableQuantity: item.Quantity,
            Category: item.ItemCategory
          }
          products.push(product);
        }
      });

      this.productservice.updatProductsState(products);

    });

  }

  calculateSalePrice(sale: Item, product: Item): number {
    if (product.RelatedId && product.Price && sale) {
      return Number(product.Price) - (Number(product.Price)) * (Number(sale.Price) / 100)
    }
    return 0;
  }
  initItem(type: string) : Item {
    return {
      ItemId: '',
      RelatedId: '',
      RelatedParentId: '',
      Name: '',
      ParentId: '',
      ItemType: type,
      CompanyId: COMPANYID,
      Description: '',
      OrderingNo: 1,
      Price: 0,
      Quantity: 0,
      ItemStatus: 'Active',
      ItemCode: '',
      ImageUrl: '',
      ImageUrl2: '',
      ImageUrl3: '',
      ItemPin: '',
      ItemCategory: '',
      ItemSubCategory: '',
      StartDate: '',
      StartTime: '',
      FinishDate: '',
      FinishTime: '',
      CreateUserId: '',
      ModifyUserId: '',
      StatusId: 1
    }
  }
}
