import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[decorateData]',
})
export class DecorateDirective {
  constructor(private el: ElementRef) {
    // console.log(el, 'elll');
    // this.el.nativeElement.style.backgroundColor = 'red';
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('yellow');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('red');
  }

  highlight(color) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
