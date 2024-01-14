import mongoose from "mongoose";

const customerInfoSchema = mongoose.Schema({
    company: {
        type:String,
    },
    owner: {
        type:String,
    },
    item: {
        type:String,
    },
    quantity: {
        type:Number,
    },
    weight: {
        type:String,
    },
    requestForShipment: {
        type:String,
    },
    boxCount: {
        type:Number,
    },
},
{ timestamps: true

})

export const customerInfo = mongoose.model('customerInfo', customerInfoSchema);