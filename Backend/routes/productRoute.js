import Express from 'express';
import { GetProduct, addProduct } from '../controller/productController.js';
const router=Express.Router();

//  Express.json({ limit: '100mb' }), Express.urlencoded({ extended: true, limit: '100mb' })
router.post('/addProduct', addProduct)
router.get('/getProduct',(req,res)=>{
    res.send("The Route is runing fine")
})
router.get('/getProducts',GetProduct)
export default router;