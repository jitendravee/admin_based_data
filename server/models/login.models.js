import mongoose from "mongoose";


const loginSchema = new mongoose.Schema({

    id : {
        type:String,
        unique: true,
        required:true
    },
    password: {
        type:String,
        unique: true,
        required:true
    }
},{
    timestamps: true
}
) 

export const login = mongoose.model('login', loginSchema);











