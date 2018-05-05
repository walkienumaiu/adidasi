import {Component, OnInit} from '@angular/core';
import {CartService} from '../cart.service';
import {AdidasiClass} from '../AdidasiClass';
import {Observable} from 'rxjs';
import {of} from 'rxjs/observable/of';

@Component({
  selector: 'spa-shopping-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public shoppingCartItems$: Observable<AdidasiClass[]> = of([]);
  public shoppingCartItems: AdidasiClass[] = [];

  constructor(private cartService: CartService) {
    
    this.shoppingCartItems$ = this.cartService.getItems();

    this.shoppingCartItems$.subscribe(_ => this.shoppingCartItems = _);
  }

  ngOnInit() {
  }

  
  public getTotal(): Observable<number> {
    return this.cartService.getTotalAmount();
  }

  public removeItem(item:AdidasiClass) {
    this.cartService.removeFromCart(item)
  }

}
