import Registration from '../models/registrationModel.js'
import nodeMailer from 'nodemailer'
const serviceResgistration = (req,res)=>{

    const serviceRegistration = new Registration({
        name: req.body.name,
        phone: req.body.phone,
        category: req.body.category,
        location: req.body.location,
        description: req.body.description
    })
    serviceRegistration.save()
    .then((data)=>res.json({"success":"true"}))
    .catch((err)=>res.json(err))

    try{
        var tranporter = nodeMailer.createTransport({
          service:'gmail',
          auth:{
            user:'duchala.com@gmail.com',
            pass:'192837465DuchalaCom'
          }
      })
  
      var msg = {
        from:'duchala.com@gmail.com',
        to:'duchala.com@gmail.com',
        subject:'Workers Registration',
        text: `New worker has joined with us in this category: (${req.body.category})`
      }
  
      tranporter.sendMail(msg,(err,info)=>{
        if(err){
          console.log('Error occured',err)
        }else{
          console.log('success')
        }
      })
    }catch(err){
        console.log(err)
    }
} 

const getServiceRegisters = async (req,res)=>{
   
    const serviceRegisters = await Registration.find()
    res.json(serviceRegisters)

} 
export {
    serviceResgistration,
    getServiceRegisters
  
}