import express from 'express'
import siteControllers from '../Controllers/site.controllers.js'
const router = express.Router()

// HomePage Setting API's
router.get('/get/tours', siteControllers.gethotTours)
router.get('/top/destination', siteControllers.getDestionation)
router.get('/top/posts', siteControllers.getTopPosts)

// Tour's Pages
router.get('/all/tours', siteControllers.getAllTOurs)

// Post's Page
router.get('/all/posts', siteControllers.getAllPosts)
export default router