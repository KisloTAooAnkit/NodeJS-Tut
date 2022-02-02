const {readFile,writeFile} = require('fs')
console.log('start')
readFile(
    './content/first.txt',
    'utf-8',
    (err,result) => { 
        if(err) {
            console.log(err);
            return;
        }
        const first = result;
        readFile(
            './content/second.txt',
            'utf-8',
            (err,result) => {
                if(err) {
                    console.log(`Error in second file ${err}`)
                    return;
                }
                const second = result
                writeFile(
                    './content/result-async.txt',
                    `\nHere is result from async : ${first},${second}`,
                    (err,result) => {
                        if(err){
                            console.log("Error in writing the file async")
                            return
                        }
                        console.log("done with writing file")
                    }
                )
            }
        )
    }
)
console.log("starting next task")