const express = require('express');
const path = require('path');
const app = express();

const port = 9000;

// app.get('/', (req, res) => {
//     res.send("app decline here");

// });
app.use('/static', express.static(`${__dirname}/public`));

// connect html server
//  app.use(express.static(`${__dirname}/public`));



// app.get('/home', (req, res) => {
//         // res.status(200).send('itsvmy home');

//         res.write('<h1>its my life</h1>');
//         res.write('second onne');


//     })
// json declare advanntage is null, non object data pass here
// app.get('/temp', (req, res) => {
//     res.json({
//         id: '1',
//         num: '5',
//         name: 'sagar'
//     })
// });
app.listen(port, () => {
    console.log(`{port} rebuild here`);
})