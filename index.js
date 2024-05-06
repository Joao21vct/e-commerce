const express = require('express');
const { adicionarProduto, produtos } = require('./services/produto');
const { verificarEstoque } = require('./services/estoque');

const app = express();
app.use(express.json());

app.post('/produto', (req, res) => {
  const produto = req.body;
  adicionarProduto(produto);

  verificarEstoque(produtos);

  res.send('Produto movido para confirmação!');
});

app.get('/produtos', (req, res) => {
  res.json(produtos);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
