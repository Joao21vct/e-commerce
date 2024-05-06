const enviarCobrancaAoKafka = require('../services/pagamento');
const verificarQuantidadeNoBanco = require('../services/estoque').verificarQuantidadeNoBanco;
const removerQuantidadeDoBanco = require('../services/estoque').removerQuantidadeDoBanco;

const confirmacaoPagamentoConsumer = require('../index').confirmacaoPagamentoConsumer;

confirmacaoPagamentoConsumer.on('message', async function(message) {
  const pagamento = JSON.parse(message.value);

  console.log('Recebida confirmação de pagamento:', pagamento);

  const quantidade = await verificarQuantidadeNoBanco(pagamento.idProduto);

  if (quantidade !== null && quantidade >= pagamento.quantidade) {
    enviarCobrancaAoKafka({ ...pagamento, codigoRastreio });
    await removerQuantidadeDoBanco(pagamento.idProduto, pagamento.quantidade);
    buscarCodigoRatreio()
  } else {
    console.error('Quantidade insuficiente no estoque.');
  }

});

