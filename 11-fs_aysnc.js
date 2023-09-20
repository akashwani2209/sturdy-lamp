const {readFile, writeFile} = require('fs')  //fs- file system

// if utf8 coding is not provided then a buffer will appear
// <Buffer 54 68 69 73 20 69 73 20 74 68 65 20 66 69 72 73 74 20 74 65 78 74 20 66 69 6c 65> 
// this will be on terminal

console.log('start')
readFile('./content/first.txt','utf8', (err,result) => {
    if (err){
        console.log(err)
        return
    }
    const first = result
    readFile('./content/second.txt', 'utf8', (err, result) => {
        if (err){
            console.log(err)
            return
        }
        const second = result
        writeFile(
            './content/result-async.txt',
            `Here is the result: ${first}, ${second}`,
            (err,result) => {
                if (err){
                    console.log(err)
                    return
                }
                console.log('done with this task')
            })
    })
})
console.log('starting with next task')