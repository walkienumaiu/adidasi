import { Injectable } from '@angular/core';
import { AdidasiClass} from './AdidasiClass';

import { MessageService } from './message.service';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class AdServService {
  private adidasiUrl = 'api/adidasi';


  getAdidasi(): Observable< AdidasiClass[]> {
    this.messageService.add("AdServService: adidasi importati din baza de date");
   
    return this.http.get<AdidasiClass[]>(this.adidasiUrl).pipe(
     tap(adidasi=>this.log('adidasi incarcati din db')),
      catchError(this.handleError('getAdidasi',[])));
  }
  
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    }
  }
  getAdidas(id:number):Observable<AdidasiClass>{
    const url = `${this.adidasiUrl}/${id}`;

    this.messageService.add(`Id-ul adidasilor adusi din baza de date   id=${id}`);
    return this.http.get<AdidasiClass>(url).pipe(
      tap(_=>this.log(`incarcat adidasii cu id-ul=${id}`),
      catchError(this.handleError<AdidasiClass>('getAdidas id=${id}'))
    )
    );
  }
  updateAdidasi(adidasi:AdidasiClass){
    this.http.put(this.adidasiUrl,adidasi,httpOptions).pipe(
      tap(_ => this.log(`updated adidasi id=${adidasi.id}`)),
      catchError(this.handleError<any>('updateHero'))
   )
    
  }
  addAdidasi(papuci:AdidasiClass):Observable<AdidasiClass>{
    return this.http.post<AdidasiClass>(this.adidasiUrl,papuci,httpOptions).pipe(
      tap((papuci: AdidasiClass) => this.log(`added adidasi w/ id=${papuci.id}`)),
      catchError(this.handleError<AdidasiClass>('addAdidasi'))
    )

  }
  deleteAdidasi(papuci:AdidasiClass|number):Observable<AdidasiClass>{
    const id= typeof papuci==='number'? papuci:papuci.id;
    const url=`${this.adidasiUrl}/${id}`;

    return this.http.delete<AdidasiClass>(url,httpOptions).pipe(
      tap(_=>this.log(`deleted adidasi with id=${id}`)),
      catchError(this.handleError<AdidasiClass>('deletedHero'))
    )

  }

  searchAdidasi(term: string): Observable<AdidasiClass[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<AdidasiClass[]>(`api/heroes/?name=${term}`).pipe(
      tap(_ => this.log(`found heroes matching "${term}"`)),
      catchError(this.handleError<AdidasiClass[]>('searchHeroes', []))
    );
  }


  constructor(private messageService: MessageService,private http:HttpClient) { }
 
  private log(message: string) {
    this.messageService.add('AdidasiService: asta intra ' + message);
  }
}
