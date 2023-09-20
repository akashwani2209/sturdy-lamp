//Common JS, every file is module (by default)
//Modules - Encapsulated Code (only share minimum)

const names = require('./4-names');
console.log(names)
const Hi = require('./5-util');
require('./7-mind-grenade');
// Hi('Akash')    //from  util module, new function Hi having the functionality of sayHi function in util
// Hi(names.john)
// Hi(names.peter)
  