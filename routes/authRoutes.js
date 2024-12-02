const express = require('express')
const authController = require('../controllers/authController')
const router = express.Router()

//Registration - api/v1/auth/register
router.post('/register',authController.registerController)


// router.post('/login',loginController)

// router.get('/test', requireSignIn, isAdmin, testController)
module.exports = router