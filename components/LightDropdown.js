import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
  ImageBackground,
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import colors from '../assets/colors/colors';

export default function LightDropdown({openplan,setOpenplan,valueplan,setValuePlan,items,setItems}) {
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
        borderColor: '#C8A805',
        width: 103,
        marginTop: 10,
        marginLeft: 175,
        fontFamily: 'Mitr-Regular',
        fontSize: 10,
      }}
      placeholder={valueplan}
      placeholderStyle={{
        color: '#C8A805',
        fontSize: 10,
        fontFamily: 'Mitr-Regular',
        textAlign: 'center',
        justifyContent: 'space-between',
        alignSelf: 'center',
      }}
      listItemLabelStyle={{
        color: '#C8A805',
        textAlign: 'center',
        fontSize: 10,
        fontFamily: 'Mitr-Regular',
      }}
      listParentContainerStyle={{
        color: '#C8A805',
        textAlign: 'center',
        fontSize: 10,
        fontFamily: 'Mitr-Regular',
      }}
      containerStyle={{
        color: '#C8A805',
        textAlign: 'center',
        fontSize: 10,
        fontFamily: 'Mitr-Regular',
      }}
      labelStyle={{
        color: '#C8A805',
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
    marginTop: 10,
    marginLeft: 175,
  },
});
