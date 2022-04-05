import * as React from 'react';
import { View, Text, StyleSheet, Image,TouchableOpacity,Dimensions,ImageBackground} from 'react-native';
import colors from '../assets/colors/colors';
import { Button, Searchbar } from 'react-native-paper';
import DropDownPicker from 'react-native-dropdown-picker';
import TranspInput from '../components/accountinput';
import CustomizeModal from '../components/customizemodal';
import FadeInView from '../components/fadeInView';
//import { CircularCard } from "react-native-circular-card-view";


export default MyPlant= ({navigation}) => {
    const [isSun, setIsSun] = React.useState(false);
    const [isBasil, setIsBasil] = React.useState(false);
    const [notSelected, setNotSelected] = React.useState(true);
    const [openpreset, setOpenPreset] = React.useState(false);
    const [valuepreset, setValuePreset] = React.useState();
    const [plantname, setPlantName] = React.useState('');
    function sunSelected() {
      setIsSun(true);
      setNotSelected(false);
    }
    function basilSelected() {
      setIsBasil(true);
      setNotSelected(false);
    }
    const [items, setItems] = React.useState([
      {label: <Text style={{fontFamily: 'Mitr-Regular', color: colors.newGreen2}} onPress={() => {sunSelected();setValuePreset('Sunflower')}}>Sunflower</Text>
      , value: 'Sunflower'},
      {label: <Text style={{fontFamily: 'Mitr-Regular', color: colors.newGreen2}} onPress={() => {basilSelected();setValuePreset('Basil')}}>Basil</Text>
      , value: 'Basil'},
    ]);
    const [opencustom, setOpenCustom] = React.useState(false);
    const [valuecustom, setValueCustom] = React.useState(null);
    const [searchQuery, setSearchQuery] = React.useState('');
    const onChangeSearch = query => setSearchQuery(query);
    const [modalVisible, setModalVisible] = React.useState(false);
    function closeModal(){
      setModalVisible(false);
    }
    pathImage=(type)=>{
      switch(type){
        case 'Sunflower': return(require("../assets/images/Sunflower.png"))
        case 'Basil': return(require("../assets/images/Basil.png"))
      }
    }

    return (
      <View style={styles.container}>
        <View style={styles.inline}>
          <TouchableOpacity style={styles.buttonNoti} onPress={() => navigation.navigate('Tabs_Forum')}>
            
              <Image source = {require("../assets/images/noti.png")}/>
            
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonName} onPress={() => navigation.navigate('Tabs_Wiki')}>
            <View>
              <Text style={{fontFamily: 'Mitr-Regular', color: colors.newGreen2}}>Michael</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonGray} onPress={() => navigation.navigate('Tabs_MyPlant')}>
            <View>
              <Image style={styles.image_gray} source = {require("../assets/images/graycircle.png")}/>
            </View>
          </TouchableOpacity>
        </View>

        <Searchbar
          placeholder="Search"
          icon={require("../assets/images/search.png")}
          clearIcon={require("../assets/images/delete.png")}
          onChangeText={onChangeSearch}
          value={searchQuery}
          style={styles.search}
          inputStyle={{color:"#FFFFFF"}}
        />
        <View>
          {!valuepreset ?
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
                  borderColor:colors.newGreen2,
                  width:200,
                  alignSelf:"center",
                }}
                placeholder="SELECT PRESET"
                placeholderStyle={{
                  color: colors.newGreen2,
                  fontSize:14,
                  fontFamily:"Mitr-Regular",
                  textAlign:"center",
                  justifyContent:'space-between'
                }}
                listItemLabelStyle={{
                  color: colors.newGreen2,
                  textAlign:"center",
                }}
                zIndex={99}
              />
              <TouchableOpacity style={styles.dropdowncustom} onPress={()=>setModalVisible(true)}>
                <Text style={{color:colors.newGreen2,textAlign:"center", fontFamily:"Mitr-Regular",  }}>
                  CUSTOMIZE
                </Text>
              </TouchableOpacity>                    
          </View>:null}
          
          <View style={styles.containerNew}>
            
          {valuepreset ?
            <FadeInView>
              <TouchableOpacity onPress={() => navigation.navigate('Test', {valuepreset: {valuepreset}})}>
              <View style={styles.cardContentDone}>
                <Text style={{color:colors.newGreen2,fontSize:15, textAlign:'right', fontFamily:"Mitr-Regular", alignSelf:'flex-start', paddingLeft:10, marginTop:0   }}>{valuepreset}</Text>
                <Image style={styles.imageSun} source = {pathImage(valuepreset)}/>
                <View style={styles.cardContentCircle}>
                  <Text style={{color:'#DBB907',textAlign:"center",fontSize:20, fontFamily:"Mitr-Regular", alignSelf:'center', paddingTop:38  }}>46%</Text>
                  <Text style={{color:colors.newGreen2,textAlign:"center",fontSize:13, fontFamily:"Mitr-Regular", paddingTop:20  }}>Light</Text>
                </View>
               
                <View style={styles.cardContentCircle2}>
                  <Text style={{color:'#DBB907',textAlign:"center",fontSize:20, fontFamily:"Mitr-Regular", alignSelf:'center', paddingTop:18  }}>30%</Text>
                  <Text style={{color:colors.newGreen2,textAlign:"center",fontSize:13, alignSelf:'baseline', fontFamily:"Mitr-Regular", marginTop:10  }}>Soil Moisture</Text>
                </View>
                <Text style={{color:colors.newGreen2,fontSize:22, fontFamily:"Mitr-Regular", alignSelf:'center', paddingLeft:150, marginTop:40   }}>34°C</Text>
              </View>
              </TouchableOpacity>
            </FadeInView>:null}

          
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
          
          
          <TouchableOpacity style={styles.buttonAdd} onPress={() => navigation.navigate('SerialNumber')}>
            <View>
              <Text style={styles.buttonAddText}>+ ADD NEW BOX</Text>
            </View>
          </TouchableOpacity>
        </View>
        <CustomizeModal modalVisible={modalVisible} closeModal={closeModal} />
      </View>

    )
}

const deviceWidth = Dimensions.get('screen').width;
const deviceHeight = Dimensions.get('screen').height;

const styles = StyleSheet.create({
  header: {
    fontFamily:'Mitr-Medium',
    fontSize:23,
    color:colors.darkGray,
},
  back: {
    fontFamily: 'Mitr-Regular',
    fontSize: 23,
    lineHeight: 30,
    color: colors.newGreen2,
  },
  container: {
    display:"flex",
    flexDirection:"column",
    backgroundColor: '#FFFFFF',
  },
  containerNew: {
    display:"flex",
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
  buttonAdd: {
    paddingVertical: 8,
    width: 150,
    backgroundColor: colors.newGreen2,
    borderRadius: 20,
    marginTop: deviceHeight*0.03,
    //marginLeft: deviceWidth*0.4,
    alignSelf:'center'
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
    alignSelf:'center',
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
    marginLeft: deviceWidth*0.25 ,
    //marginRight: 16,
  },
  cardContentCircle2: {
    fontFamily: 'Mitr-Regular',
    fontSize: 23,
    height: 65,
    width: 65,
    alignSelf:'flex-end',
    //alignItems: 'center',
    //justifyContent: 'center',
    backgroundColor: colors.lightYellow,
    borderRadius: 65,
    // shadowColor: colors.lightGray,
    // shadowOffset: {width: 0, height: 0},
    // shadowOpacity: 1,
    // shadowRadius: 8,
    // flexDirection: 'column',
    marginTop: deviceHeight*-0.088,
    // marginBottom: 0,
    // marginLeft: deviceWidth*0.7 ,
    marginRight: 10,
  },
  image : {
    opacity:0.5,
    paddingLeft: 150,
    paddingRight: 150,
    height: 150,
  },
  imageSun : {
    //opacity:0.5,
    alignSelf:'flex-start',
    marginLeft:10,
    // marginTop:deviceHeight*0.005,
    // marginLeft:deviceWidth*0.1,
    // marginBottom: deviceHeight*0.1,
    width:120,
    height:120
  },
  dropdownpreset : {
    width:200,
    alignSelf:'center',
    marginBottom:10,
    backgroundColor:'#FFFFFF',
    borderRadius:25,
    borderColor:"#FFFFFF"
  },
  dropdowncustom : {
    width:200,
    height: 50,
    alignSelf:'center',
    borderRadius:25,
    backgroundColor:'#FFFFFF',
    borderColor:"#FFFFFF",
    justifyContent:"center"
  },
  dropdowncontainer : {
    width:350,
    height:200,
  },
  nextbutton :{
    backgroundColor:colors.newGreen2,
    borderRadius:25,
    
  },
  search :{
    borderRadius:25,
    width: deviceWidth*0.9,
    alignSelf:"center",
    backgroundColor:"#97BFC2",
  },
  buttonAddText: {
    color: '#FAFAFA',
    textAlign: 'center',
    fontFamily: 'Mitr-Regular',
    fontSize: 13,
  }
})

