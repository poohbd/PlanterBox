import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import colors from '../assets/colors/colors';

export default function FlatButtonReg({text, onPress}) {
    return (
      <TouchableOpacity style={styles2.button} onPress={onPress}>
        <View>
          <Text style={styles2.buttonText}>{text}</Text>
        </View>
      </TouchableOpacity>
    );
  }
  
  const styles2 = StyleSheet.create({
    button: {
      paddingVertical: 8,
      width: 80,
      backgroundColor: colors.newGreen2,
      borderRadius: 20,
      marginTop: 250,
      marginLeft: 230,
      alignSelf:'auto'
    },
    buttonText: {
      color: '#FAFAFA',
      textAlign: 'center',
      fontFamily: 'Mitr-Regular',
      fontSize: 13,
    },
  });
  
  