import * as React from 'react';
import {useState, useEffect} from 'react';
import MQTT from 'sp-react-native-mqtt';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  ImageBackground,
} from 'react-native';
import colors from '../assets/colors/colors';
import {Button, Searchbar} from 'react-native-paper';
import DropDownPicker from 'react-native-dropdown-picker';
import TranspInput from '../components/accountinput';
import CustomizeModal from '../components/customizemodal';
import FadeInView from '../components/fadeInView';
import axios from 'axios';
import Context from '../Context/context';

//import { CircularCard } from "react-native-circular-card-view";
const baseUrl = 'http://192.168.1.44:3000';
export default MyPlant = ({route,navigation}) => {
  /*const UserID = navigation.getParent().getParent();
  console.log("UserID:"+UserID);*/
  const UU = route.params;
  const UserID = UU.UserID;
  console.log("This is father fucker :"+UserID)
  // console.log(sensor2);
  const [isNewBox, setIsNewBox] = React.useState(false);
  const [isSun, setIsSun] = React.useState(false);
  const [isBasil, setIsBasil] = React.useState(false);
  const [notSelected, setNotSelected] = React.useState(true);
  const [openpreset, setOpenPreset] = React.useState(false);
  const [valuepreset, setValuePreset] = React.useState();
  const [plantname, setPlantName] = React.useState('');
  const [plantmode, setPlantMode] = React.useState('');
  function sunSelected() {
    setIsSun(true);
    setNotSelected(false);
  }
  function basilSelected() {
    setIsBasil(true);
    setNotSelected(false);
  }
  const [sid,setSID] = React.useState(0);
  const [items, setItems] = React.useState([
    {
      label: (
        <Text
          style={{fontFamily: 'Mitr-Regular', color: colors.newGreen2}}
          onPress={(setting) => {
            sunSelected();
            setValuePreset('Sunflower');
            setSID(1);
          }}>
          Sunflower
        </Text>
      ),
      value: 'Sunflower',
    },
    {
      label: (
        <Text
          style={{fontFamily: 'Mitr-Regular', color: colors.newGreen2}}
          onPress={() => {
            basilSelected();
            setValuePreset('Basil');
            setSID(2);
          }}>
          Basil
        </Text>
      ),
      value: 'Basil',
    },
  ]);
  const [opencustom, setOpenCustom] = React.useState(false);
  const [valuecustom, setValueCustom] = React.useState(null);
  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = query => setSearchQuery(query);
  const [modalVisible, setModalVisible] = React.useState(false);
  var array = [];
  function closeModal() {
    setModalVisible(false);
  }
  const pathImage = type => {
    switch (type) {
      case 'Sunflower':
        return require('../assets/images/Sunflower.png');
      case 'Basil':
        return require('../assets/images/Basil.png');
      case 'Cucumber':
        return require('../assets/images/Cucumber.png');
    }
  };
  const fetchBoxSetting = async (id, settings) => {
    try {
      const config = {
        method: 'POST',
        url: 'http://192.168.1.44:3000/planterbox/settings',
        data: {
          id: id,
        },
      };
      const setting = await axios.request(config).then(res => res.data);
      //console.log(array.push(setting));
      const updatedSettings = [...settings, setting];
      setSettings(updatedSettings);
      //console.log(setting);
      return setting;
    } catch (error) {
      console.error(error);
    }
  };
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [boxid, setBoxId] = useState([]);
  const [settings, setSettings] = useState([]);
  const postPreset = async(sID,bID,uid,usn) => {
    try{
      console.log("SID: "+sID+"BoxID: "+bID);
      const config = {
        method: 'POST',
        url: `${baseUrl}/planterbox/selectPreset`,
        data: {
          settingsID: sID,
          boxID: bID
        },
      };
      const response = await axios.request(config)
      navigation.navigate('Menu',{"UserID":uid,"UserName":usn} );
    }catch (error) {
      console.error(error);
    }

  };
  const getBoxList = async () => {
    const source = axios.CancelToken.source();
    const url = `${baseUrl}/user/${UserID}/planterboxes`;
    try {
      const response = await axios.get(url, {cancelToken: source.token});
      if (response.status === 200) {
        // response.data.map((box)=>fetchBoxSetting(box.boxID,settings));
        response.data.forEach(element => {
          //console.log("This is data : "+element);
        });
        setSettings(response.data);
        // response.data.map((box)=>console.log(fetchBoxSetting(box.boxID)));
        setIsLoading(false);
        return;
      } else {
        throw new Error('Failed to Get Box List');
      }
      // await setBoxId(data.map((box=>parseInt(box.boxID))));
      // console.log(temp);
      // console.log(getBoxid);
      // console.log(typeof(getBoxid[0]));

      // const BoxList = await getBoxid.map(id=>fetchBoxSetting(id));
      //const BoxList = getBoxid.map()
      // console.log(BoxList);
      // console.log(settings);
    } catch (error) {
      console.error(error);
    }
    // getSettingList(boxid);
    // console.log(data);
  };
  getSettingList = boxid => {
    setSettings(boxid.map(id => fetchBoxSetting(id)));
  };

  useEffect(() => {
    getBoxList();
  }, []);
  // const [sensor1, setSensor1] = useState('');
  // const [sensor2, setSensor2] = useState('');
  // const [sensor3, setSensor3] = useState('');
  // const [sensorWaterBool, setSensorWaterBool] = useState('');
  // let mqttClient = null;
  // MQTT.createClient({
  //   uri: 'mqtts://66d6b91771ff4fc7bb664c04cc3e7fbb.s2.eu.hivemq.cloud:8883',
  //   clientId: 'clientId'+ Math.random().toString(16).substr(2, 8),
  //   user: 'ICERUS',
  //   pass: 'Projectyear3',
  //   auth: true,
  //   //keepalive:60,
  // })
  //   .then(function (client) {
  //     client.on('closed', function () {
  //       console.log('mqtt.event.closed');
  //     });

  //     client.on('error', function (msg) {
  //       console.log('mqtt.event.error', msg);
  //     });

  //     client.on('message', function (msg) {
  //       console.log('mqtt.event.message', msg);
  //       if(msg.topic==='sensor/light'){
  //         setSensor1(msg.data);
  //       }
  //       if(msg.topic==='sensor/rh'){
  //         setSensor2(msg.data);
  //       }
  //       if(msg.topic==='sensor/temp'){
  //         setSensor3(msg.data);
  //       }
  //       if(msg.topic==='sensor/watering'){
  //         setSensorWaterBool(msg.data);
  //       }
  //     });

  //     client.on('connect', function () {
  //       console.log('connected');
  //       client.subscribe('sensor/+', 2);
  //       mqttClient = client;
  //       // client.publish('sensor2', 'planterbox', 2, false);
  //     });

  //     client.connect();
  //   })
  //   .catch(function (err) {
  //     console.log(err);
  //   });
  return (
    <Context.Consumer>
    {context => (
    <ScrollView style={styles.container}>
      {/* <Text>{settings.wateringMode}</Text> */}
      <View style={styles.inline}>
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

      <Searchbar
        placeholder="Search"
        icon={require('../assets/images/search.png')}
        clearIcon={require('../assets/images/delete.png')}
        onChangeText={onChangeSearch}
        value={searchQuery}
        style={styles.search}
        inputStyle={{color: '#FFFFFF'}}
      />
      <View>
        
        {settings.map(setting => (
        <View>
          <View>
          {setting.SettingsID === 0 && !valuepreset ? (
              <View style={styles.cardContent}>
                <DropDownPicker
                  open={openpreset}
                  value={valuepreset}
                  items={items}
                  setOpen={setOpenPreset}
                  setValue={setValuePreset}
                  setItems={setItems}
                  style={styles.dropdownpreset}
                  dropDownContainerStyle={{
                    borderColor: colors.newGreen2,
                    width: 200,
                    alignSelf: 'center',
                  }}
                  placeholder="SELECT PRESET"
                  placeholderStyle={{
                    color: colors.newGreen2,
                    fontSize: 14,
                    fontFamily: 'Mitr-Regular',
                    textAlign: 'center',
                    justifyContent: 'space-between',
                  }}
                  listItemLabelStyle={{
                    color: colors.newGreen2,
                    textAlign: 'center',
                  }}
                  zIndex={99}
                />
                <TouchableOpacity
                  style={styles.dropdowncustom}
                  onPress={() => setModalVisible(true)}>
                  <Text
                    style={{
                      color: colors.newGreen2,
                      textAlign: 'center',
                      fontFamily: 'Mitr-Regular',
                    }}>
                    CUSTOMIZE
                  </Text>
                </TouchableOpacity>
              </View>
          ):null}</View>
          <View>
          {setting.SettingsID === 0 && valuepreset ?(
            <FadeInView>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('ChooseCard', {
                    valuepreset: {valuepreset},
                  })
                }>
                <View style={styles.cardContentDone}>
                  <Text
                    style={{
                      color: colors.newGreen2,
                      fontSize: 15,
                      textAlign: 'right',
                      fontFamily: 'Mitr-Regular',
                      alignSelf: 'flex-start',
                      paddingLeft: 10,
                      marginTop: 0,
                    }}>
                    {valuepreset}
                  </Text>
                  <Image
                    style={styles.imageSun}
                    source={pathImage(valuepreset)}
                  />
                  <View style={styles.cardContentCircle}>
                    <Text
                      style={{
                        color: '#DBB907',
                        textAlign: 'center',
                        fontSize: 20,
                        fontFamily: 'Mitr-Regular',
                        alignSelf: 'center',
                        paddingTop: 38,
                      }}>
                      46%
                    </Text>
                    <Text
                      style={{
                        color: colors.newGreen2,
                        textAlign: 'center',
                        fontSize: 13,
                        fontFamily: 'Mitr-Regular',
                        paddingTop: 20,
                      }}>
                      Light
                    </Text>
                  </View>

                  <View style={styles.cardContentCircle2}>
                    <Text
                      style={{
                        color: '#DBB907',
                        textAlign: 'center',
                        fontSize: 20,
                        fontFamily: 'Mitr-Regular',
                        alignSelf: 'center',
                        paddingTop: 18,
                      }}>
                      30%
                    </Text>
                    <Text
                      style={{
                        color: colors.newGreen2,
                        textAlign: 'center',
                        fontSize: 13,
                        alignSelf: 'baseline',
                        fontFamily: 'Mitr-Regular',
                        marginTop: 10,
                      }}>
                      Soil Moisture
                    </Text>
                  </View>
                  <Text
                    style={{
                      color: colors.newGreen2,
                      fontSize: 22,
                      fontFamily: 'Mitr-Regular',
                      alignSelf: 'center',
                      paddingLeft: 150,
                      marginTop: 40,
                    }}>
                    34°C
                  </Text>
                </View>
              </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonAdd}
          onPress={() => postPreset(sid,setting.boxID,context.UserID,context.UserName)}>
          <View>
            <Text style={styles.buttonAddText}>+ SAVE PRESET</Text>
          </View>
        </TouchableOpacity>
            </FadeInView>
            
          ):null}</View>
          {setting.SettingsID !== 0 ? (
          <View>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('ChooseCard', {
                  valuepreset: setting.planterboxsettings.SettingName,
                  id: setting.boxID,
                  UserID: context.UserID,
                  UserName: context.UserName,
                })
              }>
              <View style={styles.cardContentDone}>
                <Text
                  style={{
                    color: colors.newGreen2,
                    fontSize: 15,
                    textAlign: 'right',
                    fontFamily: 'Mitr-Regular',
                    alignSelf: 'flex-start',
                    paddingLeft: 10,
                    marginTop: 0,
                  }}>
                  {setting.planterboxsettings.SettingName}
                </Text>
                {/* <Text
                  style={{fontFamily: 'Mitr-Regular', color: colors.newGreen2}}>
                  sensorLight:{sensor1} sensorRH:{sensor2} sensorTemp:{sensor3}
                </Text> */}
                <Image
                  style={styles.imageSun}
                  source={pathImage(setting.planterboxsettings.SettingName)}
                />
                {/* <Image style={styles.imageSun} source = {pathImage(valuepreset)}/> */}
                <View style={styles.cardContentCircle}>
                  <Text
                    style={{
                      color: '#DBB907',
                      textAlign: 'center',
                      fontSize: 20,
                      fontFamily: 'Mitr-Regular',
                      alignSelf: 'center',
                      paddingTop: 38,
                    }}>
                    46%
                  </Text>
                  <Text
                    style={{
                      color: colors.newGreen2,
                      textAlign: 'center',
                      fontSize: 13,
                      fontFamily: 'Mitr-Regular',
                      paddingTop: 20,
                    }}>
                    Light
                  </Text>
                </View>

                <View style={styles.cardContentCircle2}>
                  <Text
                    style={{
                      color: '#DBB907',
                      textAlign: 'center',
                      fontSize: 20,
                      fontFamily: 'Mitr-Regular',
                      alignSelf: 'center',
                      paddingTop: 18,
                    }}>
                    30%
                  </Text>
                  <Text
                    style={{
                      color: colors.newGreen2,
                      textAlign: 'center',
                      fontSize: 13,
                      alignSelf: 'baseline',
                      fontFamily: 'Mitr-Regular',
                      marginTop: 10,
                    }}>
                    Soil Moisture
                  </Text>
                </View>
                <Text
                  style={{
                    color: colors.newGreen2,
                    fontSize: 22,
                    fontFamily: 'Mitr-Regular',
                    alignSelf: 'center',
                    paddingLeft: 150,
                    marginTop: 40,
                  }}>
                  34°C
                </Text>
              </View>
            </TouchableOpacity>
          </View>):null}</View>
        ))}
        {/* {sensorWaterBool === 'on' ?(
        <TouchableOpacity style={{backgroundColor:"blue",width:100,height:50,alignSelf:'flex-start'}} onPress={()=>mqttClient.publish('sensor/watering', 'off', 1, true)}>
          <Text>Test Water</Text>
        </TouchableOpacity>) :( 
        <TouchableOpacity style={{backgroundColor:"grey",width:100,height:50,alignSelf:'flex-start'}} onPress={()=>mqttClient.publish('sensor/watering', 'on', 1, true)}>
        <Text>Test Water</Text>
        </TouchableOpacity>)} */}
        {/* {sensor2 === '1' ?(
        <TouchableOpacity style={{backgroundColor:"blue",width:100,height:50,alignSelf:'flex-end'}} onPress={()=>mqttClient.publish('sensor/water', '0', 2, true)}>
        
          <Text>Test Water</Text>
        </TouchableOpacity>) :(
          <TouchableOpacity style={{backgroundColor:"grey",width:100,height:50,alignSelf:'flex-end'}} onPress={()=>mqttClient.publish('sensor/water', '1', 2, true)}>
        
          <Text>Test Water</Text>
        </TouchableOpacity>
        )} */}
        {isNewBox && !valuepreset ? (
          <View style={styles.cardContent}>
            <DropDownPicker
              open={openpreset}
              value={valuepreset}
              items={items}
              setOpen={setOpenPreset}
              setValue={setValuePreset}
              setItems={setItems}
              style={styles.dropdownpreset}
              dropDownContainerStyle={{
                borderColor: colors.newGreen2,
                width: 200,
                alignSelf: 'center',
              }}
              placeholder="SELECT PRESET"
              placeholderStyle={{
                color: colors.newGreen2,
                fontSize: 14,
                fontFamily: 'Mitr-Regular',
                textAlign: 'center',
                justifyContent: 'space-between',
              }}
              listItemLabelStyle={{
                color: colors.newGreen2,
                textAlign: 'center',
              }}
              zIndex={99}
            />
            <TouchableOpacity
              style={styles.dropdowncustom}
              onPress={() => setModalVisible(true)}>
              <Text
                style={{
                  color: colors.newGreen2,
                  textAlign: 'center',
                  fontFamily: 'Mitr-Regular',
                }}>
                CUSTOMIZE
              </Text>
            </TouchableOpacity>
          </View>
        ) : null}

        <View style={styles.containerNew}>
          {isNewBox && valuepreset ? (
            <FadeInView>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('ChooseCard', {
                    valuepreset: {valuepreset},
                  })
                }>
                <View style={styles.cardContentDone}>
                  <Text
                    style={{
                      color: colors.newGreen2,
                      fontSize: 15,
                      textAlign: 'right',
                      fontFamily: 'Mitr-Regular',
                      alignSelf: 'flex-start',
                      paddingLeft: 10,
                      marginTop: 0,
                    }}>
                    {valuepreset}
                  </Text>
                  <Image
                    style={styles.imageSun}
                    source={pathImage(valuepreset)}
                  />
                  <View style={styles.cardContentCircle}>
                    <Text
                      style={{
                        color: '#DBB907',
                        textAlign: 'center',
                        fontSize: 20,
                        fontFamily: 'Mitr-Regular',
                        alignSelf: 'center',
                        paddingTop: 38,
                      }}>
                      46%
                    </Text>
                    <Text
                      style={{
                        color: colors.newGreen2,
                        textAlign: 'center',
                        fontSize: 13,
                        fontFamily: 'Mitr-Regular',
                        paddingTop: 20,
                      }}>
                      Light
                    </Text>
                  </View>

                  <View style={styles.cardContentCircle2}>
                    <Text
                      style={{
                        color: '#DBB907',
                        textAlign: 'center',
                        fontSize: 20,
                        fontFamily: 'Mitr-Regular',
                        alignSelf: 'center',
                        paddingTop: 18,
                      }}>
                      30%
                    </Text>
                    <Text
                      style={{
                        color: colors.newGreen2,
                        textAlign: 'center',
                        fontSize: 13,
                        alignSelf: 'baseline',
                        fontFamily: 'Mitr-Regular',
                        marginTop: 10,
                      }}>
                      Soil Moisture
                    </Text>
                  </View>
                  <Text
                    style={{
                      color: colors.newGreen2,
                      fontSize: 22,
                      fontFamily: 'Mitr-Regular',
                      alignSelf: 'center',
                      paddingLeft: 150,
                      marginTop: 40,
                    }}>
                    34°C
                  </Text>
                </View>
              </TouchableOpacity>
            </FadeInView>
          ) : null}

          {/* {isBasil & !notSelected?
          <View style={styles.cardContentDone}>
              <Text style={{color:colors.newGreen2,fontSize:15, textAlign:'right', fontFamily:"Mitr-Regular", alignSelf:'flex-start', paddingLeft:10, marginTop:0   }}>{valuepreset}</Text>
              <Image style={styles.imageSun} source = {pathImage(valuepreset)}/>
              <View style={styles.cardContentCircle}>
                <Text style={{color:'#DBB907',textAlign:"center",fontSize:20, fontFamily:"Mitr-Regular", alignSelf:'center', paddingTop:38  }}>50%</Text>
                <Text style={{color:colors.newGreen2,textAlign:"center",fontSize:13, fontFamily:"Mitr-Regular", paddingTop:20  }}>Light</Text>
              </View>
              <View style={styles.cardContentCircle2}>
                <Text style={{color:'#DBB907',textAlign:"center",fontSize:20, fontFamily:"Mitr-Regular", alignSelf:'center', paddingTop:18  }}>35%</Text>
                <Text style={{color:colors.newGreen2,textAlign:"center",fontSize:13, alignSelf:'baseline', fontFamily:"Mitr-Regular", marginTop:10  }}>Soil Moisture</Text>
              </View>       
              <Text style={{color:colors.newGreen2,fontSize:22, fontFamily:"Mitr-Regular", alignSelf:'center', paddingLeft:150, marginTop:40   }}>34°C</Text>
          </View>:null} */}
        </View>

        <TouchableOpacity
          style={styles.buttonAdd}
          onPress={() => navigation.navigate('SerialNumber')}>
          <View>
            <Text style={styles.buttonAddText}>+ ADD NEW BOX</Text>
          </View>
        </TouchableOpacity>
      </View>
      <CustomizeModal modalVisible={modalVisible} closeModal={closeModal} />
    </ScrollView>
    )}
    </Context.Consumer>
  );
};

const deviceWidth = Dimensions.get('screen').width;
const deviceHeight = Dimensions.get('screen').height;

const styles = StyleSheet.create({
  header: {
    fontFamily: 'Mitr-Medium',
    fontSize: 23,
    color: colors.darkGray,
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
  containerNew: {
    display: 'flex',
    //flexDirection:"row",
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
  buttonAdd: {
    paddingVertical: 8,
    width: 150,
    backgroundColor: colors.newGreen2,
    borderRadius: 20,
    marginTop: deviceHeight * 0.03,
    //marginLeft: deviceWidth*0.4,
    alignSelf: 'center',
  },
  // card: {
  //   fontFamily: 'Mitr-Regular',
  //   fontSize: 23,
  //   height: 150,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   backgroundColor: "#FFFFFF",
  //   borderRadius: 15,
  //   shadowColor: colors.lightGray,
  //   shadowOffset: {width: 0, height: 0},
  //   shadowOpacity: 1,
  //   shadowRadius: 8,
  //   elevation: 8,
  //   flexDirection: 'row',
  //   paddingLeft: 16,
  //   paddingRight: 14,
  //   marginTop: 6,
  //   marginBottom: 6,
  //   marginLeft: 16,
  //   marginRight: 16,

  // },
  cardContent: {
    fontFamily: 'Mitr-Regular',
    fontSize: 23,
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.newGreen2,
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
  cardContentDone: {
    fontFamily: 'Mitr-Regular',
    fontSize: 23,
    height: 150,
    width: 358,
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
  cardContentCircle: {
    fontFamily: 'Mitr-Regular',
    fontSize: 23,
    height: 65,
    width: 65,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.lightYellow,
    borderRadius: 65,
    // shadowColor: colors.lightGray,
    // shadowOffset: {width: 0, height: 0},
    // shadowOpacity: 1,
    // shadowRadius: 8,
    //flexDirection: 'column',
    marginTop: -140,
    marginBottom: 10,
    marginLeft: deviceWidth * 0.25,
    //marginRight: 16,
  },
  cardContentCircle2: {
    fontFamily: 'Mitr-Regular',
    fontSize: 23,
    height: 65,
    width: 65,
    alignSelf: 'flex-end',
    //alignItems: 'center',
    //justifyContent: 'center',
    backgroundColor: colors.lightYellow,
    borderRadius: 65,
    // shadowColor: colors.lightGray,
    // shadowOffset: {width: 0, height: 0},
    // shadowOpacity: 1,
    // shadowRadius: 8,
    // flexDirection: 'column',
    marginTop: deviceHeight * -0.088,
    // marginBottom: 0,
    // marginLeft: deviceWidth*0.7 ,
    marginRight: 10,
  },
  image: {
    opacity: 0.5,
    paddingLeft: 150,
    paddingRight: 150,
    height: 150,
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
  dropdownpreset: {
    width: 200,
    alignSelf: 'center',
    marginBottom: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 25,
    borderColor: '#FFFFFF',
  },
  dropdowncustom: {
    width: 200,
    height: 50,
    alignSelf: 'center',
    borderRadius: 25,
    backgroundColor: '#FFFFFF',
    borderColor: '#FFFFFF',
    justifyContent: 'center',
  },
  dropdowncontainer: {
    width: 350,
    height: 200,
  },
  nextbutton: {
    backgroundColor: colors.newGreen2,
    borderRadius: 25,
  },
  search: {
    borderRadius: 25,
    width: deviceWidth * 0.9,
    alignSelf: 'center',
    backgroundColor: '#97BFC2',
  },
  buttonAddText: {
    color: '#FAFAFA',
    textAlign: 'center',
    fontFamily: 'Mitr-Regular',
    fontSize: 13,
  },
});
