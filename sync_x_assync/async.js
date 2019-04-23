const fs = require('fs');


function write(){
    for (let i = 1; i <= 5; i++) {
        let file = "async-txt" + i + ".txt";
        
        let buffer = ''

        for(let i = 0; i < 100; i++)
            buffer += "Hello Node.js! "


        fs.writeFile(file, buffer, function (err, out) {
            console.log('success!');
        });
    }
}

var start = new Date().getTime()

setTimeout(function() {
  // execution time simulated with setTimeout function
  var end = new Date() - start
  console.info('Execution time: %dms', end)
}, write())