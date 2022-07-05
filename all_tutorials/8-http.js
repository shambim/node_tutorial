const http=require('http')

const server=http.createServer((req,res)=>{
    if(req.url=='/'){
        res.write(`Hai shamseer`)
        console.log(req.url)
        res.end()
    }
    if(req.url=='/aboutus'){
        res.write(`I am shamseer Pari,Software Engineer`)
        console.log('Hi Pari')
        res.end()
    }
    
})

server.listen(8000)

