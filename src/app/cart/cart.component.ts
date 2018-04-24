import { Component, OnInit } from '@angular/core';
import { AdServService } from '../ad-serv.service';
import { AdidasiClass } from '../AdidasiClass';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  private produse:AdidasiClass[];
  private a:any;
  constructor(public adService:AdServService) { }
//   getAdidasi(): void {
//     this.adServ.getAdidasi().subscribe((adidasi:AdidasiClass[])=>this.adidasi=adidasi);
//  }
  getBasket(){
    this.adService.getBasket().subscribe((adidasi:AdidasiClass[])=>this.produse=adidasi);
  }
  getCart(){
    this.adService.sendCart();
  }
  ngOnInit() {
   this.a= this.getCart();
   console.log("Cart: "+this.a);
  }

}
