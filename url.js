const request = require('request');
const url = 'https://catfact.ninja/facts';

request({ url: url }, (req, response) => {
    const data = JSON.parse(response.body);
    console.log(data.current);
})