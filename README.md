# Angular-pipes


### Example

1. WordWrap:
   >> (Soft wrap the string in multiple lines using parameter length) <br/>
   >> Default character length is 20, however you can override via param; <br/>
   
   Example:
   
    In Javascript:
    ```
    let string = "hello world nepal testing global organisation testing hello doblin duck hotel party pompkins destribution variation variation1 doblin duck variation party destribution";
    let wrappedString = new WordWrap().transform(string, 20);
    console.log('Original String: ' + string);
    console.log('Wrapped String: ' + wrappedString);
    ```
    In HTML:
    ```
    {{ string | wordWrap: 20 }}
    ```
    Output:
    ```
    hello world nepal
    testing global
    organisation testing
    hello doblin duck
    hotel party pompkins
    destribution
    variation variation1
    doblin duck variation
    party destribution
    ```
2. SetDateFormatByLocale
   >> Pipe to get the date format by locale. <br/>
 
   Example:

    In Javascript:
    ```
    let dateFormat = new DateFormatByLocalePipe().transform();
    console.log('DateFormatByLocale', dateFormat.shortDate);
    ```
    In HTML:
    ```
    {{ dateFormatByLocalePipe }}
    ```

   Output:
    ```
    dd/MM/y
    ```
 3. Datex
    >> Pipe to use the moment formatter instead of the Angular built-in one. <br/>
 
    Example:

    In Javascript:
    ```
    let oldDate = '02/14/2018';
    let newDate = new DatexPipe().transform(oldDate);
    console.log('newDate', newDate);
    ```
    In HTML:
    ```
    {{'02/14/2018' | datex:'shortDate' }}
    ```

    Output:
    ```
    14/02/2018
    ```   
 4. MaskNumber
    >> Pipe to mask the number with comma (,) for thousand separator.<br/>
 
    Example:

    In Javascript:
    ```
    let input = '2045500.5';
    let maskedInput = new MaskNumberPipe().transform(input);
    console.log('input', maskedInput);
    ```
    In HTML:
    ```
    {{'2045500.5' | maskNumber }}
    ```

    Output:
    ```
    2,045,500.20
    ```   
    
 5. SafeHtml
    >> Pipe to avoid stripping the inline style on html text.
    Example:

    In Javascript:
    ```
    let input = '<h1><span style="background-color: #ffff99;">Yello background text</span></h1> <p><span style="color: #ff0000;">Red colored text.</span>'
    let myHtmlContent = new SafeHtmlPipe().transform(input);
    ```
    In HTML:
    ```
    <div [innerHtml]="myHtmlContent | safeHtml"></div>
    ```

    Output:
    ```
    Yello background text
    Red colored text.
    ```   
