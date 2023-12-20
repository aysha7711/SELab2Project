import mongoose from "mongoose";
const productSchema=mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
   price:{
    type:String,
    required:true,
   },
   imageUri: {
    // data: Buffer, // Image data will be stored as Buffer
    type: String, // MIME type of the image
    

  },

});
const Products = mongoose.model('Products', productSchema);
export  default Products;