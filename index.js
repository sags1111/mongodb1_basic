 const fs = require('fs');
 // //fs.writeFileSync('read.txt', 'filedirHere-implement to decline');
 // //fs.appendFileSync('read.txt', 'sagar here');
 // // const buffer = fs.readFileSync('read.txt');
 // // const st = buffer.toString();
 // //  console.log(st);
 // // fs.renameSync('read.txt', 'sagar.txt');
 // //fs.mkdirSync('sagar');
 // // fs.writeFileSync('sagar.txt', 'its my day', (err) => {
 // //     console.log('file is created');
 // // });
 // fs.readFileSync('sagar.txt', (data, err) => {
 //     console.log(data);
 // })


 //module inn function with exports, dir, file, require, module also...
 // (function(exports, require, module, _filename, _dirname) {
 //     const name = "sagar";
 //     const fs = require('fs');
 //     console.log(name);
 // })



 const http = require('http');
 // here create - server
 const server = http.createServer((req, res) => {
     // console.log(http);
     // res.end("server might be created");
     if (req.url == "/") {
         res.end('server 1');
     } else if (req.url == '/home') {
         res.end('server 2');
         //  } else if (req.url == '/userapi') {
         //      fs.readFile(`${_dirname}/os/setting.json`);
         //      res.end('random api decline');
         //  } 
     } else {
         res.writeHead(404, { "content-type": "text/html" });
         res.end('<h1>last server</h1>');
     }
 }).listen(8999);




 // json file manage and create
 //  const bio = {
 //      name: 'sagar',
 //      age: '20',
 //      add: 'surat'
 //  };

 //  const st = JSON.stringify(bio);
 //  //console.log(st);
 //  //  fs.writeFile('json1.json', st, (err) => {
 //  //      console.log('err  generate');
 //  //  });
 //  fs.readFile("json1.json", "UTF-8", (err, data) => {
 //      // data must be intilize for sequence
 //      const ogData = JSON.parse(data);
 //      // console.log(data);
 //      console.log(ogData);
 //  });


 //  const data2 = {
 //      name: 'krutika',
 //      age: "26",
 //      add: 'surat'
 //  };
 //  fs.writeFile("json2.json", data2, (err) => {
 //      console.log('err occured');
 //  });
 //  //  const st2 = JSON.stringify(data2);
 //  //  fs.readFile('json2.json', st2, (err, data2) => {
 //  //      const ogData2 = JSON.parse(data2);
 //  //      console.log(ogData2);
 //  //  })