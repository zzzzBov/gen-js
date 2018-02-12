module.exports = (input, ...functions) => functions.reduce((next, fn) => fn(next), input)
