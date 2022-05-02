import * as React from 'react';
import {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
  ImageBackground,
  Button,
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import colors from '../assets/colors/colors';
import DateTimePicker from '@react-native-community/datetimepicker';
import PushNotificationIOS from "@react-native-community/push-notification-ios";
import PushNotification from "react-native-push-notification";
import axios from 'axios';

// calling example:
//     <DropDownTime type='FERTILIZER'/>
//     <DropDownTime type='PESTICIDE'/>

export default function DropDownTime({type,sid,sched99,pname}) {
  const schedson = sched99;
  const [openplan, setOpenplan] = React.useState(false);
  const [valueplan, setValuePlan] = React.useState('SCHEDULE');
  // const [fernoti, setFernoti] = React.useState('');
  // const [pesnoti, setPesnoti] = React.useState('');
  const [items, setItems] = React.useState([
    {label: 'EVERY DAY', value: '1'},
    {label: 'EVERY 2 DAYS', value: '2'},
    {label: 'EVERY 3 DAYS', value: '3'},
    {label: 'EVERY 4 DAYS', value: '4'},
  ]);

  //const [test, setTest] = Osche.fertilizerschedule.length === 0 ? React.useState('New schedhule') : React.useState('Old Schedule');
  const [isPickerShow, setIsPickerShow] = React.useState(false);
  const [date, setDate] = React.useState(new Date(sched99.fertilizerschedule.time));
  const showTimePicker = () => {
    setIsPickerShow(true);
  };
  
  // const postFer = async () => {
  //   try {
  //     const config = {
  //       method: 'POST',
  //       url: 'http://192.168.1.42:3000/planterbox/settings/addFertilizerSchedule',
  //       data: {
  //         id: sid,
  //         time: date,
  //         Interval: parseInt(valueplan),
  //       },
  //     };
  //     const setting = await axios
  //       .request(config)
  //       .then(res => setFernoti(res.data));
  //   } catch (error){
  //     alert(error.message);
  //   }
  // };

  const putFer = async () => {
    try {
      const config = {
        method: 'PUT',
        url: 'http://192.168.1.42:3000/planterbox/settings/updateFertilizerSchedule',
        data: {
          sid: schedson.fertilizerschedule.FSID,
          time: date,
          Interval: parseInt(valueplan),
        },
      };
      const setting = await axios
        .request(config)
        // .then(res => setFernoti(res.data));
    } catch (error){
      alert(error.message);
    }
  };

  const putPes = async () => {
    try {
      const config = {
        method: 'PUT',
        url: 'http://192.168.1.42:3000/planterbox/settings/updatePesticideSchedule',
        data: {
          sid: schedson.pesticideschedule.PSID,
          time: date,
          Interval: parseInt(valueplan),
        },
      };
      const setting = await axios
        .request(config)
        // .then(res => setPesnoti(res.data));
    } catch (error){
      alert(error.message);
    }
  };

  // const postPes = async () => {
  //   try {
  //     const config = {
  //       method: 'POST',
  //       url: 'http://192.168.1.42:3000/planterbox/settings/addPesticideSchedule',
  //       data: {
  //         id: sid,
  //         time: date,
  //         Interval: parseInt(valueplan),
  //       },
  //     };
  //     const setting = await axios
  //       .request(config)
  //       .then(res => setPesnoti(res.data));
  //   } catch (error){
  //     alert(error.message);
  //   }
  // };
  // const [sche, setSche] = useState([]);
  // const getSchedule = async (sid) => {
  //   const source = axios.CancelToken.source();
  //   const url = "http://192.168.1.42:3000/pbsetting/"+sid+"/schedules";
  //   try {
  //     const response = await axios.get(url, {cancelToken: source.token});
  //     if (response.status === 200) {
  //       // response.data.map((box)=>fetchBoxSetting(box.boxID,settings));
  //       // response.data.forEach(element => {
  //       //   console.log("This is data : "+element);
  //       // });
  //       setSche(response.data);
  //       // response.data.map((box)=>console.log(fetchBoxSetting(box.boxID)));
  //       return;
  //     } else {
  //       throw new Error('Failed to Get schedule List');
  //     }
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }
  
  
  //getSchedule(sid);
   

  const scase = (type) =>{
    switch (type) {
      case "FERTILIZER":
        // if (sche.fertilizerschedule.length === 1) {
          putFer();
        //   console.log('This is fertime :'+fernoti.time);
        // } else if (sche.fertilizerschedule.length === 0){
        //   postFer();
        //   console.log('This is fertime :'+fernoti.time);
        // }
        return
      case "PESTICIDE":
        putPes();
        // if (sche.pesticideschedule.length === 1) {
          // putPes();
        //   console.log('This is fertime :'+fernoti.time);
        // } else if(sche.pesticideschedule.length === 0){
        //   postPes();
        //   console.log('This is pestime :'+pesnoti.time);
        // }
        return
    }
  }

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setIsPickerShow(false);
    setDate(currentDate);
    getSchedule(sid);
  };

  defineType = type => {
    switch (type) {
      case 'FERTILIZERBIGCARD':
        console.log(type);
        return styles.fertilizerBigCard;
      case 'PESTICIDEBIGCARD':
        console.log(type);
        return styles.pesticideBigCard;
      case 'FERTILIZERCARD':
        console.log(type);
        return styles.fertilizerSmallCard;
      case 'FERTILIZER_TITLE':
        console.log(type);
        return styles.fertilizerTitle;
      case 'PESTICIDECARD':
        console.log(type);
        return styles.pesticideSmallCard;
      case 'PESTICIDE_TITLE':
        console.log(type);
        return styles.pesticideTitle;
      case 'FERTILIZER_BELL':
        console.log(type);
        return styles.fertilizerBell;
      case 'PESTICIDE_BELL':
        console.log(type);
        return styles.pesticideBell;
    }
  };

  // pathMessage = tt => {
  //   switch (tt) {
  //     case "FERTILIZER":
  //       return "Don't forget to add fertilizer to your "+pname ;
  //     case "PESTICIDE":
  //       return "Don't forget to add pesticide to your "+pname;
  //   }
  // };

  const testpush2 = () =>{
    PushNotification.localNotificationSchedule({
      //... You can use all the options from localNotifications
      channelId: "testpush2",
      title: type + " time!!",
      message: "Don't forget to add "+type+" to your "+pname+"!", // (required)
      date: new Date(date.toLocaleString()), // in 60 secs
      });
  }
  return (
    <View style={defineType(type + 'BIGCARD')}>
      <View style={styles.cardHeader}>
        <Text style={defineType(type + '_TITLE')}>{type}</Text>
        <TouchableOpacity onPress={() => {
          testpush2();
          console.log("Test sched");
          console.log(schedson);
          scase(type);
        }}>
          <View>
            <Image
              style={defineType(type + '_BELL')}
              source={require('../assets/images/notificationbell.png')}
            />
          </View>
        </TouchableOpacity>
      </View>
      <View style={defineType(type + 'CARD')}>
        <DropDownPicker
          open={openplan}
          value={valueplan}
          items={items}
          setOpen={setOpenplan}
          setValue={setValuePlan}
          style={styles.dropdownSchedule}
          listMode="SCROLLVIEW"
          dropDownContainerStyle={{
            borderColor: colors.newGreen2,
            width: 120,
            marginLeft: 7.5,
          }}
          placeholder={valueplan}
          placeholderStyle={{
            color: colors.newGreen2,
            fontSize: 9,
            fontFamily: 'Mitr-Regular',
            textAlign: 'center',
            justifyContent: 'space-between',
          }}
          labelStyle={{
            fontFamily: 'Mitr-Regular',
            color: colors.newGreen2,
            textAlign: 'center',
            fontSize: 10,
            justifyContent: 'space-between',
          }}
          listItemLabelStyle={{
            color: colors.newGreen2,
            textAlign: 'center',
            fontSize: 10,
            fontFamily: 'Mitr-Regular',
          }}
          selectedItemLabelStyle={{
            fontWeight: 'bold',
          }}
          zIndex={99}
        />
        <TouchableOpacity style={styles.timeInput} onPress={showTimePicker}>
          <Text style={styles.textTime}>
            {date.toLocaleTimeString([], {
              hour: '2-digit',
              minute: '2-digit',
              hour12: true,
            })}
          </Text>
        </TouchableOpacity>
        <Image
          style={{alignSelf: 'center', marginLeft: 5}}
          source={require('../assets/images/myplantclock.png')}
        />
      </View>
      {isPickerShow && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          display= 'clock'
          mode="time"
          is24Hour={false}
          onChange={onChange}
          //accentColor={colors.newGreen2}
          //style={{marginRight: 100, marginTop: -70}}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  fertilizerBigCard: {
    width: 350,
    fontFamily: 'Mitr-Regular',
    fontSize: 23,
    height: 100,
    backgroundColor: '#FFFFFF',
    borderRadius: 25,
    shadowColor: colors.lightGray,
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 1,
    shadowRadius: 8,
    marginTop: 10,
    marginBottom: 6,
    marginLeft: 16,
    marginRight: 16,
    zIndex: 100,
  },
  pesticideBigCard: {
    width: 350,
    fontFamily: 'Mitr-Regular',
    fontSize: 23,
    height: 100,
    backgroundColor: '#FFFFFF',
    borderRadius: 25,
    shadowColor: colors.lightGray,
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 1,
    shadowRadius: 8,
    marginTop: 10,
    marginBottom: 6,
    marginLeft: 16,
    marginRight: 16,
    zIndex: 99,
  },
  cardHeader: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 15,
    zIndex: -1,
  },
  fertilizerSmallCard: {
    backgroundColor: colors.lightGray,
    borderRadius: 25,
    height: 40,
    width: 290,
    marginLeft: 15,
    flexDirection: 'row',
    zIndex: -1,
    // justifyContent:'flex-start'
  },
  fertilizerTitle: {
    fontFamily: 'Mitr-Regular',
    color: colors.lightGray,
    marginBottom: 5,
    marginLeft: 30,
    fontSize: 15,
  },
  fertilizerBell: {
    justifyContent: 'center',
    marginLeft: 215,
  },
  pesticideSmallCard: {
    backgroundColor: colors.brown,
    borderRadius: 25,
    height: 40,
    width: 290,
    marginLeft: 15,
    flexDirection: 'row',
    zIndex: -1,
  },
  pesticideTitle: {
    fontFamily: 'Mitr-Regular',
    color: colors.brown,
    marginBottom: 5,
    marginLeft: 30,
    fontSize: 15,
  },
  pesticideBell: {
    justifyContent: 'center',
    marginLeft: 222,
  },
  dropdownSchedule: {
    width: 120,
    height: 25,
    marginTop: 7.5,
    marginLeft: 7.5,
    backgroundColor: '#FFFFFF',
    borderRadius: 25,
    borderColor: '#FFFFFF',
    fontFamily: 'Mitr-Regular',
  },
  timeInput: {
    width: 120,
    height: 25,
    marginTop: 7.5,
    marginLeft: -155,
    backgroundColor: '#FFFFFF',
    borderRadius: 25,
    zIndex: 99,
  },
  textTime: {
    color: colors.newGreen2,
    fontSize: 14,
    fontFamily: 'Mitr-Regular',
    textAlign: 'center',
    justifyContent: 'space-between',
  },
});
