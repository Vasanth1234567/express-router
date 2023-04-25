const express=require('express')
const router=express.Router()
router.get('/',(request,response)=>{
    response.send("List of Id")
})
router.get('/newUser',(request,response)=>{
    response.send("New User Registration")
})

router.route('/:id')
    .get((request,response)=>{
        response.send(`Get Method with id ${request.params.id} and of name ${request.user.name}`)
    })
    .put((request,response)=>{
        response.send(`Update Method with id ${request.params.id}`)
    })
    .delete((request,response)=>{
        response.send(`Delete Method with id ${request.params.id}`)
    })
const user=[
    {
        name:'Vasanth'
    },
    {
        name:'Prakash'
    }
]
router.param('id',(request,response,next,id)=>{
    
    request.user=user[id-1]
    next()
})
module.exports=router