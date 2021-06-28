import express from 'express'
const router = express.Router()
import {
    serviceResgistration,
    getServiceRegisters
} from '../controllers/registrationController.js'
import { protect, admin } from '../middleware/authMiddleware.js'

router.route('/').post(serviceResgistration)
router.route('/adminduchala').get(protect,admin,getServiceRegisters)


export default router