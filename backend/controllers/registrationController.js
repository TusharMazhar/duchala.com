import Registration from '../models/registrationModel.js'

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
} 

const getServiceRegisters = async (req,res)=>{
   
    const serviceRegisters = await Registration.find()
    res.json(serviceRegisters)

} 
export {
    serviceResgistration,
    getServiceRegisters
  
}