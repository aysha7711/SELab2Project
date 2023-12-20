import carts from "../Models/cart.js";
export async function AddCarts(req,res,next){
    const {name,price,imageUri,userId}=req.body;
    const addCart= new carts({
        name,
        price,
        imageUri,
        userId,
    })
    try{
        const saveCart=await addCart.save()
        console.log("The Product has been added to cart")
        res.status(200).send(saveCart)
    }
    catch(err)
    {
        next(err)

    }
}
export async function getCarts(req,res,next){
    const{userId}=req.params;
    try{
    const getCart=await carts.find({userId:userId})
    console.log(getCart)
    if (getCart.length===0){
        res.status(200).send("No")
        console.log("No items in the cart")
    }
    else{
    res.status(200).send(getCart)
    }
    }
    catch(err){
        next(err)
    }
}
export async function deleteCart(req,res,next){
    const {_id}=req.params;
    try{
        const deleteData=await carts.findByIdAndDelete(_id);
        if(!deleteData){
            res.status(404).send("Error Not found !")
        }
        else{
            res.status(200).send("The Cart has been deleted")
        }
    }catch(err){
        next(err)
    }
}