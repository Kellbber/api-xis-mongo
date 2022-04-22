const mongoose = require('mongoose');

const xisSchema = new mongoose.Schema({
    sabor:{
        type: String,
        require: true,
    },
    descricao:{
        type: String,
        require: true,
    },
    foto:{
        type: String,
        require: true,
    },
    preco:{
        type: Number,
        require: true,
    },
});

const Xis = mongoose.model('xis', xisSchema);

module.exports = Xis;
