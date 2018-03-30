import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'amountConverter',
  pure: false
})
export class AmountConverterPipe implements PipeTransform {

  transform(value: number | string): string {
   try {
    // tslint:disable-next-line:prefer-const
    let number = Intl.NumberFormat('en-us', {
      minimumFractionDigits: 0
    }).format(Number(value));
    return number.replace(/,/g, '.');
   } catch (error) {
     return '0';
   }
  }
}
