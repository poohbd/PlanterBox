import * as React from 'react';
import { View, Text, StyleSheet, Image,TouchableOpacity,Dimensions,ImageBackground} from 'react-native';
import colors from '../assets/colors/colors';
import { Button, Searchbar } from 'react-native-paper';
import DropDownPicker from 'react-native-dropdown-picker';
import TranspInput from '../components/accountinput';
import CustomizeModal from '../components/customizemodal';


export default MyPlant= ({navigation}) => {
    const [openpreset, setOpenPreset] = React.useState(false);
    const [valuepreset, setValuePreset] = React.useState(null);
    const [plantname, setPlantName] = React.useState('');
    const [items, setItems] = React.useState([
      {label: 'Apple', value: 'apple'},
      {label: 'Banana', value: 'banana'},
    ]);
    const [opencustom, setOpenCustom] = React.useState(false);
    const [valuecustom, setValueCustom] = React.useState(null);
    const [searchQuery, setSearchQuery] = React.useState('');
    const onChangeSearch = query => setSearchQuery(query);
    const [modalVisible, setModalVisible] = React.useState(false);
    function closeModal(){
      setModalVisible(false);
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
  image : {
    opacity:0.5,
    paddingLeft: 150,
    paddingRight: 150,
    height: 150,
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

