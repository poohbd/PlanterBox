import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import colors from '../assets/colors/colors';
import DropDownPicker from 'react-native-dropdown-picker';
import LightDropdown from './LightDropdown';
import Slider from '@react-native-community/slider';
import DateTimePicker from '@react-native-community/datetimepicker';
import OffLight from './offlight';
import LightFormAuto from './lightformAuto';
export default function LightForm({data, sensor1}) {
  console.log(data);
  const [power, setPower] = React.useState(data.lightPower);
  const [isPickerFirstShow, setIsPickerFirstShow] = React.useState(false);
  const [isPickerEndShow, setIsPickerEndShow] = React.useState(false);
  const [datefirst, setDateFirst] = React.useState(
    new Date(data.lightStartTime),
  );
  const [dateend, setDateEnd] = React.useState(new Date(data.lightStopTime));
  const id = data.SettingsID;
  const [openplan, setOpenplan] = React.useState(false);
  const [valueplan, setValuePlan] = React.useState(
    data.lightingMode.toUpperCase(),
  );
  const splitlight = sensor1.split(',');
  const showFirstTimePicker = () => {
    setIsPickerFirstShow(true);
  };
  const showEndTimePicker = () => {
    setIsPickerEndShow(true);
  };
  const onChangeFirst = (event, selectedDate, datefirst, dateend) => {
    const currentDate = selectedDate;
    setIsPickerFirstShow(false);
    setDateFirst(new Date(currentDate));
  };
  const onChangeEnd = (event, selectedDate, datefirst, dateend) => {
    const currentDate = selectedDate;
    setIsPickerEndShow(false);
    setDateEnd(new Date(currentDate));
  };

  const changeMode = async valueplan => {
    const response = await fetch(
      'http://localhost:3000/planterbox/settings/updateBoxSettings',
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          id: id,
          lightingMode: valueplan,
        }),
      },
    );
  };
  const changeTime = async () => {
    const response = await fetch(
      'http://localhost:3000/planterbox/settings/updateBoxSettings',
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          id: id,
          lightStartTime: datefirst,
          lightStopTime: dateend,
        }),
      },
    );
  };
  const changePower = async () => {
    const response = await fetch(
      'http://localhost:3000/planterbox/settings/updateBoxSettings',
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          id: id,
          lightPower: parseInt(power),
        }),
      },
    );
  };

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

  // useEffect(() => {
  //   changeMode();
  // });
  return (
    <View style={styles.bigCard}>
      <View style={styles.circleCard}>
        <Text style={styles.circleCardText}>{parseInt(splitlight[1])}</Text>
      </View>
      <Text style={styles.cardWatering}>LIGHT EXPOSURE</Text>
      <LightDropdown
        zIndex={300}
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
            <TouchableOpacity onPress={showFirstTimePicker}>
              <Text style={styles.textTime}>
                {datefirst.toLocaleTimeString('en-TH', {
                  hour: '2-digit',
                  minute: '2-digit',
                  hour12: true,
                })}
              </Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.cardContent}> TO </Text>
          <View style={styles.smallCard}>
            <TouchableOpacity onPress={showEndTimePicker}>
              <Text style={styles.textTime}>
                {dateend.toLocaleTimeString('en-TH', {
                  hour: '2-digit',
                  minute: '2-digit',
                  hour12: true,
                })}
              </Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.cardContent}> </Text>
          <TouchableOpacity
            style={styles.saveButton}
            onPress={() => {
              console.log('datefirst: ' + datefirst);
              console.log('dateend: ' + dateend);
              changeTime();
            }}>
            <View>
              <Text style={styles.textTime}>SAVE</Text>
            </View>
          </TouchableOpacity>
          <Text style={styles.cardContent}> </Text>
        </View>
      )}
      {valueplan === 'AUTO' && <LightFormAuto data={data} />}
      {valueplan === 'MANUAL' && <OffLight lightStatus={data.lightStatus} />}

      <Text style={styles.smText}>{parseInt(splitlight[1])+" LUX"}</Text>
      {data.lightStatus === 'ON' && (
        <Image
          style={styles.image}
          source={require('../assets/images/lightlogo.png')}
        />
      )}
      {data.lightStatus === 'OFF' && (
        <Image
          style={styles.image}
          source={require('../assets/images/light-off.png')}
        />
      )}
      <Slider
        style={{width: 120, height: 40, zIndex: 99}}
        minimumValue={0}
        maximumValue={100}
        minimumTrackTintColor="#C8A805"
        maximumTrackTintColor="#000000"
        value={power}
        onValueChange={setPower}
        onSlidingComplete={changePower}
        marginTop={6}
        marginLeft={45}
      />
      {isPickerFirstShow && (
        <DateTimePicker
          testID="dateTimePicker1"
          value={datefirst}
          display="compact"
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
          style={{marginRight: 30, marginTop: 40}}
        />
      )}
    </View>
  );
}
const deviceWidth = Dimensions.get('screen').width;
const deviceHeight = Dimensions.get('screen').height;

const styles = StyleSheet.create({
  saveButton: {
    width: 50,
    height: 20,
    borderRadius: 30,
    backgroundColor: 'white',
    fontFamily: 'Mitr-Regular',
    fontSize: 10,
    paddingTop: -3,
    paddingLeft: 10,
    zIndex: 1,
  },
  bigCard: {
    width: 350,
    height: 150,
    borderRadius: 30,
    backgroundColor: '#FFFFFF',
    fontFamily: 'Mitr-Regular',
    fontSize: 23,
    paddingTop: 50,
    paddingLeft: 60,
    alignSelf: 'center',
    marginTop: 10,
    zIndex: 101,
  },
  mediumCard: {
    //width: 200,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#C8A805',
    fontFamily: 'Mitr-Regular',
    fontSize: 23,
    paddingTop: 10,
    alignSelf: 'center',
    display: 'flex',
    flexDirection: 'row',
    marginTop: 20,
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
    paddingLeft: 10,
    zIndex: 1,
  },
  cardContent: {
    textAlign: 'center',
    fontFamily: 'Mitr-Regular',
    fontSize: 10,
    color: 'white',
  },
  cardContent: {
    textAlign: 'center',
    fontFamily: 'Mitr-Regular',
    fontSize: 10,
    color: 'white',
    paddingTop: 5,
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
    color: '#C8A805',
    marginTop: -70,
    marginLeft: 50,
  },
  circleCard: {
    width: 70,
    height: 70,
    borderRadius: 70,
    backgroundColor: '#C8A805',
    marginTop: -37,
    marginLeft: -40,
  },
  circleCardText: {
    fontFamily: 'Mitr-Regular',
    fontSize: 30,
    paddingTop: 10,
    paddingLeft: 5,
  },
  image: {
    marginTop: -110,
    marginLeft: 259,
  },
  smText: {
    fontFamily: 'Mitr-Regular',
    fontSize: 10,
    color: '#C8A805',
    marginLeft: -37,
    marginTop: -25,
  },
});
