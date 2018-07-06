
import { Directive, Input, Output, EventEmitter, ElementRef, HostListener, OnInit } from '@angular/core';


@Directive({
  selector: '[appInfiniteScroller]'

})

export class InfiniteScrollerDirective {
  pageNumber = 1;
  @Input() atEnd: boolean;
  @Output() isAtEnd: EventEmitter<any> = new EventEmitter();

  @HostListener('window:scroll', ['$event']) onWindowScroll($event) {
    if ((window.innerHeight + 500) + window.scrollY >= document.body.offsetHeight) {


         this.pageNumber++;
        this.isAtEnd.emit(this.pageNumber);
    }
  }

  constructor(private el: ElementRef) { }





  // constructor(el: ElementRef) {
  //   el.nativeElement.style.backgroundColor = 'yellow';
  // }


  // private highlight( color: string) {
  //   this.el.nativeElement.style.backgroundColor = color;
  // }

  // ngOnInit() {
  //   window.addEventListener('scroll', () => {
  //     console.log('sdfd');
  //   if ((window.innerHeight + 500) + window.scrollY >= document.body.offsetHeight) {
  //         console.log(document.body.offsetHeight);

  //   }
  // });

// }
}

