const kafkaClient = require('../config/kafkaConfig');
const kafka = require('kafka-node');

const producer = new kafka.Producer(kafkaClient);

function enviarCobrancaAoKafka(cobranca) {
  const payloads = [{ topic: 'req_cobra', messages: JSON.stringify(cobranca) }];
  producer.send(payloads, (err, data) => {
    if (err) {
      console.error('Erro ao enviar cobrança ao Kafka:', err);
    } else {
      console.log('Cobrança enviada com sucesso ao Kafka:', data);
    }
  });
}

module.exports = enviarCobrancaAoKafka;
