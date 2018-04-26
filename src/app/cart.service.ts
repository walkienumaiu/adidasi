import {Injectable} from '@angular/core';
import {AdidasiClass} from './AdidasiClass';
import {BehaviorSubject, Observable, Subject, Subscriber} from 'rxjs';
import {of} from 'rxjs/observable/of';
@Injectable()
export class CartService {
  private itemsInCartSubject: BehaviorSubject<AdidasiClass[]> = new BehaviorSubject([]);
  private itemsInCart: AdidasiClass[] = [];

  constructor() {
    this.itemsInCartSubject.subscribe(_ => this.itemsInCart = _);
  }

  public addToCart(item: AdidasiClass) {
    this.itemsInCartSubject.next([...this.itemsInCart, item]);
  }

  public removeFromCart(item: AdidasiClass) {
    const currentItems = [...this.itemsInCart];
    const itemsWithoutRemoved = currentItems.filter(_ => _.id !== item.id);
    this.itemsInCartSubject.next(itemsWithoutRemoved);
  }

  public getItems(): Observable<AdidasiClass[]> {
    return this.itemsInCartSubject.asObservable();
  }

  public getTotalAmount(): Observable<number> {
    return this.itemsInCartSubject.map((items: AdidasiClass[]) => {
      return items.reduce((prev, curr: AdidasiClass) => {
        return prev + curr.price;
      }, 0);
    });
  }
}
