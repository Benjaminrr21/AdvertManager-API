const mongoose = require('mongoose')

const OglasSchema = mongoose.Schema({
    id:String,
    naslov:String,
    opis:String,
    detaljan_opis:String,
    autor:String,
    datum:String
})

const Oglas = mongoose.model("Oglas",OglasSchema)
module.exports = Oglas