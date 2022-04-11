import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
  ImageBackground,
  SafeAreaView,
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import colors from '../assets/colors/colors';

export default function WateringDropdown() {
  const [openplan, setOpenplan] = React.useState(false);
  const [valueplan, setValuePlan] = React.useState('SCHEDULE ');
  const [items, setItems] = React.useState([
    {
      label: (
        <Text style={{fontFamily: 'Mitr-Regular', color: colors.newGreen2}}>
          SCHEDULE
        </Text>
      ),
      value: 'SCHEDULE',
    },
    {
      label: (
        <Text style={{fontFamily: 'Mitr-Regular', color: colors.newGreen2}}>
          AUTO
        </Text>
      ),
      value: 'AUTO',
    },
    {
      label: (
        <Text style={{fontFamily: 'Mitr-Regular', color: colors.newGreen2}}>
          OFF
        </Text>
      ),
      value: 'OFF',
    },
  ]);
  return (
    <DropDownPicker
      open={openplan}
      value={valueplan}
      items={items}
      setOpen={setOpenplan}
      setValue={setValuePlan}
      setItems={setItems}
      style={styles.dropdownSchedule}
      listMode="SCROLLVIEW"
      dropDownContainerStyle={{
        borderColor: colors.newGreen2,
        width: 103,
        marginTop: -27,
        marginLeft: 145,
        fontFamily: 'Mitr-Regular',
        fontSize: 10,
      }}
      placeholder={valueplan}
      placeholderStyle={{
        color: colors.newGreen2,
        fontSize: 10,
        fontFamily: 'Mitr-Regular',
        textAlign: 'center',
        justifyContent: 'space-between',
        alignSelf: 'center',
      }}
      listItemLabelStyle={{
        color: colors.newGreen2,
        textAlign: 'center',
        fontSize: 10,
        fontFamily: 'Mitr-Regular',
      }}
      listParentContainerStyle={{
        color: colors.newGreen2,
        textAlign: 'center',
        fontSize: 10,
        fontFamily: 'Mitr-Regular',
      }}
      containerStyle={{
        color: colors.newGreen2,
        textAlign: 'center',
        fontSize: 10,
        fontFamily: 'Mitr-Regular',
      }}
      labelStyle={{
        color: colors.newGreen2,
        textAlign: 'center',
        fontSize: 10,
        fontFamily: 'Mitr-Regular',
      }}
      zIndex={99}
    />
  );
}

const styles = StyleSheet.create({
  dropdownSchedule: {
    width: 103,
    height: 25,
    marginBottom: 0,
    backgroundColor: '#FFFFFF',
    borderRadius: 25,
    borderColor: '#FFFFFF',
    fontFamily: 'Mitr-Regular',
    marginTop: -27,
    marginLeft: 145,
  },
});
