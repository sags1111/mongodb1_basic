const nodemailer = require('nodemailer');
const transport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'sagarsohagiya111@gmail.com',
        pass: 'Sagar@111'

    }
});

let detail = {
    from: 'sagarsohagiya111@gmail.com',
    to: 'sagar.200410116019',
    subject: 'testing my email from task here',
    cc: 'import from query'
}

transport.sendMail(detail, (err) => {
    if (err) {
        console.log("err pass accurence");
    } else {
        console.log("err not accurence");
    }
});