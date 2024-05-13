import {Directive, ElementRef, inject, Input} from '@angular/core';

@Directive({
  selector: '[appDiscount]',
  standalone: true
})
export class DiscountDirective {
  @Input() set appDiscount(value: boolean) {
    if(value) {
      this.elementRef.nativeElement.style.backgroundColor = 'green';
    }
  }


  elementRef: ElementRef = inject(ElementRef);
  constructor() { }

}
