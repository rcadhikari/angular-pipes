import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';
import { DateFormatByLocalePipe } from './date-format-by-locale.pipe';

/*
 * Pipe to use the moment formatter instead of the Angular built-in one.
 *
 * Usage:
 *   value | datex
 * Example:
 *  1. In Javascript:
 *      let verifiedDate = new DatexPipe().transform(exampleDate);
 *
 *  2. In HTML:
 *      {{exampleDate | datex:'shortDate' or 'dd/mm/y'}}
*/
@Pipe({name: 'datex'})

export class DatexPipe implements PipeTransform {
    transform(dateString: any, format = ""): any {

        // get the default format
        let locale = new DateFormatByLocalePipe().transform();

        if (typeof locale[format] != 'undefined') {
            format = locale[format];
        }
        format = format.toUpperCase();

        // Try and parse the passed value.
        var momentDate = moment(dateString);

        // If moment didn't understand the value, return it unformatted.
        if (!momentDate.isValid()) return dateString;

        // Otherwise, return the date formatted as requested.
        return momentDate.format(format);
    }
}
