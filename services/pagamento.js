const kafkaClient = require('../config/kafkaConfig');
const kafka = require('kafka-node');

const producer = new kafka.Producer(kafkaClient);

function enviarCobrancaAoKafka(cobranca) {

}

function buscarCodigoRastreio() {
    
}

module.exports = {
    enviarCobrancaAoKafka,
    buscarCodigoRastreio
};
