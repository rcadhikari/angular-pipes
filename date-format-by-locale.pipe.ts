import { Pipe, PipeTransform } from '@angular/core';


/*
 * Pipe to get the date format by locale.
 *
 * Usage:
 *   dateFormatByLocalePipe
 * Example:
 *  1. In Javascript:
 *      let dateFormat = new DateFormatByLocalePipe().transform();
 *
 *  2. In HTML:
 *      {{ dateFormatByLocalePipe }}
*/
@Pipe({name: 'setDateFormatByLocale'})

export class SetDateFormatByLocalePipe implements PipeTransform {
    transform(): any {

        var locale = navigator.language || 'en-US';

        // Set Default Date Format to GB;
        let defaultFormat = 'dd/mm/yyyy';
        let shortDate = 'dd/MM/y';

        if (locale == 'en-US') {
            defaultFormat = 'mm/dd/yyyy';
            shortDate = 'MM/dd/y';
        }
        else if (locale == 'zh-CN' || locale == 'zh-HK' ) {
            defaultFormat = 'yyyy/mm/dd';
            shortDate = 'y/MM/dd';
        }

        let dateFormatInfo = {'locale': locale, 'defaultDate': defaultFormat, 'shortDate': shortDate};

        // Set the default date from by browser locale on storage
        localStorage.setItem('dateFormatByLocale', JSON.stringify(dateFormatInfo) );

        return dateFormatInfo;
    }
}
