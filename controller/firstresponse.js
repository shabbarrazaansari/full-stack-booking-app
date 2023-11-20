const express = require('express');
const Sequelize = require('sequelize')
const fs = require('fs');
const path = require('path');
const booking = require('../models/booking');
const sequelize = require('../util/database')


exports.firstpage = (req,res,next)=>{
    res.send('hello my app')
}
exports.loginpage = async (req,res,next)=>{
    //do some database
    // console.log(req.body)
    const name = req.body.name;
    const email = req.body.email;
    const phone = req.body.phone;
    
    const data = await booking.create({myname :name,email :email ,phone : phone});
    res.status(200).json({userdetails :data})
     
    // res.redirect('/');
}
exports.datadelete = async (req,res,next)=>{
    const uid = req.params.id;
    await booking.destroy({where:{id: uid}})
}
exports.getuserdata = async (req,res,next)=>{
    const user = await booking.findAll();
    // console.log(user)
    res.status(200).json({allusers:user})
}

