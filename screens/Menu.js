import * as React from 'react';
import { View, Text, StyleSheet, Image,TouchableOpacity,Dimensions } from 'react-native';
import { Card } from 'react-native-paper';
import colors from '../assets/colors/colors';
import FlatButtonReg from '../components/buttonReg';
import { createAppContainer } from 'react-navigation';
import Wiki from './Wiki';
//import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';
import Context from '../Context/context';



const deviceWidth = Dimensions.get('screen').width;
const deviceHeight = Dimensions.get('screen').height;

/*export default Menu= ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={{ flex: 1, marginLeft: deviceWidth*0.1, marginTop: deviceHeight*0.07 }}>
                <Text style={styles.header} >HOME{'\n'}</Text>
            </View>
            <View style={styles.card}>
                <View style={styles.cardContent}>
                    <Text style={styles.cardContent}>{'\n'}CONGRATS!{'\n'}</Text>
                    <Image style={styles.image} source = {require("../assets/images/Tick.png")}/>
                    <Text style={styles.cardContent}>YOU HAVE SUCCESSFULLY</Text>
                    <Text style={styles.cardContent}>REGISTERED YOUR PLANT.{'\n'}</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Tabs_MyPlant')}>
                      <View>
                        <Text style={styles.buttonText}>My Plant</Text>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Tabs_Forum')}>
                      <View>
                        <Text style={styles.buttonText}>Forum</Text>
                      </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}*/

export default Menu= ({route,navigation}) => {
  const UU = route.params;
  const UserID = UU.UserID;
  const UserName = UU.UserName;
  console.log(UserID);
  return (
    <Context.Consumer>
    {context => (
    <View style={styles.container}>
      <View style={styles.inline}>
        <TouchableOpacity style={styles.buttonNoti} onPress={() => navigation.navigate('Tabs_Forum')}>
            <Image source = {require("../assets/images/noti.png")}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonName} onPress={() => {
          navigation.navigate('UserProfileHome', {"UserID":UserID});
          context.replaceNewUser(UserID);
          context.replaceUserName(UserName);
        }}>
          <View>
            <Text style={{fontFamily: 'Mitr-Regular', color: colors.newGreen2}} >{UserName}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonGray} onPress={() => {
          navigation.navigate('UserProfileHome', {"UserID":UserID});
          context.replaceNewUser(UserID);
          context.replaceUserName(UserName);
        }}>
          <View>
            <Image style={styles.image_gray} source = {require("../assets/images/graycircle.png")}/>
          </View>
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1, alignItems: 'flex-start', marginLeft: deviceWidth*0.05, marginTop: deviceHeight*-0.2 }}>
                <Text style={styles.header} >HOME{'\n'}</Text>
        </View>
      <View style={styles.inline}>
        <TouchableOpacity style={styles.button} onPress={() => {
          navigation.navigate('Tabs_MyPlant', {"UserID":UserID});
          context.replaceNewUser(UserID);
          context.replaceUserName(UserName);
        }}>
          <View>
            <Image style={styles.image_myplant} source = {require("../assets/images/plant-pot.png")}/>
            <Text style={styles.buttonText}>My Plants</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => {
          navigation.navigate('Tabs_Forum', {"UserID":UserID});
          context.replaceNewUser(UserID);
          context.replaceUserName(UserName);
        }}>
          <View>
          <Image style={styles.image_forum} source = {require("../assets/images/Vector.png")}/>
          <Text style={styles.buttonText}>Forum</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.space}/>
      <View style={styles.inline}>
        <TouchableOpacity style={styles.lowerbutton} onPress={() => {
          navigation.navigate('Tabs_Wiki', {"UserID":UserID});
          context.replaceNewUser(UserID);
          context.replaceUserName(UserName);
        }}>
          <View>
            <Image style={styles.image_forum} source = {require("../assets/images/cib_wikipedia.png")}/>
            <Text style={styles.buttonText}>Wiki</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.lowerbutton} onPress={() => navigation.navigate('Tabs_Settings')}>
          <View>
            <Image style={styles.image_settings} source = {require("../assets/images/carbon_settings.png")}/>
            <Text style={styles.buttonText}>Settings</Text>
          </View>
        </TouchableOpacity>
        {/* <TouchableOpacity style={styles.lowerbutton} onPress={() => console.log(context)}>
          <View>
            <Image style={styles.image_settings} source = {require("../assets/images/carbon_settings.png")}/>
            <Text style={styles.buttonText}>Console</Text>
          </View>
        </TouchableOpacity> */}
      </View>
      
    </View>
    )}
    </Context.Consumer>

  )}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
  },
  inline: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    justifyContent: 'space-around',
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
  text_user: {
    fontFamily: 'Mitr-Regular',
    fontSize: 18,
    lineHeight: 30,
    color: colors.newGreen2,
    //marginVertical: deviceHeight*0.05,
    //marginLeft: deviceWidth*0.15,
    alignSelf:'center'
  },
  card: {
    width: 300,
    height:300,
    borderRadius: 6,
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
  image_noti : {
    //marginTop: deviceHeight*0.065,
    //marginLeft: deviceWidth*0.55,
    alignSelf:'center',
  },
  image_myplant : {
    marginTop: -20,
    marginBottom:15,
    alignSelf:'center',
  },
  image_gray : {
    marginTop: deviceHeight*0,
    //marginVertical: deviceHeight*0.02,
    alignSelf:'center',
  },
  image_forum : {
    marginTop: -5,
    marginBottom:13,
    alignSelf:'center',
  },
  image_settings : {
    marginTop: -5,
    marginBottom:7.5,
    alignSelf:'center',
  },
  space: {
      width: 20,
      height: 30,
  },
  buttonNoti: {
    //borderRadius: 20,
    backgroundColor: '#CAD0D0',
    padding:5,
    width: 30,
    height: 30,
    marginTop:deviceHeight*0.085,
    marginLeft: deviceWidth*0.5,
    backgroundColor: 'transparent'
  },
  buttonName: {
    //borderRadius: 20,
    backgroundColor: '#CAD0D0',
    padding: 0,
    width: 80,
    height: 30,
    marginTop:deviceHeight*0.087,
    marginLeft: deviceWidth*0.05,
    backgroundColor: 'transparent'
  },
  buttonGray: {
    //borderRadius: 20,
    backgroundColor: '#CAD0D0',
    padding: 0,
    width: 70,
    height: 70,
    marginTop:deviceHeight*0.06,
    backgroundColor: 'transparent'
  },
  
  button: {
    borderRadius: 20,
    backgroundColor: '#CAD0D0',
    padding: 60,
    width: "46%",
    height: 150,
    marginTop:deviceHeight*-0.08
  },
  lowerbutton: {
    borderRadius: 20,
    backgroundColor: '#CAD0D0',
    padding: 60,
    width: "46%",
    height: 150,
    marginTop:deviceHeight*-0.18
    
  },
  button_myplant: {
    paddingVertical: 80,
    width: 180,
    backgroundColor: '#CAD0D0',
    borderRadius: 20,
    marginTop: deviceHeight*0.15,
    marginLeft: deviceWidth*0.05,
    justifyContent: 'space-evenly'
  },
  button_forum: {
    paddingVertical: 80,
    width: 180,
    backgroundColor: '#CAD0D0',
    borderRadius: 20,
    marginBottom: deviceHeight*0.6,
    marginLeft: deviceWidth*0.55,
    justifyContent: 'space-evenly'
  },

  buttonText: {
    color: colors.newGreen2,
    textAlign: 'center',
    fontFamily: 'Mitr-Regular',
    fontSize: 16,
    flexShrink:1, 
    width:80,
    marginLeft:-10
  }
})