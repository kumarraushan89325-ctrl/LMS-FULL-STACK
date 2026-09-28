console.log ("Raushan kumar ");

const fs = require('fs');
fs.writeFile('output.txt','wewirting.File',(err) => {
if (err) console.log('error occurred');
else console.log('file written Successfully');


})