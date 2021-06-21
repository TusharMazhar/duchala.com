import express from 'express'
const router = express.Router()
import {
    serviceNeed,
    getServices
} from '../controllers/serviceController.js'


router.route('/').post(serviceNeed)
router.route('/').get(getServices)


export default router