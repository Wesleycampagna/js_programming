const fs = require('fs');


function write (){
    for (let i = 1; i <= 5; i++) {
        let file = "sync-txt" + i + ".txt";

        let buffer = ''
        
        for(let i = 0; i < 100; i++)
            buffer += "Hello Node.js! "
            
        let out = fs.writeFileSync(file, buffer);
        console.log('success!');
    }
}

let start = new Date().getTime()

setTimeout(function() {
  // execution time simulated with setTimeout function
  let end = new Date() - start
  console.info('Execution time: %dms', end)
}, write())
