const {readFileSync, writeFileSync} = require('fs');
console.log('start')
const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

//'utf8' is an argument passed to the readFileSync function that specifies the character encoding used when reading the file.

writeFileSync(
    './content/result-sync.txt',
     `Here is the result :${first}, ${second}`,
     {flag: 'a'}        
)
console.log('done with this task')
console.log('starting with the next task')


//if the file is not already present in the directory then node will create that file for you
// if the file is present, then node will override the data of the file present in the file with the file content you've given

//flag argument appends value into the already present file