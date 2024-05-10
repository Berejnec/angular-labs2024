import {ComponentRef, Directive, inject, Input, TemplateRef, ViewContainerRef} from '@angular/core';
import {OutOfStockMessageComponent} from "../out-of-stock-message/out-of-stock-message.component";

@Directive({
  selector: '[appOutOfStock]',
  standalone: true
})
export class OutOfStockDirective {

  viewContainer = inject(ViewContainerRef);
  templateRef = inject(TemplateRef);

  private outOfStockComponent!: ComponentRef<OutOfStockMessageComponent>;
  @Input() set appOutOfStock(value: boolean) {
    this.viewContainer.createEmbeddedView(this.templateRef);

    if(value) {
      this.outOfStockComponent = this.viewContainer.createComponent(OutOfStockMessageComponent)
    }

  }


  constructor() { }

}
