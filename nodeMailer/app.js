const express = require('express');
const app = express();
const port = 9000;

app.get('/', (req, res) => {
    res.send('data impliced');
});
app.get('/sendemail', mailer);
const start = async = () => {
    try {
        app.listen(port, () => {
            console.log(`i am using node server ${port}`);
        });

    } catch (err) {

    }
}
start();