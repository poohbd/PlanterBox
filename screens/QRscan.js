import React, { useState } from 'react';
import {SafeAreaView,StyleSheet,ScrollView,View,Text,StatusBar,TouchableOpacity,Button,Dimensions} from 'react-native';
import {Header,Colors,} from 'react-native/Libraries/NewAppScreen';
import QRCodeScanner from 'react-native-qrcode-scanner';
import colors from '../assets/colors/colors';
import * as Animatable from "react-native-animatable";
import ScanButton from '../components/scanbutton'

const deviceWidth = Dimensions.get('screen').width;
const deviceHeight = Dimensions.get('screen').height;

export default QRscan= ({navigation}) => {
    const [scan, setScan] = useState(false)
    const [result, setResult] = useState()
    onSuccess = (e) => {
        setResult(e.data)
        setScan(false)
    }
    startScan = () => {
        setScan(true)
        setResult()
    }
    makeSlideOutTranslation= (translationType, fromValue) => {
        return {
          from: {
            [translationType]: deviceWidth * -0.18
          },
          to: {
            [translationType]: fromValue
          }
        };
    }
    return (
        <>
            
            <SafeAreaView style={{backgroundColor:'#1eada8'}}>
                <ScrollView contentInsetAdjustmentBehavior="automatic">
                    <View style={styles.rect2}>
                     { result &&
                        <>
                        <View>
                          <Text style={styles.header}>{result}</Text>
                        </View>
                        <TouchableOpacity style={styles.buttonNext} onPress={() => navigation.navigate('Menu')}>
                          <View>
                            <Text style={styles.buttonNextText}>NEXT</Text>
                          </View>
                        </TouchableOpacity>
                        </>
                      }
                     { !scan &&
                        <>
                        <View style={styles.rectangleContainer}>
                          <ScanButton text="Start Scan" onPress={this.startScan} />
                          <TouchableOpacity style={styles.buttonNext} onPress={() => navigation.navigate('SuccesfulReg')}>
                          <View>
                            <Text style={styles.buttonNextText}>NEXT</Text>
                          </View>
                          </TouchableOpacity>
                        </View>
                        
                        </>
                     }
                     { scan &&
                        <View>
                         <View style={styles.space} />
                         <Text style={styles.header}>Scan your QRCode!</Text>
                         <View style={styles.space2} />
                         <QRCodeScanner
                            reactivate={true} showMarker={true}
                            ref={(node) => { this.scanner = node }}
                            onRead={this.onSuccess}
                            cameraStyle={{ height: 400, marginTop: 20, width: 300, alignSelf: 'center', justifyContent: 'center' }} 
                            customMarker={
                                <View>
                                  <View>
                                    <View style={styles.rectangle}>
                                      <View style={styles.spaceScan}/>
                                      <Animatable.View
                                        style={styles.scanBar}
                                        direction="alternate-reverse"
                                        iterationCount="infinite"
                                        duration={1700}
                                        easing="linear"
                                        animation={this.makeSlideOutTranslation(
                                          "translateY",
                                          deviceWidth * -0.7
                                        )}
                                      />
                                    </View>
                                  </View>
                                </View>
                            }
                            
                         />
                         <View style={{marginTop:deviceHeight*0.55}}>
                                <ScanButton text="Cancel Scan" onPress={() => setScan(false)} />
                          </View>
                        </View>
                     }
                    </View>
                </ScrollView>
            </SafeAreaView>
        </>
    )
}
const rectDimensions = deviceWidth * 0.65; // this is equivalent to 255 from a 393 device width
const rectBorderWidth = deviceWidth * 0.005; // this is equivalent to 2 from a 393 device width
const rectBorderColor = `${colors.white}80`;

const scanBarWidth = deviceWidth * 0.46; // this is equivalent to 180 from a 393 device width
const scanBarHeight = deviceWidth * 0.0025; //this is equivalent to 1 from a 393 device width
const scanBarColor = colors.white;

const styles = StyleSheet.create({
  header: {
    fontFamily:'Mitr-Medium',
    fontSize:23,
    color:colors.darkGray,
    alignSelf:'center'
},
  back: {
    fontFamily: 'Mitr-Regular',
    fontSize: 23,
    lineHeight: 30,
    color: colors.newGreen2,
  },
  space: {
    width: deviceWidth-50,
    height: deviceHeight-750,
  },
  space2: {
    width: deviceWidth-50,
    height: deviceHeight-800,
  },
  spaceScan: {
    width: deviceWidth-50,
    height: deviceHeight-550,
  },
  rect2: {
    width: deviceWidth - 32,
    height: deviceHeight - 20,
    backgroundColor: '#48d1cc',
    flexDirection: "column",
    flex: 1,
    marginRight: 15,
    marginLeft: 15,
  },
  sectionContainer: {
    marginTop: 20,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    padding: 16,
  },
  rectangleContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent"
  },

  rectangle: {
    height: rectDimensions,
    width: rectDimensions,
    borderWidth: rectBorderWidth,
    borderColor: rectBorderColor,
    backgroundColor: "transparent",
    alignSelf:'center'
  },
  scanBar: {
    width: scanBarWidth,
    height: scanBarHeight,
    backgroundColor: scanBarColor,
    alignSelf:'center'
  },
  buttonNext: {
    paddingVertical: 8,
    width: 80,
    backgroundColor: colors.newGreen2,
    borderRadius: 20,
  },
  buttonNextText: {
    color: '#FAFAFA',
    textAlign: 'center',
    fontFamily: 'Mitr-Regular',
    fontSize: 13,
  }
})