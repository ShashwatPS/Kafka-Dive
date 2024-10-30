import { Kafka } from 'kafkajs';

const kafka = new Kafka({
    clientId: 'my-app',
    brokers: ['localhost:9092', 'kafka2:9092']
})

const producer = kafka.producer()

const run = async () => {
    await producer.connect()
    await producer.send({
        topic: 'payment-done',
        messages: [{
            value: "hi there",
            key: "user1"
        }],
    })
}

run().catch(console.error)