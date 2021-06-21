import express from 'express'
const router = express.Router()
import {
    serviceResgistration,
    getServiceRegisters
} from '../controllers/registrationController.js'


router.route('/').post(serviceResgistration)
router.route('/').get(getServiceRegisters)


export default router