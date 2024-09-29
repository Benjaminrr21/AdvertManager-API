const express = require('express')
const res = require("express/lib/response")
const Oglas = require("../models/oglas.model.js")

const getAll = async(req,res) => {
    try{
        const oglasi = await Oglas.find({})
        res.status(200).json(oglasi)

    }catch(e){
        res.status(500).json({message:e.message})
    }
}
const getById = async(req,res) => {
    try{
        const {id} = req.params
        const oglas = await Oglas.findById(id)
        res.status(200).json(oglas)

    }catch(e){
        res.status(500).json({message:e.message})
    }
}
const add = async(req,res) => {
    try{
        
        const oglas = await Oglas.create(req.body)
        res.status(200).json(oglas)

    }catch(e){
        res.status(500).json({message:e.message})
    }
}
const search = async(req,res) => {
    const naslov = req.query.naslov;

    try {
        const oglasi = await Oglas.find({ naslov: new RegExp(naslov, 'i') }); // 'i' za case-insensitive pretragu
        res.status(200).json(oglasi);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    getAll,
    getById,
    add,
    search
}