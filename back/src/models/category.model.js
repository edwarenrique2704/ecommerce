import mongoose from "mongoose";

 export const categorySchema = new mongoose.Schema(
    {
      title: {
        type:String,
        required: true,
        unique: true,
        //index: true,
      },
    },
    {
      timestamps: true,
    }
  );
  
  
  export default  mongoose.model("Category", categorySchema);