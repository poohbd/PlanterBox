import React from 'react';
import { View, Text, StyleSheet, TextInput,Dimensions,Image,TouchableOpacity } from 'react-native';
import colors from '../assets/colors/colors';
import DropDownPicker from 'react-native-dropdown-picker';
import LightDropdown from './LightDropdown';
import Slider from '@react-native-community/slider';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useEffect } from 'react';


export default function LightFormAuto ({data}){
    console.log(data);
    const [isPickerFirstShow, setIsPickerFirstShow] = React.useState(false);
    const [isPickerEndShow, setIsPickerEndShow] = React.useState(false);
    const [datefirst, setDateFirst] = React.useState(new Date(Date.now()));
    const [dateend, setDateEnd] = React.useState(new Date(Date.now()));
    const [lightMinAuto, setLightMinAuto] = React.useState(data.minLightIntensity);
    const [lightMaxAuto, setLightMaxAuto] = React.useState(data.maxLightIntensity);
    const id = data.SettingsID;
    // const [data, setData] = React.useState([]);
    // const getJson = async () => {
    //     try {
    //      const response = await fetch("http://localhost:3000/planterbox/3/settings");
    //      const json = await response.json();
    //      setData(json);
    //      console.log(data)
    //    }catch (error) {
    //     console.error(error);
    //   }}
    //   useEffect(() => {
    //     getJson();
    //   }, []);
    const addMinMax = async () =>{
        const response = await fetch("http://my-app-dpydq.ondigitalocean.app/planterbox/settings/updateBoxSettings",{
          method:"PUT",
          headers : { 
              'Content-Type': 'application/json',
              'Accept': 'application/json'
          },
          body:JSON.stringify({
              id: id,
              "minLightIntensity":lightMinAuto,
              "maxLightIntensity":lightMaxAuto
              })
      }); console.log(lightMinAuto)
  }
    const showFirstTimePicker = () =>{
        setIsPickerFirstShow(true);
    };
    const showEndTimePicker = () =>{
        setIsPickerEndShow(true);
    };
    const onChangeFirst = (event, selectedDate) => {
        const currentDate = selectedDate;
        setIsPickerFirstShow(false);
        setDateFirst(currentDate);
    };
    const onChangeEnd = (event, selectedDate) => {
        const currentDate = selectedDate;
        setIsPickerEndShow(false);
        setDateEnd(currentDate);
    };
    return(
        <View >
            
                <View style={styles.mediumCard}>
                    <Text style={styles.cardContent}>   MIN  </Text>
                    <View style={styles.smallCard}>
                        <View>
                            <TextInput style={styles.textTime} onChangeText={(lightMinAuto) => setLightMinAuto(parseInt(lightMinAuto))} defaultValue={data.minLightIntensity.toString()}/>
                            {/* <Text>{lightMinAuto}</Text> */}
                        </View> 
                    </View>
                    <Text style={styles.cardContent}> MAX  </Text>
                    <View style={styles.smallCard}>
                        <View>
                            <TextInput style={styles.textTime} onChangeText={(lightMaxAuto) => setLightMaxAuto(parseInt(lightMaxAuto))} defaultValue={data.maxLightIntensity.toString()}/>
                            {/* <Text>{lightMaxAuto}</Text> */}
                        </View>
                        {/* <TouchableOpacity onPress={() => {getJson()}}>
                            <Text>Reload</Text>
                        </TouchableOpacity> */}
                    </View>
                    <Text style={styles.cardContent}>  </Text>
                    <TouchableOpacity style={styles.saveButton} onPress={() => {addMinMax()}}>
                      <View>
                        <Text style={styles.textTime}>SAVE</Text>
                      </View>
                    </TouchableOpacity>
                    <Text style={styles.cardContent}>  </Text>
                    
                </View>
                
                
                
        </View>
    )
}
const deviceWidth = Dimensions.get('screen').width;
const deviceHeight = Dimensions.get('screen').height;

const styles = StyleSheet.create({
    bigCard: {
        width: 350,
        height:150,
        borderRadius: 30,
        backgroundColor: 'lightgrey',
        fontFamily: 'Mitr-Regular',
        fontSize: 23,
        paddingTop:50,
        paddingLeft:60,
        alignSelf:'center',
        marginTop: 10,
        zIndex: 3
    },
    mediumCard: {
        //width: 200,
        height:40,
        borderRadius: 20,
        backgroundColor: '#C8A805',
        fontFamily: 'Mitr-Regular',
        fontSize: 23,
        paddingTop:10,
        alignSelf:'center',
        display:'flex',
        flexDirection:'row',
        marginTop:20,
        marginLeft: 20 ,
        zIndex: 1
    },
    smallCard:{
        // width: 60,
        height:20,
        borderRadius: 30,
        backgroundColor: 'white',
        fontFamily: 'Mitr-Regular',
        fontSize: 10,
        paddingTop:-3,
        paddingLeft:10,
        zIndex : 1
    },
    saveButton:{
        width: 50,
        height:20,
        borderRadius: 30,
        backgroundColor: 'white',
        fontFamily: 'Mitr-Regular',
        fontSize: 10,
        paddingTop:-3,
        paddingLeft:10,
        zIndex : 1
    },
    cardContent:{
        textAlign: 'center',
        fontFamily: 'Mitr-Regular',
        fontSize: 10,
        color: 'white',
    },
    cardContent:{
        textAlign: 'center',
        fontFamily: 'Mitr-Regular',
        fontSize: 10,
        color: 'white',
        paddingTop:5,
    },
    textTime:{
        color: colors.newGreen2,
        fontSize:12,
        fontFamily:"Mitr-Regular",
        textAlign:"center",
        justifyContent:'space-between',
        marginRight:10
    },
    cardWatering:{
        fontFamily: 'Mitr-Regular',
        fontSize: 18,
        color:'#C8A805',
        marginTop: -70,
        marginLeft: 50
    },
    circleCard:{
        width: 70,
        height:70,
        borderRadius: 70,
        backgroundColor :'#C8A805',
        marginTop: -37,
        marginLeft: -40
    },
    circleCardText:{
        fontFamily: 'Mitr-Regular',
        fontSize: 30,
        paddingTop: 10,
        paddingLeft: 5
    },
    image:{
        marginTop: -110,
        marginLeft: 259
    },
    smText:{
        fontFamily: 'Mitr-Regular',
        fontSize: 10,
        color :'#C8A805',
        marginLeft: -37,
        marginTop: -25
    }
})