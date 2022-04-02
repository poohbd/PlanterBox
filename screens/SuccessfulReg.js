import * as React from 'react';
import { View, Text, StyleSheet, Image,TouchableOpacity,Dimensions } from 'react-native';
import { Card } from 'react-native-paper';
import colors from '../assets/colors/colors';
import FlatButtonReg from '../components/buttonReg';

const deviceWidth = Dimensions.get('screen').width;
const deviceHeight = Dimensions.get('screen').height;

export default SuccesfulReg= ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={{ flex: 1, alignItems: 'center' }}>
                <Text style={styles.header} >PLANT REGISTER{'\n'}</Text>
            </View>
            <View style={styles.card}>
                <View style={styles.cardContent}>
                    <Text style={styles.cardContent}>{'\n'}CONGRATULATIONS!{'\n'}</Text>
                    <Image style={styles.image} source = {require("../assets/images/Tick.png")}/>
                    <Text style={styles.cardContent}>YOU HAVE SUCCESSFULLY</Text>
                    <Text style={styles.cardContent}>REGISTERED YOUR PLANT.{'\n'}</Text>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Menu')}>
                      <View>
                        <Text style={styles.buttonText}>NEXT</Text>
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
    height:300,
    borderRadius: 80,
    backgroundColor: '#CAD0D0',
    fontFamily: 'Mitr-Regular',
    fontSize: 23,
    padding: 10,
    alignSelf:'center',
    marginBottom: deviceHeight*0.3

  },
  cardContent: {
    textAlign: 'center',
    fontFamily: 'Mitr-Regular',
    fontSize: 16,
    lineHeight: 30,
    color: colors.darkGray,
  },
  image : {
    marginBottom: 30,
    alignSelf:'center',
  },
  space: {
      width: 20,
      height: 30,
  },
  button: {
    paddingVertical: 8,
    width: 80,
    backgroundColor: colors.newGreen2,
    borderRadius: 20,
    marginTop: deviceHeight*0.25,
    marginLeft: deviceWidth*0.55,
  },
  buttonText: {
    color: '#FAFAFA',
    textAlign: 'center',
    fontFamily: 'Mitr-Regular',
    fontSize: 13,
  }
})