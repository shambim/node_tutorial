const {readFile,writeFile} = require('fs')
console.log('start')
readFile('./includes/first.txt','utf8',(err,result)=>{
    if(err){
        console.log(err)
        return
    }
    const first=result
    readFile('./includes/second.txt','utf8',(err,result)=>{
        if(err){
            console.log(err)
            return false;
        }
        const second=result
        writeFile('./includes/result-async.txt',`the result is ${first},${second}`,(err,result)=>{
            if(err){
                console.log(err)
                return false;
            }
            console.log('done this task')
        })
    })
})

console.log('start the next task')

/*
result
-------
start
start the next task
done this task


here we are not waiting the first process toend for starting the second process
its non blocking approch,as compared to synchronous its faster
*/


/*
console.log(first)
    readFileSync('./includes/second.txt','utf8',(err,result)=>{
        if(err){
            console.log(err)
            return false;
        }
        const second=result
        console.log(second)
        writeFileSync('./includes/result-async.txt',`the result is ${first},${second}`,(err,result)=>{
            if(err){
                console.log(err)
                return false;
            }
            console.log(result)
        })
    })*/