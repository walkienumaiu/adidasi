import { Component, OnInit } from '@angular/core';
import {AdServService} from '../ad-serv.service';

import { AdidasiClass } from '../AdidasiClass';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  adidasi:AdidasiClass[]=[];
  constructor(private adService:AdServService) { }

  ngOnInit() {
    this.getAdidasi();
  }
  getAdidasi(){
     this.adService.getAdidasi().subscribe((adidasi)=> this.adidasi=adidasi.slice(1,5));
  }

}
