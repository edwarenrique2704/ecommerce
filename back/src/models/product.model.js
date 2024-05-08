import mongoose from "mongoose";

export const productSchema = new mongoose.Schema({
    name:{
         type:String,
         required:true,
         trim:true
     },
    price:{
        type:Number,
        required:true,
        trim:true,
        default:0.0
    },
    description:{
        type:String,
        required:true,
        
    },
    // user: {
    //     type: mongoose.Schema.ObjectId,
    //     ref: "User",
    //     required: true,
    // },
    /*rating:{
        type:Number,
        min:0,
        max:5,
        default:0,
        
    },
    */
    stock:{
        type:Number,
        required:true,
        maxLength:5,
        default:0
    },
   
    brand:{
        type:String,
        default:false
    },
   
    images:{
       url: String
    },

    category:{
        type:String,
        required:true,
        // enum:{
        //     values:[
        //         'shampoo',
        //         'acondicionador',
        //         'crema para peinar',
        //         'promo'
        //     ],
        //     message:'select category'
        // }
    },
    /*thumbnail:{
        type:String,
        required:true
    },
    */
   
},{
    timestamps:true
})

export default mongoose.model("Product",productSchema)