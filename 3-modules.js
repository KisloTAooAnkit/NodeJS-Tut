//Modules

const {john,peter} = require('./4-names')
const sayHii = require('./5-utils')
const data = require('./6-alternative-export')

require('./7-mind-grenade')
// console.log(john,peter)
console.log(data)
sayHii('susan')
sayHii(john)
sayHii(peter)
