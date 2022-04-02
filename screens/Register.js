import * as React from 'react';
import { View, Text, StyleSheet, Image,TouchableOpacity,Dimensions } from 'react-native';
import { Card } from 'react-native-paper';
import colors from '../assets/colors/colors';
import FlatButtonReg from '../components/buttonReg';

const deviceWidth = Dimensions.get('screen').width;
const deviceHeight = Dimensions.get('screen').height;

export default Register= ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={{ flex: 1, alignItems: 'center' }}>
                <Text style={styles.header} >PLANT REGISTER{'\n'}</Text>
            </View>
            <View style={styles.card}>
                <View style={styles.cardContent}>
                    <Text style={styles.cardContent}>DO YOU WANT TO </Text>
                    <Text style={styles.cardContent}>REGISTER THE PLANT{'\n'}</Text>
                    <TouchableOpacity style={styles.buttonContainer1} onPress={() => navigation.navigate('SerialNumber')}>
                      <View>
                        <Text style={styles.buttonText}>YES</Text>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonContainer2} onPress={() => navigation.navigate('Menu')}>
                      <View>
                        <Text style={styles.buttonText}>NO</Text>
                      </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center'
},
buttonContainer: {
    flex: 1,
    flexDirection: 'column',
},
  header: {
    fontFamily:'Mitr-Medium',
    fontSize:23,
    color:colors.newGreen1,
    marginTop:100,
},
  back: {
    fontFamily: 'Mitr-Regular',
    fontSize: 23,
    lineHeight: 30,
    color: colors.newGreen2,
  },
  card: {
    width: 300,
    height:150,
    borderRadius: 6,
    backgroundColor: '#CAD0D0',
    fontFamily: 'Mitr-Regular',
    fontSize: 23,
    padding: 10,
    alignSelf:'center',
    marginBottom: deviceHeight*0.4

  },
  cardContent: {
    textAlign: 'center',
    fontFamily: 'Mitr-Regular',
    fontSize: 16,
    lineHeight: 30,
    color: colors.darkGray,
  },
  image : {
    marginBottom: 20,
    alignSelf:'center',
  },
  space: {
      width: 20,
      height: 30,
  },
  buttonContainer1: {
    paddingVertical: 8,
    
    width: 80,
    backgroundColor: colors.newGreen2,
    borderRadius: 20,
    marginTop: deviceHeight*0,
    marginLeft: deviceWidth*0.07,
  },
  buttonContainer2: {
    paddingVertical: 8,
    width: 80,
    justifyContent: 'space-between',
    backgroundColor: colors.newGreen2,
    borderRadius: 20,
    marginTop: deviceHeight*-0.043,
    marginLeft: deviceWidth*0.45,
  },
  buttonText: {
    color: '#FAFAFA',
    textAlign: 'center',
    fontFamily: 'Mitr-Regular',
    fontSize: 13,
  }
})