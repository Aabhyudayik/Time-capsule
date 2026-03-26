import dotenv from "dotenv"
import mongoose from "mongoose"
dotenv.config()
function connect(){
    mongoose.connect(process.env.MONGO_URI).then(()=>console.log("yas")).catch((error)=>console.log(error))

}
export default connect
