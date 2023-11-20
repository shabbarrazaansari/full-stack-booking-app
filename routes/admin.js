const express = require('express');
const router = express.Router();
const path = require('path')
//const fs = require('fs')
const pagefirst = require('../controller/firstresponse')


router.get('/',pagefirst.firstpage)

router.post('/login',pagefirst.loginpage)
router.get('/userdetail',pagefirst.getuserdata)
router.delete('/deleteuser/:id',pagefirst.datadelete)

module.exports = router;