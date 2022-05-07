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
import {Button, Searchbar} from 'react-native-paper';
import axios from 'axios';
import Context from '../Context/context';
import { isEmptyArray } from 'formik';

export default Wiki= ({route,navigation}) => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = query => {
    setSearchQuery(query);
    searchWiki();
  }
  const [wiki, setWiki] = useState([]);
  const [swiki, setSwiki] = useState([]);
  const getWikiList = async () => {
    const source = axios.CancelToken.source();
    const url = "http://my-app-dpydq.ondigitalocean.app/wiki/listposts";
    try {
      const response = await axios.get(url, {cancelToken: source.token});
      if (response.status === 200) {
        // response.data.map((box)=>fetchBoxSetting(box.boxID,settings));
        response.data.forEach(element => {
          console.log("This is data : "+element);
        });
        setWiki(response.data);
        // response.data.map((box)=>console.log(fetchBoxSetting(box.boxID)));
        return;
      } else {
        throw new Error('Failed to Get Wiki List');
      }
    } catch (error) {
      console.error(error);
    }
  }
  const pathImage = type => {
    switch (type) {
      case 'Coriander':
        return require('../assets/images/Coriander.png');
      case 'Holy Basil':
        return require('../assets/images/Basil.png');
    }
  };
  const searchWiki = async () => {
    try {
      const config = {
        method: 'POST',
        url: 'http://my-app-dpydq.ondigitalocean.app/wiki/search',
        data: {
          plantname: searchQuery,
        },
      };
      const setting = await axios
        .request(config)
        .then(res => setSwiki(res.data));
    } catch (error){
      alert(error.message);
    }
  };

  useEffect(() => {
   getWikiList();
  }, []);

  return (
    <Context.Consumer>
    {context => (
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.container}>
          <View style={styles.inline}>
            <TouchableOpacity
              style={styles.buttonBack}
              onPress={() => navigation.navigate('Menu',{"UserID":context.UserID,"UserName":context.UserName})}>
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
              WIKI
              {'\n'}
            </Text>
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
          <View style={styles.space} />
          {isEmptyArray(swiki) ?(
            wiki.map(wiki => ( 
              <View style={styles.inlineLeftContainer}>
              <View style={styles.inlineLeft}>
                <TouchableOpacity style={styles.button} onPress={() => {
                  navigation.navigate('Wikicontent', {"plantname":wiki.plantname});
                  }}>
                  <View>
                    <Text style={styles.buttonText}>{wiki.plantname}</Text>
                    <Image style={styles.image_myplant} source = {pathImage(wiki.plantname)}/>
                  </View>
                </TouchableOpacity>
              {/* <TouchableOpacity style={styles.button} onPress={() => {
                navigation.navigate('Wikicontent');
                }}>
                <View>
                  <Text style={styles.buttonText}>Basil</Text>
                  <Image style={styles.image_myplant} source = {require("../assets/images/Basil.png")}/>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={() => {
                navigation.navigate('Wikicontent');
                }}>
                <View>
                  <Text style={styles.buttonText}>Basil</Text>
                  <Image style={styles.image_myplant} source = {require("../assets/images/Basil.png")}/>
                </View>
              </TouchableOpacity> */}
                </View>
              </View>
            ))
          ) :(
            <View style={styles.inlineLeftContainer}>
              <View style={styles.inlineLeft}>
                <TouchableOpacity style={styles.button} onPress={() => {
                  navigation.navigate('Wikicontent', {"plantname":swiki.plantname});
                  }}>
                  <View>
                    <Text style={styles.buttonText}>{swiki.plantname}</Text>
                    <Image style={styles.image_myplant} source = {pathImage(swiki.plantname)}/>
                  </View>
                </TouchableOpacity>
                </View>
              </View>
          )}
          
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
inlineRight: {
  backgroundColor: '#FFFFFF',
  flexDirection: 'row',
  justifyContent: 'space-around',
  marginLeft: deviceWidth * 0.2,
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
    marginHorizontal: '2%',
    marginVertical:'2%',
    //marginTop:deviceHeight*-0.00000001
},
  image_myplant : {
    marginTop: 5,
    //marginBottom:15,
    alignSelf:'center',
    width:100,
    height:100
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
  }
})