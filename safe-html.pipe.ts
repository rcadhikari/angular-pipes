import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser'

/*
 * Pipe to avoid stripping the inline style on html text.
 *
 * Usage:
 *   safeHtml
 * Example:
 *  1. In Javascript:
 *      let input = new SafeHtml().transform(input);
 *
 *  2. In HTML:
 *      {{ safeHtml }}
*/

@Pipe({ name: 'safeHtml'})

export class SafeHtmlPipe implements PipeTransform  {
    constructor(private sanitized: DomSanitizer) {}
    transform(input) {
        return this.sanitized.bypassSecurityTrustHtml(input);
    }
}
