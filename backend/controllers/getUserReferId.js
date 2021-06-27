import User from '../models/userModel.js'

const getUserReferId = async (req,res)=>{

    let [referId,userId] = req.params.id.split('USAIRELAND')
    const[a,percentageBonus] = userId.split('IRELANDUSA')
    userId = a

    console.log(referId,a,percentageBonus)
    const [referBonus,referUser] = req.params.id.split('BONUSUSAIRELAND')
    const users= await User.find()
    const s =users.filter(item=> item.referId===referId)
    const referBonusReset = async ()=>{
 
            
        await User.findById(referUser).then(async (data)=>{
            if(data){
    
                data.name = data.name
                data.email = data.email
                data.password = data.password
                data.isAdmin = data.isAdmin
                data.referId = data.referId
                data.referActive = true
                data.referBonus = data.referBonus - referBonus
     
                await data.save().then(()=>{
                    res.json({"success": true})
                })
                 
          
              }
           })

    }
    
    const referAdd= async ()=>{

        if(s.length===1){
            s[0].name = s[0].name
            s[0].email = s[0].email
            s[0].password = s[0].password
            s[0].isAdmin = s[0].isAdmin
            s[0].referId = s[0].referId
            s[0].referActive = s[0].referActive
            s[0].referBonus = s[0].referBonus + parseInt(percentageBonus)
     
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
            
     
         }
      
         else{
    
             res.json({"active": false})
         }
    }
    
    
    if(s.length!==0){
        referAdd()
    }
   
    referBonusReset()

} 

export{
    getUserReferId
}