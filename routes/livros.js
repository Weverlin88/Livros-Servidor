const express = require('express');
const router = express.Router();
const livroDao = require('../modelo/livro-dao');

router.get('/', async (req, res) => {
  const livros = await livroDao.obterLivros();
  res.json(livros);
});

router.post('/', async (req, res) => {
  const novoLivro = req.body;
  try {
    await livroDao.incluir(novoLivro);
    res.json({ mensagem: 'Livro incluído com sucesso.' });
  } catch (error) {
    res.status(500).json({ mensagem: 'Erro ao incluir o livro.' });
  }
});

router.delete('/:codigo', async (req, res) => {
  const codigoLivro = req.params.codigo;
  try {
    await livroDao.excluir(codigoLivro);
    res.json({ mensagem: 'Livro excluído com sucesso.' });
  } catch (error) {
    res.status(500).json({ mensagem: 'Erro ao excluir o livro.' });
  }
});

module.exports = router;
