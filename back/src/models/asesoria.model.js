import mongoose from "mongoose";

const adviceSchema = new mongoose.Schema({ 
    clientName: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    date: {
        type: Date,
        default: Date.now
    },

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true
    }
},{
    timestamps: true
});

export default mongoose.model('Advice', adviceSchema);  