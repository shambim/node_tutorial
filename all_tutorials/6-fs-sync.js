const {readFileSync,writeFileSync}=require('fs')

const first=readFileSync('./includes/first.txt','utf8')

const second=readFileSync('./includes/second.txt','utf8')

console.log('start')

writeFileSync(
    './includes/result.txt',
    `Here is the result ${first+' '+second}`,
    {flag:'a'}
)
console.log('done this task')
console.log('start the next task')

/*
start
done this task
start the next task

In case of synchronous method,its blocking approch,its like line by line execution
we have to wait the first process to end for starting the second process.
its seems like line by line execution and also its time taking
*/ 