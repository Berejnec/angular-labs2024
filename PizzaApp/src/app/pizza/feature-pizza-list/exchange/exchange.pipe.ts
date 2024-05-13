import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'exchange',
  standalone: true
})
export class ExchangePipe implements PipeTransform {

  static RATE =  {
    EUR: 5,
    USD: 4,
  };

  static USD = 4;
  transform(value: number, currency: (keyof typeof ExchangePipe.RATE),...args: unknown[]): number {
    return value / ExchangePipe.RATE[currency]
  }

}

