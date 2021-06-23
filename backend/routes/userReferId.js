import express from 'express'
const router = express.Router()
import {
    getUserReferId,
    getUser
} from '../controllers/getUserReferId.js'

router.route('/:referId').get(getUserReferId)
router.route('/').get(getUser)

export default router