import mongoose from "mongoose";

export const userSchema = new mongoose.Schema({

    name:{
        type:'string',
        required: true,

    },
    typeIdentification:{
        type:String,
        required:true,
        default:"CC"
    },
    identification:{
        type:String,
        required: true,
    },
    phone:{
        type:String,
        required: true,

    },

    address:{
        type:String,
        required: true,
    },
    username:{
        type:String,
        required: true,
        trim:true,

    },
    email:{
        type:String,
        required: true,
        trim:true,
        unique: true
    },
    password:{
        type:'string',
        required: true,
        
    },
    role:{
        type:String,
        default:"user"
    },

    images: {
        url: String
    }

},{
    timestamps:true
})

export default mongoose.model('User',userSchema)