import Express from 'express';
import { AddCarts, deleteCart, getCarts } from '../controller/cartController.js';
const router=Express.Router();
router.post('/addCart',AddCarts);
router.get('/showCart',(req,res,next)=>{
    res.status(200).send("HI I am here")
})
router.get('/getCart/:userId',getCarts);
router.delete('/deleteCart/:_id',deleteCart);
export default router;