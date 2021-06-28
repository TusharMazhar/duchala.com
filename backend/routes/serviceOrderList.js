import express from 'express'
const router = express.Router()
import {
    getServiceOrderList
} from '../controllers/getServiceOrderList.js'


router.route('/').get(getServiceOrderList)


export default router