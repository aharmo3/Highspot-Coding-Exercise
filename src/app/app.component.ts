import { Component, OnInit } from '@angular/core';
import { CardService } from './app.service';
import { Card } from './interfaces/card.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  pageNum = 1 ;
  cardArray = [];
  count: number;
  cards: Card[];
  message: string;

  constructor(private cardService: CardService) { }


  getCards(pageNum): void {
    this.cardService.getCards(pageNum)
      .subscribe(
        cards => {
          cards.cards.forEach((element, index) => {
            this.cardArray.push(element);
          });
        this.cards = this.cardArray;
        this.count = this.cards.length;
      }, error => {console.error(error); });
  }


  onScroll() {
    this.pageNum++;
    if (this.pageNum <= 10) {
      this.getCards(this.pageNum);
    } else {
      this.message = `That's it! No more cards.`;
    }
  }

  ngOnInit() {
    this.getCards(this.pageNum);
  }
}
