import { Component, OnInit,Input,Output } from '@angular/core';
import{AdidasiClass} from '../AdidasiClass';
import { PersistenceService, StorageType } from 'angular-persistence';

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
  @Output() forCart:AdidasiClass[]=[];

  constructor( private route: ActivatedRoute,
    private adService: AdServService,
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
    // this.adService.addToCart((adidasi)=>{this.forCart.push(this.adidasi)});
    this.forCart.push(this.adidasi);
    // this.persistenceService.set('itemi', this.forCart,{type:StorageType.LOCAL});
    // console.log(this.persistenceService.get('itemi',StorageType.LOCAL));
    this.adService.addToCart(this.forCart);
  }

  save(): void {
    this.adService.updateAdidasi(this.adidasi);
  }
}
