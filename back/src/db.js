import mongoose from "mongoose";

export const connectDB = async() =>{
    try {
        await mongoose.connect('mongodb://127.0.0.1/formativoDatabase')
        console.log(">>> DB is connect")
    } catch (error) {
        console.log("error")
    }
}