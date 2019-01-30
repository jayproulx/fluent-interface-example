# Fluent Interface Example

A fluent interface is a form of an API that allows chaining methods to simplify common activities, especially where 
multiple operations are executed or options are specified in series.

Ideally fluent interfaces should only be employed where readability is improved when the API is frequently leveraged as
a series of combined actions.

Common examples of Fluent Interfaces are:

**jQuery**

    $('.mySelector')
        .hide()
        .addClass('anotherClass')
        .show();
        
**Request**

    request
      .get('http://google.com/img.png')
      .on('response', function(response) {
        console.log(response.statusCode) // 200
        console.log(response.headers['content-type']) // 'image/png'
      })
      .pipe(request.put('http://mysite.com/img.png'))
      
**Installation**

    # npm install -g fluent-interface-example
          
**Usage**

Convert millimetres to feet

    # ./unit-convert --convert 100 --from mm --to ft
    
Convert celcius to fahrenheit 

    # ./unit-convert --convert 100 --from C --to F
    
Show all possible conversion units

    # ./unit-convert --possibilities
    
Show all possible conversion units from a particular unit

    # ./unit-convert --possibilities --from C
    
**Running tests**

    # npm run test