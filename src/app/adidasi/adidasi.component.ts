import { Component, OnInit } from '@angular/core';
import {AdServService} from '../ad-serv.service';

import{AdidasiClass} from '../AdidasiClass';
@Component({
  selector: 'app-adidasi',
  templateUrl: './adidasi.component.html',
  styleUrls: ['./adidasi.component.css']
})
export class AdidasiComponent implements OnInit {
 
  adidasi: AdidasiClass[] ;
  
  constructor(private adServ:AdServService ) { }
  getAdidasi(): void {
     this.adServ.getAdidasi().subscribe((adidasi:AdidasiClass[])=>this.adidasi=adidasi);
  }
  ngOnInit() {
    this.getAdidasi();
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.adServ.addAdidasi({ name } as AdidasiClass)
      .subscribe(papuci => {
        this.adidasi.push(papuci);
      });
  }
  delete(papuci:AdidasiClass):void{
    this.adidasi=this.adidasi.filter(a => a !== papuci);
    this.adServ.deleteAdidasi(papuci).subscribe();
  }
}
