import { Pipe, PipeTransform } from '@angular/core';

/*
 * Remove any $ Serialise the URL params (object) to string
 *
 * Usage:
 *   value | stringToList
 * Example:
 *  1. In Javascript:
 *      let wrapString = new WordWrap().transform(string);
 *
 *  2. In HTML:
 *      {{ string | wordWrap }}
*/
@Pipe({name: 'wordWrap'})

export class WordWrap implements PipeTransform {
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
