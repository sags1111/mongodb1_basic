const add = (a, b) => {
    return a + b;
};
// console.log(add(5, 6));

const sub = (a, b) => {
    return a - b;
};

const mult = (a, b) => {
    return a * b;
}

module.exports.add = add;
module.exports.sub = sub;
module.exports.mult = mult;