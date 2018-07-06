import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';

import { CardService } from './card.service';
import { InfiniteScrollerDirective } from './infinite-scroller.directive';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';


@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    InfiniteScrollerDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    InfiniteScrollModule
  ],
  providers: [CardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
