import mongoose from "mongoose";
const cartSchema =mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    price:{
        type:String,
        required:true,
    },
    imageUri:{
        type:String,
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
    }
})
const carts = mongoose.model('cart', cartSchema);
export  default carts;