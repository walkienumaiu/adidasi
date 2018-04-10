import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject }    from 'rxjs/Subject';
import { of }         from 'rxjs/observable/of';
import { AdidasiClass } from '../AdidasiClass';
import{AdServService}from'../ad-serv.service';
import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  adiadsi$ : Observable<AdidasiClass[]>;
  private searchTerms= new Subject<string>();


  constructor(private adServ:AdServService) { }

  search(term: string):void{
    this.searchTerms.next(term);
  }

  ngOnInit() {
    this.adiadsi$=this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term:string)=>this.adServ.searchAdidasi(term))
    )
  }

}
