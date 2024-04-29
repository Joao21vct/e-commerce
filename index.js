const kafkaClient = require('./config/kafkaConfig');
const kafka = require('kafka-node');

const produtosConsumer = new kafka.Consumer(kafkaClient, [{ topic: '' }]);
const confirmacaoPagamentoConsumer = new kafka.Consumer(kafkaClient, [{ topic: '' }]);

module.exports = { produtosConsumer, confirmacaoPagamentoConsumer };
