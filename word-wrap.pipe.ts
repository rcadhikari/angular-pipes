import { Pipe, PipeTransform } from '@angular/core';

/*
 * Soft wrap the string in multiple lines using parameter length:
 *
 * Usage:
 *   value | wordWrap
 * Example:
 *  1. In Javascript:
 *      let wrapString = new WordWrapPipe().transform(string, 30);
 *
 *  2. In HTML:
 *      {{ string | wordWrap | 30 }}
*/
@Pipe({name: 'wordWrap'})

export class WordWrapPipe implements PipeTransform {
    transform(string: any, charLen:number = 20, delimit: any = '<br/>'): any {

        if ( (string == null) || (string.length <= charLen)) {
            return string;
        }

        let result = ' ';
        delimit = "<br>";
        let newResult = '';
        let delimitSpace = '';
        let newWordCount = 0;
        let words = string.trim().split(/\s+/);

        words.forEach( function(word, index) {

            let ndwLength = (newResult + delimitSpace + word).length;

            if  (newResult.length >= (charLen + newWordCount) )
            {
                result += newResult + delimit;
                newResult = '';
                newWordCount = 0;
            }

            if ( ndwLength >= (charLen + newWordCount) ) {
                result += newResult + delimit;
                newResult = word;
                newWordCount = 1;
            }
            else {
                newResult += delimitSpace + word;
                newWordCount++;
                delimitSpace = ' ';
            }
        });

        result += newResult;

        return result;
    }
}
