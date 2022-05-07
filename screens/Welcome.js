import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import colors from '../assets/colors/colors';
import FlatButton from '../components/button';
import PushNotificationIOS from "@react-native-community/push-notification-ios";
import PushNotification from "react-native-push-notification";

export default Welcome = ({navigation}) => {
  // PushNotification.configure({
  //   // (optional) Called when Token is generated (iOS and Android)
  //   onRegister: function (token) {
  //     console.log("TOKEN:", token);
  //   },
  //   onNotification: function (notification) {
  //     console.log("NOTIFICATION:", notification);
  //     //notification.finish(PushNotificationIOS.FetchResult.NoData);
  //   },
  //   permissions: {
  //     alert: true,
  //     badge: true,
  //     sound: true,
  //   },
  //   popInitialNotification: true,
  //   requestPermissions: true,
  // });
  

  const testpush = () =>{
    PushNotification.localNotification({
      channelId: "channel-id",
      title: "My Notification Title", // (optional)
      message: "My Notification Message", // (required)
    });
  }

  const testpush2 = () =>{
  PushNotification.localNotificationSchedule({
    //... You can use all the options from localNotifications
    channelId: "channel-id",
    title: "Pesticide time",
    message: "My Notification Message", // (required)
    date: new Date("APRIL 28, 2022 23:22:00"), // in 60 secs
    });
  }
  return (
    <View>
      <View style={{top: 0, left: 0}}>
        <Image source={require('../assets/images/uppercircle.png')}></Image>
      </View>
      {/* <FlatButton text="TEST" onPress={() => testpush2()} /> */}
      <View style={{alignItems: 'center', top: 225}}>
        <Image style={{width: 85,height: 100}} source={require('../assets/images/tree.png')}></Image>
        <Text style={styles.intro}>{'\n'}WELCOME TO FARM-O-MATIC</Text>
        <Text style={styles.intro}>
          A PLATFORM THAT WILL MAKE PLANTING EASIER
        </Text>
        <View style={styles.space} />
        <FlatButton text="LOGIN" onPress={() => navigation.navigate('Login')} />
        <FlatButton
          text="SIGN UP"
          onPress={() => navigation.navigate('Userregister')}
        />
      </View>
      <View style={{position: 'absolute', top: 500, right: 0}}>
        <Image source={require('../assets/images/lowercircle.png')}></Image>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
  intro: {
    fontFamily: 'Mitr-Regular',
    fontSize: 13,
    lineHeight: 30,
    color: colors.darkGray,
  },
  space: {
    width: 20,
    height: 30,
  },
});
