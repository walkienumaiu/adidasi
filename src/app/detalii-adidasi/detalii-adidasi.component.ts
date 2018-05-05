import { Component, OnInit,Input,Output } from '@angular/core';
import{AdidasiClass} from '../AdidasiClass';
import { PersistenceService, StorageType } from 'angular-persistence';
import{CartService} from '../cart.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {AdServService} from '../ad-serv.service';

@Component({
  selector: 'app-detalii',
  templateUrl: './detalii-adidasi.component.html',
  styleUrls: ['./detalii-adidasi.component.css']
})
export class DetaliiAdidasiComponent implements OnInit {
  @Input() adidasi:AdidasiClass;
  @Output() forCart:AdidasiClass;

  constructor( 
    private route: ActivatedRoute,
    private adService: AdServService,
    private cartService:CartService,
    private location: Location,
    private persistenceService:PersistenceService) { }

  ngOnInit() {
    this.getAdidasi();
    // console.log(this.persistenceService.get('itemi'));
  }
  getAdidasi():void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.adService.getAdidas(id).subscribe(adidasi=>this.adidasi=adidasi);
  }
  goBack():void{
    this.location.back();

  }
 
  buy():void{
   
  this.cartService.addToCart(this.adidasi);
  }

  save(): void {
    this.adService.updateAdidasi(this.adidasi);
  }
}
