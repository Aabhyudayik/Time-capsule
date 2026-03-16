import express from "express"
import connect from "./db.js"
import Capsule from "./capsule.js"
async function start(){
    await connect()
    app.listen(3000)
}
app.use(express(json()))




