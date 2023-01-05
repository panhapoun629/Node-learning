const fs = require('fs');


// read files
fs.readFile('./docs/blog1.txt', (err, data) => {
    if(err) {
        console.log(err);
    }
    console.log(data.toString());
});

console.log('last line'); 