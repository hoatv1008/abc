import { Pipe, PipeTransform } from '@angular/core';
import { UtilsService } from '../Common/utils.service';
import { debug } from 'util';
@Pipe({
    name: 'amountConverter',
    pure: false
})
export class AmountConverterPipe implements PipeTransform {
    private utils: UtilsService;
    constructor(private utilsService: UtilsService) {
        this.utils = utilsService;
    }
    transform(value) {
        let number: any;
        number = this.utils.removeChar(String(value));
        number = this.utils.formatCurrencyWithDot(number);
        return number;
        //value = String(value).replace(/\./g,'');
        //value = this.utils.removeChar(String(value));
        //   value = String(value).replace(/[^0-9.%]/g, '').replace(/(\..*)\./g, '$1').replace(/\./g, '');
        //  try {
        //   let number = Intl.NumberFormat('en-us', {
        //     minimumFractionDigits: 0
        //   }).format(Number(value));
        //   return number.replace(/,/g, '.');
        //  } catch (error) {
        //    return '0';
        //  }
        // return number;
    }
}
