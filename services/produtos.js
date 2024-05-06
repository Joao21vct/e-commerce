let produtos = [];

const adicionarProduto = (produto) => {
  produtos.push(produto);
};

module.exports = {
  adicionarProduto,
  produtos,
};
