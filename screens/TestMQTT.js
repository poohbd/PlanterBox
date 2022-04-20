import * as React from 'react';
import {View, Text} from 'react-native';
import MQTT from 'sp-react-native-mqtt';

export default TestMQTT = () => {
  MQTT.createClient({
    uri: 'mqtts://66d6b91771ff4fc7bb664c04cc3e7fbb.s2.eu.hivemq.cloud:8883',
    clientId: 'clientId-YKICzmBta3',
    user: 'ICERUS',
    pass: 'Projectyear3',
    auth: true,
  })
    .then(function (client) {
      client.on('closed', function () {
        console.log('mqtt.event.closed');
      });

      client.on('error', function (msg) {
        console.log('mqtt.event.error', msg);
      });

      client.on('message', function (msg) {
        console.log('mqtt.event.message', msg);
      });

      client.on('connect', function () {
        console.log('connected');
        client.subscribe('sensor2', 2);
        // client.publish('testtopic/1', 'test', 0, false);
      });

      client.connect();
    })
    .catch(function (err) {
      console.log(err);
    });
  return (
    <View>
      <Text>Test MQTT</Text>
    </View>
  );
};
