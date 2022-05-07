import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Dimensions,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import colors from '../assets/colors/colors';
import DropDownPicker from 'react-native-dropdown-picker';
import WateringDropdown from './WateringDropdown';
import DateTimePicker from '@react-native-community/datetimepicker';
import OffWatering from './offwatering';
import TimeFormAuto from './timeformAuto';

export default function TimeForm({data, allsche, sensor2}) {
  console.log('TestAllsche', allsche);
  console.log('TEST DATA', data);
  // const {wateringschedule} = allsche;
  const [isPickerFirstShow, setIsPickerFirstShow] = React.useState(false);
  const [isPickerEndShow, setIsPickerEndShow] = React.useState(false);
  const [datefirst, setDateFirst] = React.useState(
    new Date(allsche.wateringschedule.time),
  );
  const [dateend, setDateEnd] = React.useState(new Date(Date.now()));
  const [duration, setDuration] = React.useState(
    '' + allsche.wateringschedule.duration,
  );
  // console.log("Test Duration");
  // console.log(duration);
  const splitlight = sensor2.split(',');

  const id = data.SettingsID;
  const showFirstTimePicker = () => {
    setIsPickerFirstShow(true);
  };
  const showEndTimePicker = () => {
    setIsPickerEndShow(true);
  };
  const onChangeFirst = (event, selectedDate) => {
    const currentDate = selectedDate;
    setIsPickerFirstShow(false);
    setDateFirst(currentDate);
    console.log('This is duration: ' + duration);
  };
  const onChangeEnd = (event, selectedDate) => {
    const currentDate = selectedDate;
    setIsPickerEndShow(false);
    setDateEnd(currentDate);
  };
  const changeMode = async valueplan => {
    const response = await fetch(
      'https://my-app-dpydq.ondigitalocean.app/planterbox/settings/updateBoxSettings',
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          id: id,
          wateringMode: valueplan,
        }),
      },
    );
  };
  const [openplan, setOpenplan] = React.useState(false);
  const [valueplan, setValuePlan] = React.useState(
    data.wateringMode.toUpperCase(),
  );
  const [items, setItems] = React.useState([
    {
      label: (
        <Text
          style={{fontFamily: 'Mitr-Regular', color: colors.newGreen2}}
          onPress={() => {
            changeMode('Schedule');
            setValuePlan('SCHEDULE');
            setOpenplan(false);
          }}>
          SCHEDULE
        </Text>
      ),
      value: 'SCHEDULE',
    },
    {
      label: (
        <Text
          style={{fontFamily: 'Mitr-Regular', color: colors.newGreen2}}
          onPress={() => {
            changeMode('Auto');
            setValuePlan('AUTO');
            setOpenplan(false);
          }}>
          AUTO
        </Text>
      ),
      value: 'AUTO',
    },
    {
      label: (
        <Text
          style={{fontFamily: 'Mitr-Regular', color: colors.newGreen2}}
          onPress={() => {
            changeMode('Manual');
            setValuePlan('MANUAL');
            setOpenplan(false);
          }}>
          OFF
        </Text>
      ),
      value: 'MANUAL',
    },
  ]);
  console.log(valueplan);
  const changeTime = async () => {
    const response = await fetch(
      'https://my-app-dpydq.ondigitalocean.app/planterbox/settings/updateWateringSchedule',
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          sid: allsche.wateringschedule.WSID,
          time: datefirst,
          duration: parseInt(duration),
        }),
      },
    );
  };
  return (
    <View style={styles.bigCard}>
      <View>
        <View style={styles.circleCard}>
          <Text style={styles.circleCardText}>
            {parseInt(splitlight[1]) + '%'}
          </Text>
        </View>
        <Text style={styles.cardWatering}>WATERING</Text>
        <WateringDropdown
          zIndex={300}
          elevation={300}
          openplan={openplan}
          setOpenplan={setOpenplan}
          valueplan={valueplan}
          setValuePlan={setValuePlan}
          items={items}
          setItems={setItems}
        />
        {valueplan === 'SCHEDULE' && (
          <View style={styles.mediumCard}>
            <Text style={styles.cardContent}> FROM </Text>
            <View style={styles.smallCard}>
              {/* <View>
            <TextInput style={styles.textTime} onChangeText={(duration) => setDuration(parseInt(duration))} defaultValue={allsche.wateringschedule[0].duration}/>
          </View> */}
              <TouchableOpacity onPress={showFirstTimePicker}>
                <Text style={styles.textTime}>
                  {datefirst.toLocaleTimeString([], {
                    hour: '2-digit',
                    minute: '2-digit',
                    hour12: true,
                  })}
                </Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.cardContent}> DURATION </Text>
            {/* <View style={styles.smallCard2}>
              <TouchableOpacity onPress={showEndTimePicker}>
                <Text style={styles.textTime}>
                  {dateend.toLocaleTimeString([], {
                    hour: '2-digit',
                    minute: '2-digit',
                    hour12: true,
                  })}
                </Text>
              </TouchableOpacity>
            </View> */}
            <TextInput
              style={styles.smallCard2}
              onChangeText={setDuration}
              value={duration}
            />

            
            <TouchableOpacity
              style={styles.saveButton}
              onPress={() => {
                console.log('datefirst: ' + datefirst);
                // console.log('dateend: ' + dateend);
                console.log('duration: ', duration);
                changeTime();
              }}>
              <View>
                <Text style={styles.textTime}>SAVE</Text>
              </View>
            </TouchableOpacity>
            <Text style={styles.cardContent}> </Text>
          </View>
        )}
        {valueplan === 'AUTO' && <TimeFormAuto data={data} />}
        {valueplan === 'MANUAL' && <OffWatering />}
        <Text style={styles.smText}>Soil Moisture</Text>
        {/* <Image
          style={styles.image}
          source={require('../assets/images/Waterlogo.png')}
        /> */}
        {isPickerFirstShow && (
          <DateTimePicker
            testID="dateTimePicker1"
            value={datefirst}
            display="clock"
            mode="time"
            is24Hour={false}
            onChange={onChangeFirst}
            accentColor={colors.newGreen2}
            style={{marginRight: 110, marginTop: -20}}
          />
        )}
        {isPickerEndShow && (
          <DateTimePicker
            testID="dateTimePicker2"
            value={dateend}
            display="compact"
            mode="time"
            is24Hour={false}
            onChange={onChangeEnd}
            accentColor={colors.newGreen2}
            style={{marginRight: 30, marginTop: 45}}
          />
        )}
      </View>
    </View>
  );
}
const deviceWidth = Dimensions.get('screen').width;
const deviceHeight = Dimensions.get('screen').height;

const styles = StyleSheet.create({
  bigCard: {
    width: 350,
    height: 110,
    borderRadius: 30,
    backgroundColor: '#FFFFFF',
    fontFamily: 'Mitr-Regular',
    fontSize: 23,
    paddingTop: 50,
    paddingLeft: 60,
    alignSelf: 'center',
    marginTop: 20,
    zIndex: 102,
    marginBottom: 0,
  },
  mediumCard: {
    width: 240,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#436E71',
    fontFamily: 'Mitr-Regular',
    fontSize: 23,
    paddingTop: 10,
    alignSelf: 'center',
    display: 'flex',
    flexDirection: 'row',
    marginTop: 10,
    marginLeft: 20,
    zIndex: 1,
  },
  smallCard: {
    width: 60,
    height: 20,
    borderRadius: 30,
    backgroundColor: 'white',
    fontFamily: 'Mitr-Regular',
    fontSize: 10,
    paddingTop: -3,
    // paddingLeft: 10,
    zIndex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  smallCard2: {
    width: 30,
    height: 20,
    borderRadius: 30,
    backgroundColor: 'white',
    fontFamily: 'Mitr-Regular',
    fontSize: 10,
    paddingTop: 0,
    color: colors.newGreen2,
    // paddingLeft: 10,
    zIndex: 1,
    // textAlign: 'center',
    // justifyContent: 'center',
    // alignItems: 'center',
    // textAlign: 'center',
  },
  // cardContent: {
  //   textAlign: 'center',
  //   fontFamily: 'Mitr-Regular',
  //   fontSize: 10,
  //   color: 'white',
  // },
  cardContent: {
    textAlign: 'center',
    fontFamily: 'Mitr-Regular',
    fontSize: 10,
    color: 'white',
    paddingTop: 2,
  },
  saveButton: {
    width: 40,
    height: 20,
    borderRadius: 30,
    backgroundColor: 'white',
    fontFamily: 'Mitr-Regular',
    fontSize: 10,
    paddingTop: -3,
    // paddingLeft: 10,
    zIndex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textTime: {
    color: colors.newGreen2,
    fontSize: 10,
    fontFamily: 'Mitr-Regular',
    textAlign: 'center',
    justifyContent: 'space-between',
  },
  cardWatering: {
    fontFamily: 'Mitr-Regular',
    fontSize: 18,
    color: '#436E71',
    marginTop: -70,
    marginLeft: 50,
  },
  circleCard: {
    width: 70,
    height: 70,
    borderRadius: 70,
    backgroundColor: '#436E71',
    marginTop: -37,
    marginLeft: -40,
  },
  circleCardText: {
    fontFamily: 'Mitr-Regular',
    fontSize: 30,
    paddingTop: 10,
    paddingLeft: 5,
    color: '#FAFAFA',
  },
  image: {
    marginTop: -80,
    marginLeft: 259,
    marginBottom:20
  },
  smText: {
    position: 'absolute',
    fontFamily: 'Mitr-Regular',
    fontSize: 13,
    color: '#436E71',
    marginLeft: -37,
    marginTop: 40,
    lineHeight: 13,
    // color:"red"
    //paddingTop:-
  },
});
