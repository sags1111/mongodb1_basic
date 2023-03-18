const fs = require('fs');
const data = fs.writeFileSync('write.txt', 'my data declare here');
const d1 = fs.readFileSync('write.txt', 'utf-8');
console.log(d1);