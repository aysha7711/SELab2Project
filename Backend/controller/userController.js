import User from '../Models/users.js';
export async function AddUser(req,res,next){
   const addUser=new User(req.body)
   try{
    const saveUser=await addUser.save()
    console.log("User Has been Added with this kind of infomration ", saveUser)
    // res.send("User Added",saveUser)
    res.status(200).send(saveUser)
   }
   catch(err){
    next(err)
   }
}   
export function DeleteUser(){

}
export async function LoginUser(req,res,next){
   const {email,password}=req.body
   var message=0;
   try{
   var loginUser=await User.findOne({email})
   if (!loginUser){
      loginUser='Email Not Found'
      res.status(401).send(loginUser)
   }
   const checkPassword=await loginUser.password;
   if(password!==checkPassword){
      loginUser="Invalid Password"
      res.status(401).send(loginUser)
   }
   else{
      res.status(200).send(loginUser)

   }
}
catch(err){
   next(err)
   
}
}