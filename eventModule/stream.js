const fs = require('fs');
const http = require('http');

const server = http.createServer();
// server.on("request", (req, res) => {
//     var fs = require('fs');
//     fs.readFile('sagar.txt', (err, data) => {
//         if (err) console.log(err);
//         res.end(data);
//     })
// });

fs.writeFileSync('s2.txt', 'second impact implement - decline here');

server.on("request", (req, res) => {
    var fs = require('fs');
    // fs.readFile('s2.txt', (err, data) => {
    //     if (err) console.log(err);
    //     res.end(data);
    // })


    // stream pipe in nodejs--- pipe()means read the data and write data input
    const rread = fs.createReadStream('s2.txt');
    rread.pipe(res);

})




server.listen(8000, '127.0.0.1');