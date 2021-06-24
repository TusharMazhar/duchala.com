import User from '../models/userModel.js'

const getUserReferId = async (req,res)=>{

    const [referId,userId] = req.params.id.split('USAIRELAND')
    const users= await User.find()
    const s =users.filter(item=> item.referId===referId)

    if(s.length!==0){
       s[0].name = s[0].name
       s[0].email = s[0].email
       s[0].password = s[0].password
       s[0].isAdmin = s[0].isAdmin
       s[0].referId = s[0].referId
       s[0].referActive = s[0].referActive
       s[0].referBonus = s[0].referBonus + 20

       await s[0].save().then(async ()=>{
         const user = await User.findById(userId)
         if(user){
            user.name = user.name
            user.email = user.email
            user.password = user.password
            user.isAdmin = user.isAdmin
            user.referId = user.referId
            user.referActive = true
            user.referBonus = user.referBonus 

            await user.save().then(()=>{
                res.json({"active": true})
            })
             
         }
   
            

        
       })
       

    }else{
        res.json({"active": false})
    }
    

} 

export{
    getUserReferId
}