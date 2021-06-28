import express from 'express'
const router = express.Router()
import {
    serviceNeed,
    getServices
} from '../controllers/serviceController.js'
import { protect, admin } from '../middleware/authMiddleware.js'

router.route('/').post(serviceNeed)
router.route('/adminduchala').get(protect,admin,getServices)


export default router