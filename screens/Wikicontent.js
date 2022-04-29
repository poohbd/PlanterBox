import * as React from 'react';
import {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  ImageBackground,
  SafeAreaView,
} from 'react-native';
import colors from '../assets/colors/colors';
import axios from 'axios';
import Context from '../Context/context';

export default Wikicontent= ({route,navigation}) => {

    return (
        <Context.Consumer>
        {context => (
            <SafeAreaView style={styles.container}>
            <ScrollView style={styles.container}>
                <View style={styles.inline}>
                <TouchableOpacity
                    style={styles.buttonBack}
                    onPress={() => navigation.navigate('Wiki')}>
                    <Image source={require('../assets/images/back.png')} />
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.buttonNoti}
                    onPress={() => navigation.navigate('Tabs_Forum')}>
                    <Image source={require('../assets/images/noti.png')} />
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.buttonName}
                    onPress={() => navigation.navigate('UserProfileHome', {"UserID":context.UserID})}>
                    <View>
                    <Text style={{fontFamily: 'Mitr-Regular', color: colors.newGreen2}}>
                        {context.UserName}
                    </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.buttonGray}
                    onPress={() => navigation.navigate('UserProfileHome', {"UserID":context.UserID})}>
                    <View>
                    <Image
                        style={styles.image_gray}
                        source={require('../assets/images/graycircle.png')}
                    />
                    </View>
                </TouchableOpacity>
                </View>
                <View style={styles.containerNew}>
                  <Text style={styles.header}>
                      WIKI Content
                      {'\n'}
                  </Text>
                  
                  <Image style={styles.imagesuperSun} source={require("../assets/images/Sunflower.png")} />
                </View>
            </ScrollView>
            </SafeAreaView>
        )}
        </Context.Consumer>
  )
}

const deviceWidth = Dimensions.get('screen').width;
const deviceHeight = Dimensions.get('screen').height;

const styles = StyleSheet.create({
  header: {
    fontFamily:'Mitr-Medium',
    fontSize:23,
    color:colors.darkGray,
    marginLeft: deviceWidth * 0.1,
},
  back: {
    fontFamily: 'Mitr-Regular',
    fontSize: 23,
    lineHeight: 30,
    color: colors.newGreen2,
},
  container: {
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '#FFFFFF',
},
  inline: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    justifyContent: 'space-around',
},
  buttonNoti: {
    //borderRadius: 20,
    //backgroundColor: '#CAD0D0',
    padding: 5,
    width: 30,
    height: 30,
    marginTop: deviceHeight * 0.085,
    marginLeft: deviceWidth * 0.5,
    backgroundColor: 'transparent',
},
  buttonName: {
    //borderRadius: 20,
    backgroundColor: '#CAD0D0',
    padding: 0,
    width: 80,
    height: 30,
    marginTop: deviceHeight * 0.087,
    marginLeft: deviceWidth * 0.05,
    backgroundColor: 'transparent',
},
  buttonGray: {
    //borderRadius: 20,
    backgroundColor: '#CAD0D0',
    padding: 0,
    width: 70,
    height: 70,
    marginTop: deviceHeight * 0.06,
    backgroundColor: 'transparent',
},
  image: {
    opacity: 0.5,
    paddingLeft: 150,
    paddingRight: 150,
    height: 150,
},
  search: {
    borderRadius: 25,
    width: deviceWidth * 0.9,
    alignSelf: 'center',
    backgroundColor: '#97BFC2',
},
  buttonBack: {
    //borderRadius: 20,
    //backgroundColor: '#CAD0D0',
    padding: 5,
    width: 30,
    height: 30,
    marginTop: deviceHeight * 0.085,
    //marginLeft: deviceWidth*0.03,
    backgroundColor: 'transparent',
    alignSelf: 'flex-start',
    paddingLeft: deviceWidth * 0.06,
},
  containerNew: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
},
  cardContentDone: {
    fontFamily: 'Mitr-Regular',
    fontSize: 23,
    height: 150,
    width: 170,
    //alignItems: 'center',
    //justifyContent: 'center',
    backgroundColor: '#CAD0D0',
    borderRadius: 15,
    shadowColor: colors.lightGray,
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 1,
    shadowRadius: 8,
    flexDirection: 'column',
    marginTop: 20,
    marginBottom: 6,
    marginLeft: 16,
    marginRight: 16,
},
  cardContentDone2: {
    fontFamily: 'Mitr-Regular',
    fontSize: 23,
    height: 150,
    width: 170,
    //alignItems: 'center',
    //justifyContent: 'center',
    backgroundColor: '#CAD0D0',
    borderRadius: 15,
    shadowColor: colors.lightGray,
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 1,
    shadowRadius: 8,
    flexDirection: 'column',
    marginTop: 20,
    marginBottom: 6,
    marginLeft: 16,
    marginRight: 16,
},
  imageSun: {
    //opacity:0.5,
    alignSelf: 'flex-start',
    marginLeft: 10,
    // marginTop:deviceHeight*0.005,
    // marginLeft:deviceWidth*0.1,
    // marginBottom: deviceHeight*0.1,
    width: 120,
    height: 120,
}, 
  button: {
    borderRadius: 20,
    backgroundColor: '#CAD0D0',
    padding: 60,
    width: "46%",
    height: 150,
    //marginTop:deviceHeight*-0.00000001
},
  image_myplant : {
    marginTop: 5,
    //marginBottom:15,
    alignSelf:'center',
},
  buttonText: {
    color: colors.newGreen2,
    marginTop: -50,
    fontFamily: 'Mitr-Regular',
    fontSize: 16,
    flexShrink:1, 
    width:80,
    //marginLeft:-10,
    alignSelf:'center',
},
  space: {
      width: 20,
      height: 30,
},
  imagesuperSun: {
    //opacity:0.5,
    alignSelf: 'flex-end',
    marginLeft: -40,
    //alignSelf:'center',
    // marginTop:deviceHeight*0.005,
    // marginLeft:deviceWidth*0.1,
    // marginBottom: deviceHeight*0.1,
    height: 250,
    width: 250,
}
})