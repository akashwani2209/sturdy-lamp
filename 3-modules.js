const names = require('./4-names');
console.log(names)
const Hi = require('./5-util');
const data = require('./6-import.js')
require('./7-mind-grenade');
Hi('Akash')    //from  util module, new function Hi having the functionality of sayHi function in util
Hi(names.john)
Hi(names.peter)
  