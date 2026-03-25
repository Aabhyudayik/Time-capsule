import express from "express"
import connect from "./db.js"
import Capsule from "./capsule.js"
const port = process.env.PORT || 3000 
const app= express()
app.use(express.static('./frontend'))
async function start(){
    await connect()
    await import("./scheduler.js")
    app.listen(port)
    
}
app.use(express.json({ limit: '10mb' }))
app.post("/submit", async(req,res)=>{
   
    const email=req.body.email
    const image=req.body.fimage
    const send_date= new Date(Date.now()-(Math.random()*94608000000))
    const store_date=new Capsule({
        email,picture:image,random_date:send_date//if the variable name and schema key is same js will interpret email as email:email
    })
   
        
        try{
            await store_date.save()
         res.send("recieved the data")
        }
        catch(error){
            res.status(500).send("something went wrong")
        }
    
})

start()





