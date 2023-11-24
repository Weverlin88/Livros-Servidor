const mongoose = require('mongoose');

const banco = mongoose.createConnection('mongodb://localhost/livraria', {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

module.exports = banco;
const Livro = banco.model('Livro', {
  titulo: {
    type: String,
    required: true,
    },
    autor: {
      type: String,
      required: true,
      },
      genero: {
        type: String,
        required: true,
        },
});