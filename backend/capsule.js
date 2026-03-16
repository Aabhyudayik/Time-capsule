// this file will describe the layout of the data ; the schema
import mongoose from "mongoose"
let capsuleSchema=mongoose.Schema({
    picture:String, email:String, sendate:Date
});
let Capsule= mongoose.model("Capsule",capsuleSchema)
export default Capsule