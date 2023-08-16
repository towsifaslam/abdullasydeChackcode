 const express = require('express')
const router = express.Router()

const {signin,signup,get} = require('../controller/user')

router.post('/singup',signup);
router.post('/signin',signin)
router.get('/',get)

module.exports = router