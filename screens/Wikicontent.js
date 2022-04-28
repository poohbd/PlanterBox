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
                      Sunflower
                      {'\n'}
                  </Text>
                  <Image style={styles.imagesuperSun} source={require("../assets/images/Sunflower.png")} />
                
                </View>
                <View style={styles.trick}>
                  <Text style={styles.tipText}>TIPS AND TRICKS</Text>
                </View>
                <View style={styles.tipContainer}>
                    <View style={styles.tip1}>
                      <Text style={styles.tipText}>put information here the box will automatically expand</Text>
                    </View>
                </View>
                <View style={styles.tipContainer}>
                    <View style={styles.tip2}>
                      <Text style={styles.tipText}>put information here the box will automatically expand</Text>
                    </View>
                </View>
                <View style={styles.tipContainer}>
                    <View style={styles.tip3}>
                      <Text style={styles.tipText}>put information here the box will automatically expand</Text>
                    </View>
                </View>
                <View style={styles.inlineLeftContainer}>
                  <View style={styles.inlineLeft}>
                    <View style={styles.twoBlock}>
                      <Text style={styles.boxText}>WATERING</Text>
                      <Text style={styles.tipText}>600 ml</Text>
                        <View style={styles.insideBox}>
                          <Text style={styles.tipText}>EVERYDAY</Text>
                        </View>
                    </View>
                    <View style={styles.twoBlock}>
                      <Text style={styles.boxText}>LIGHT</Text>
                        <View style={styles.insideBoxLight}>
                          <Text style={styles.tipText}>50 - 150</Text>
                        </View>
                        <View style={styles.insideBoxLight}>
                          <Text style={styles.tipText}>6-8 HRS</Text>
                        </View>
                    </View>
                  </View>
                </View>
                <View style={styles.tipContainer}>
                    <View style={styles.tip}>
                    <Text style={styles.boxText}>SOIL - FERTILIZER MIXTURE</Text>
                      <Text style={styles.tipText}>put information here the box will automatically expand</Text>
                    </View>
                </View>
                <View style={styles.tipContainer}>
                    <View style={styles.tip}>
                    <Text style={styles.boxText}>PESTICIDE</Text>
                      <Text style={styles.tipText}>put information here the box will automatically expand</Text>
                        <View style={styles.insideBoxPes}>
                          <Text style={styles.tipText}>TWICE A WEEK</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.inlineLeftContainer}>
                  <View style={styles.inlineLeft}>
                    <View style={styles.twoBlock}>
                      <Text style={styles.boxText}>GROWING TIME</Text>
                        <View style={styles.insideBox}>
                          <Text style={styles.tipText}>3 WEEKS</Text>
                        </View>
                    </View>
                    <View style={styles.twoBlock}>
                      <Text style={styles.boxText}>WEATHER</Text>
                        <View style={styles.insideBox}>
                          <Text style={styles.tipText}>SUNNY</Text>
                        </View>
                    </View>
                  </View>
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
trick: {
  width: 250,
  height: 40,
  borderRadius: 20,
  backgroundColor: '#CAD0D0',
  marginLeft:-70,
  marginVertical: 5,
  padding: 5,
  paddingRight:0,
  paddingLeft: 90,
  marginBottom:20,
},
tip: {
  width: '86%',
  // height: 100,
  borderRadius: 20,
  backgroundColor: '#CAD0D0',
  marginHorizontal: '7%',
  marginVertical: 5,
  padding: 10,
},
tip1: {
  width: '86%',
  // height: 100,
  borderRadius: 20,
  backgroundColor: '#FDEBD9',
  marginHorizontal: '7%',
  marginVertical: 5,
  padding: 10,
},
tip2: {
  width: '86%',
  // height: 100,
  borderRadius: 20,
  backgroundColor: '#DEEDEE',
  marginHorizontal: '7%',
  marginVertical: 5,
  padding: 10,
},
tip3: {
  width: '86%',
  // height: 100,
  borderRadius: 20,
  backgroundColor: '#FFF3B7',
  marginHorizontal: '7%',
  marginVertical: 5,
  padding: 10,
},
tipContainer: {
  flexDirection: 'column'
},
tipText: {
  textAlign: 'center',
  fontFamily: 'Mitr-Regular',
  fontSize: 16,
  lineHeight: 30,
  color: colors.newGreen2,
},
boxText: {
  textAlign: 'center',
  fontFamily: 'Mitr-Regular',
  fontSize: 16,
  lineHeight: 30,
  color: 'green',
},
insideBox:{
    borderRadius: 20,
    backgroundColor: '#FDEBD9',
    padding: 5,
    // width: "46%",
    height: 40,
    marginTop:25,
},
insideBoxLight:{
  borderRadius: 20,
  backgroundColor: '#FDEBD9',
  padding: 5,
  // width: "46%",
  height: 40,
  marginTop:10,
},
insideBoxPes:{
  borderRadius: 20,
  backgroundColor: '#FDEBD9',
  padding: 5,
  width: 150,
  height: 40,
  marginTop:10,
},
inlineLeftContainer: {
  backgroundColor: '#FFFFFF',
  flex: 1,
  alignItems: 'center'
},
inlineLeft: {
  backgroundColor: '#FFFFFF',
  flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '90%',
},
twoBlock: {
  borderRadius: 20,
  backgroundColor: '#CAD0D0',
  padding: 60,
  width: "46%",
  height: 150,
  marginHorizontal: '2%',
  marginVertical:'2%',
  padding: 10
  //marginTop:deviceHeight*-0.00000001
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
},
})