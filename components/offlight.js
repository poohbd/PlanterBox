import React from 'react';
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

export default OffLight = ({lightStatus}) => {
  return (
    <View style={styles.mediumCard}>
      <Text style={styles.cardContent}> LED STATUS </Text>
      <View style={styles.smallCard}>
        <TouchableOpacity disabled>
          <Text style={styles.textStatus}>{lightStatus}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mediumCard: {
    width: 200,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#C8A805',
    fontFamily: 'Mitr-Regular',
    fontSize: 23,
    // paddingTop: 10,
    alignSelf: 'center',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 20,
    marginLeft: 20,
    zIndex: 1,
  },
  smallCard: {
    width: 90,
    height: 25,
    borderRadius: 30,
    alignItems: 'center',
    backgroundColor: 'white',
    fontFamily: 'Mitr-Regular',
    // paddingLeft: 10,
    marginLeft: 10,
    zIndex: 1,
  },
  cardContent: {
    // textAlign: 'center',
    fontFamily: 'Mitr-Regular',
    fontSize: 11,
    color: 'white',
  },
  textStatus: {
    color: colors.newGreen2,
    fontSize: 12,
    fontFamily: 'Mitr-Regular',
    textAlign: 'center',
  },
});
