import express from "express";
import { AddUser,DeleteUser, LoginUser } from "../controller/userController.js";

const router=express.Router();
router.post('/addUser',AddUser)
router.post('/login',LoginUser)
router.get('/getuser',async(req,res)=>{
    res.send("We are here ")
})
export default router;