package com.tryme.kafkamanager.msq;

import org.apache.kafka.clients.producer.*;
import org.apache.kafka.common.serialization.StringSerializer;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.Properties;

public class ProducerMsq<bootstrapServers> {

    final Logger logger = LoggerFactory.getLogger(ProducerMsq.class);


    public static void produce(String brokers, String topicName,String message)
    {
        // create Producer properties
        Properties properties = new Properties();
        brokers.trim();
        properties.setProperty("bootstrap.servers", brokers);
        properties.setProperty(ProducerConfig.KEY_SERIALIZER_CLASS_CONFIG, StringSerializer.class.getName());
        properties.setProperty(ProducerConfig.VALUE_SERIALIZER_CLASS_CONFIG, StringSerializer.class.getName());

        // create the producer
        KafkaProducer<String, String> producer = new KafkaProducer<String, String>(properties);
        topicName.trim();
        topicName.strip();

        try
        {
            producer.send(new ProducerRecord<String, String>(topicName, message)).get();
        }
        catch (Exception ex)
        {
            System.out.print(ex.getMessage());

        }
    }



}
