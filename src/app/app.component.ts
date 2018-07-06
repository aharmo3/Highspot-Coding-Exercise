import { Component } from '@angular/core';
import { CardService } from './card.service';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  pageNum = 1 ;
  cardArray = [];
  count: number;
  cards: Card[];
  message: string;
  isLimit = false;
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
        console.log(this.count);
      }, error => {console.error(error); });
  }


  onScroll() {
    this.pageNum++;
    if (this.pageNum <= 10) {
      this.getCards(this.pageNum);
    } else {
      this.message = 'All Done for now!';
    }
  }

  ngOnInit() {
    this.getCards();
  }
}
