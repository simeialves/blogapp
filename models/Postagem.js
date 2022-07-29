const mongoose = require("mongoose")
const Schema = mongoose.Schema

const Postagem = new Schema({
    titulo: {
        type: String,
        requerid: true
    },
    slug: {
        type: String,
        requerid: true
    },
    descricao: {
        type: String,
        requerid: true
    },
    conteudo: {
        type: String,
        requerid: true
    },
    categoria: {
        type: Schema.Types.ObjectId,
        ref: "categorias",
        requerid: true
    },
    data: {
        type: Date,
        default: Date.now()
    }
})

mongoose.model("postagens", Postagem)