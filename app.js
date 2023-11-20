const express = require('express');

const path = require('path');
const port = 1200;
const fs = require('fs')
const cors = require('cors');
const app = express();
app.use(cors());


const bodyparser = require('body-parser');

const adminroutes = require('./routes/admin');
const sequelize = require('./util/database');
const booking = require('./models/booking')



// 
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());


app.use('/login',express.static(__dirname + "/public"));
app.use(adminroutes);
// app.use('/userdetail',async (req,res,next)=>{

//     const user = await booking.findAll();
//     res.status(200).json({allusers:user})
// })

// app.use('/deleteuser/:id',async (req,res,next)=>{
//     
// })


sequelize
// .sync({force:true})
.sync()
.then(result =>{
    // console.log(result);
    app.listen(port,()=>{
        console.log('hello i am running',)
    })


}).catch(err=>{
    console.log(err)
})




