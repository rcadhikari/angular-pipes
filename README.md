# angular-pipes


### Example

1. WordWrap:
   >> Default character length is 20, however you can override via param;
    Example:

    JS view:
    ```
    let string = "hello world nepal testing global organisation testing hello doblin duck hotel party pompkins destribution variation variation1 doblin duck variation party destribution";
    let wrappedString = new WordWrap().transform(string, 20);
    console.log('Original String: ' + string);
    console.log('Wrapped String: ' + wrappedString);
    ```
    HTML View
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
