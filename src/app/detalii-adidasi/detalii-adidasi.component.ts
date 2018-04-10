import { Component, OnInit,Input } from '@angular/core';
import{AdidasiClass} from '../AdidasiClass';

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

  constructor( private route: ActivatedRoute,
    private adService: AdServService,
    private location: Location) { }

  ngOnInit() {
    this.getAdidasi();
  }
  getAdidasi():void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.adService.getAdidas(id).subscribe(adidasi=>this.adidasi=adidasi);
  }
  goBack():void{
    this.location.back();

  }

  save(): void {
    this.adService.updateAdidasi(this.adidasi);
  }
}
