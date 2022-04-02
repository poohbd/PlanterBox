import * as React from 'react';
import { View, Text, StyleSheet, Image,TouchableOpacity } from 'react-native';
import colors from '../assets/colors/colors';

export default Settings= ({navigation}) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={styles.header} >Settings Screen{'\n'}</Text>
          <Text style={styles.back} onPress={() => navigation.navigate('Menu')}>Back To ...</Text>
        </View>
    )
}

const styles = StyleSheet.create({
  header: {
    fontFamily:'Mitr-Medium',
    fontSize:23,
    color:colors.darkGray,
},
  back: {
    fontFamily: 'Mitr-Regular',
    fontSize: 23,
    lineHeight: 30,
    color: colors.newGreen2,
  }
})