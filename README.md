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
    
