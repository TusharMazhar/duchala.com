import Service from '../models/serviceModel.js'

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
} 

const getServices = async (req,res)=>{
   
    const services = await Service.find()
    res.json(services)

} 
export {
    serviceNeed,
    getServices
  
}