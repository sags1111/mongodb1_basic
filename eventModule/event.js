const Event = require('events');
const event = new Event();
const port = 9000;
//event intialize
// event.on("sayHi", () => {
//         console.log("event declare");
//     })
//     // here one event to multiple event connect
// event.on("sayHi", () => {
//     console.log('event accurate');
// });

// event.on("sayHi", () => {
//     console.log("third event decline");
// })

// pass parameter declare here
event.on("sayHi", (req, res) => {
    console.log(`its derived  ${req} decline ${res}`);
});

event.emit('sayHi', 200, "ok");