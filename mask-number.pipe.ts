import { Pipe, PipeTransform } from '@angular/core';

/*
 * Pipe to mask the number with comma (,) for thousand separator.
 *
 * Usage:
 *   input | maskNumber
 * Example:
 *  1. In Javascript:
 *      let number = new MaskNumberPipe().transform(input);
 *
 *  2. In HTML:
 *      {{input | maskNumber : true : 'en-US'}}
*/
@Pipe({name: 'maskNumber'})

export class MaskNumberPipe implements PipeTransform {
    transform(inputVal: string, getInteger?:boolean, locale?: string): any {

        if (inputVal === undefined) return inputVal;
        let input = inputVal;

        input = (input.replace(/,/g, ''));

        locale = (locale) ? locale : 'en-US';
        getInteger = (getInteger) ? getInteger : false;

        // Convert to numeric format
        input = new Intl.NumberFormat(locale, {
            minimumFractionDigits: 2
        }).format(Number(input));

        if (!parseFloat(input)) return inputVal;

        if (!getInteger) {
            let decimalSeparator = input.charAt(input.length -3);

            // Remove decimal values if 0's
            if(decimalSeparator == '.' || decimalSeparator == ',') {
                input = input.replace(decimalSeparator + '00', '');
            }
        }

        return input;
    }
}
