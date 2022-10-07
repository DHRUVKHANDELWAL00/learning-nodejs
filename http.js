const http=require('http')
const server=http.createServer((req,res)=>{
  console.log(req)
  res.write('welcome bois')
  res.end()
})
server.listen(5000)
