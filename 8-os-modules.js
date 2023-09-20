const os = require('os') //calling built in module os

//info about current user
const user = os.userInfo()
console.log(user)

//method returns the system's uptime in seconds.
console.log(`The system has been running for ${os.uptime()} seconds`)

const currentOs = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}
console.log(currentOs)