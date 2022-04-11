import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';
import {Card} from 'react-native-paper';
import colors from '../assets/colors/colors';
import FlatButtonReg from '../components/buttonReg';
import TimeForm from '../components/timeform';
import LightForm from '../components/lightform';
import DropDownTime from '../components/dropdowntime';
import TimeFormAuto from '../components/timeformAuto';
import LightFormAuto from '../components/lightformAuto';


const deviceWidth = Dimensions.get('screen').width;
const deviceHeight = Dimensions.get('screen').height;

export default ChooseCard = ({route, navigation}) => {
  const {valuepreset} = route.params;
  const plantName = valuepreset.valuepreset;
  pathImage = type => {
    switch (type) {
      case 'Sunflower':
        return require('../assets/images/Sunflower.png');
      case 'Basil':
        return require('../assets/images/Basil.png');
    }
  };
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState();
  const getSetting = async () => {
    try {
      const response = await fetch(
        'http://localhost:3000/planterbox/1/settings',
      );
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
      console.log(data);
    }
  };

  useEffect(() => {
    getSetting();
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size="large" color={colors.newGreen2} />
      ) : (
        <ScrollView>
          <View style={styles.inline}>
            <TouchableOpacity
              style={styles.buttonBack}
              onPress={() => navigation.navigate('MyPlant')}>
              <Image source={require('../assets/images/back.png')} />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonNoti}
              onPress={() => navigation.navigate('Tabs_Forum')}>
              <Image source={require('../assets/images/noti.png')} />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonName}
              onPress={() => navigation.navigate('Tabs_Wiki')}>
              <View>
                <Text
                  style={{fontFamily: 'Mitr-Regular', color: colors.newGreen2}}>
                  Michael
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonGray}
              onPress={() => navigation.navigate('Tabs_MyPlant')}>
              <View>
                <Image source={require('../assets/images/graycircle.png')} />
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.containerNew}>
            <Text style={styles.header}>
              {plantName}
              {'\n'}
            </Text>
            <Image style={styles.imageSun} source={pathImage(plantName)} />
          </View>
          <View style={styles.card}>
            <View style={styles.cardContent}>
              <TimeFormAuto />
              <LightFormAuto />
              <TimeForm />
              <LightForm data={data} />
              <DropDownTime type="FERTILIZER" />
              <DropDownTime type="PESTICIDE" />
              {/* <DropDownTime type="FERTILIZER" />
            <DropDownTime type="PESTICIDE" /> */}
            </View>

          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#FFFFFF',
    // justifyContent: 'center',
  },
  containerNew: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
  },
  header: {
    fontFamily: 'Mitr-Medium',
    fontSize: 23,
    color: colors.newGreen1,
    marginLeft: deviceWidth * 0.1,
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
  back: {
    fontFamily: 'Mitr-Regular',
    fontSize: 23,
    lineHeight: 30,
    color: colors.newGreen2,
  },
  card: {
    width: deviceWidth,
    marginTop: -20,
    borderRadius: 30,
    backgroundColor: colors.newGreen1,
    fontFamily: 'Mitr-Regular',
    fontSize: 23,
    padding: 10,
    alignSelf: 'center',
  },
  cardContent: {
    textAlign: 'center',
    fontFamily: 'Mitr-Regular',
    fontSize: 16,
    lineHeight: 30,
    color: colors.darkGray,
  },
  image: {
    marginBottom: 30,
    alignSelf: 'center',
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
    marginTop: deviceHeight * 0.25,
    marginLeft: deviceWidth * 0.55,
  },
  buttonText: {
    color: '#FAFAFA',
    textAlign: 'center',
    fontFamily: 'Mitr-Regular',
    fontSize: 13,
  },
  imageSun: {
    //opacity:0.5,
    alignSelf: 'flex-end',
    marginLeft: deviceWidth * 0.3,
    // marginTop:deviceHeight*0.005,
    // marginLeft:deviceWidth*0.1,
    // marginBottom: deviceHeight*0.1,
    height: 100,
    width: 100,
  },
});
