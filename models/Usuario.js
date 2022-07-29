const mongoose = require("mongoose")
const Schema = mongoose.Schema

const Usuario = new Schema({
    nome: {
        type: String,
        requerid: true
    },
    email: {
        type: String,
        requerid: true
    },
    eAdmin:{
        type: Number,
        default: 0
    },
    senha: {
        type: String,
        requerid: true
    },
    data: {
        type: Date,
        default: Date.now()
    }
})

mongoose.model("usuarios", Usuario)