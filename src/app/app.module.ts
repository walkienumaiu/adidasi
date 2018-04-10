import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {AdServService} from './ad-serv.service';
import{HttpClientModule}from'@angular/common/http';
import { AppComponent } from './app.component';
import { AdidasiComponent } from './adidasi/adidasi.component';
import { AdidasiClass } from './AdidasiClass';
import { DetaliiAdidasiComponent } from './detalii-adidasi/detalii-adidasi.component';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message.service';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import { SearchComponent } from './search/search.component';



@NgModule({
  declarations: [
    AppComponent,
    AdidasiComponent,
    DetaliiAdidasiComponent,
    MessagesComponent,
    DashboardComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,

// The HttpClientInMemoryWebApiModule module intercepts HTTP requests
// and returns simulated server responses.
// Remove it when a real server is ready to receive requests.
HttpClientInMemoryWebApiModule.forRoot(
  InMemoryDataService, { dataEncapsulation: false }
)
  ],
  providers: [AdServService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
