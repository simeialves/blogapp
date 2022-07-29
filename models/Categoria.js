const mongoose = require("mongoose")
const Schema = mongoose.Schema

const Categoria = new Schema({
    nome: {
        type: String,
        requerid: true
    },
    slug: {
        type: String,
        requerid: true
    },
    date: {
        type: Date,
        defaut: Date.now()
    }
})

mongoose.model("categorias", Categoria)