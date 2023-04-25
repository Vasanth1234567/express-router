const express=require('express')
const app=express()
const user=require('./user.js')
app.get('/',(request,response)=>{
    response.send("<h1>This is Home Page</h1>")
})
app.use('/user',user)
app.listen(3500)