const fs = require('fs')

const input = fs.readFileSync('/dev/stdin').toString().trim()

const corn = parseInt(input)

const price = (corn/11)*10

console.log(price);