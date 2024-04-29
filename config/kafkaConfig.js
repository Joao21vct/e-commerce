const { Kafka } = require('kafkajs');

const kafka = new Kafka({
  clientId: '',
  brokers: ['localhost:9092']
});

const kafkaProducer = kafka.producer();
const kafkaConsumer = kafka.consumer({ groupId: '' });

module.exports = { kafkaProducer, kafkaConsumer };
