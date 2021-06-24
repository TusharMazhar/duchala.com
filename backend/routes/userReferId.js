import express from 'express'
const router = express.Router()
import {
    getUserReferId,
} from '../controllers/getUserReferId.js'

router.route('/:id').get(getUserReferId)


export default router