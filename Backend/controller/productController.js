import Products from "../Models/products.js"

export async function addProduct(req,res,next){

    console.log(req.body)
    const {name,price,imageUri}=req.body;
    // const imageUri=req.file?{
    //     data:req.file.buffer,
    //     contentType:req.file.mimetype,
    // }:undefined;
    const product=new Products({
        name,
        price,
        imageUri,
    });
    try{
        const saveProduct=await product.save();
        console.log("Product has been added:  ",saveProduct)
        res.status(200).send(saveProduct);
    }catch(err){
        next(err)
    }

}
export async function GetProduct(req,res,next){
    try{
    const getProduct=await Products.find()
    console.log(getProduct)
    res.status(200).send(getProduct)
}catch(err){
    next(err)
}
}