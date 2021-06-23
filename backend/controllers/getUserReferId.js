import User from '../models/userModel.js'

const getUserReferId= async (req,res)=>{
   
    const referId = await User.findById(req.params.referId)
    res.json(referId)

} 

const getUser= async (req,res)=>{
   
    const user= await User.find()
    // const s =user.filter(item=> item.referId==='Ekram5971565')
    const s =user.filter(item=> item.referId==='Tania6439289')

    if(s){
       s[0].name = s[0].name
       s[0].email = s[0].email
       s[0].password = s[0].password
       s[0].isAdmin = s[0].isAdmin
       s[0].referId = s[0].referId
       s[0].referActive = s[0].referActive
       s[0].referBonus = s[0].referBonus + 20

       const update = await s[0].save()
       res.json({"success":true})

    }else{
        res.json({"Fail": false})
    }
    

} 

export{
    getUser,
    getUserReferId
}