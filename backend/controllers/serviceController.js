import Service from '../models/serviceModel.js'
import nodeMailer from 'nodemailer'
const serviceNeed = (req,res)=>{

    const service = new Service({
        name: req.body.name,
        phone: req.body.phone,
        category: req.body.category,
        location: req.body.location,
        description: req.body.description
    })
    service.save()
    .then((data)=>res.json({"succcess":"true"}))
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
        subject:'Service Need Order',
        text: `User has applied to get this service : (${req.body.category}).User Name: ${req.body.name} & User Location: ${req.body.location}.Description: ${req.body.description}`
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

const getServices = async (req,res)=>{
   
    const services = await Service.find()
    res.json(services)

} 
export {
    serviceNeed,
    getServices
  
}