import React from 'react';
import { View, Text, StyleSheet, TextInput,Dimensions,Image,TouchableOpacity } from 'react-native';
import colors from '../assets/colors/colors';
import DropDownPicker from 'react-native-dropdown-picker';
import WateringDropdown from './WateringDropdown';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useEffect } from 'react';


export default function TimeFormAuto ({data}){
    const [isPickerFirstShow, setIsPickerFirstShow] = React.useState(false);
    const [isPickerEndShow, setIsPickerEndShow] = React.useState(false);
    const [datefirst, setDateFirst] = React.useState(new Date(Date.now()));
    const [dateend, setDateEnd] = React.useState(new Date(Date.now()));
    const [minMoisture, setMinMoisture] = React.useState(data.minMoisture);
    const [maxMoisture, setMaxMoisture] = React.useState(data.maxMoisture);

    // const [data, setData] = React.useState([]);
    // const getJson = async () => {
    //     try {
    //      const response = await fetch("http://localhost:3000/planterbox/3/settings");
    //      const json = await response.json();
    //      setData(json);
    //      console.log(data)
    //    }catch (error) {
    //     console.error(error);
    //   }
    // }
    //   useEffect(() => {
    //     getJson();
    //   }, []);
    const addMinMax = async () =>{
      const response = await fetch("http://192.168.1.44:3000/planterbox/settings/3/updateBoxSettings",{
        method:"PUT",
        headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body:JSON.stringify({
            "minMoisture":minMoisture,
            "maxMoisture":maxMoisture
            })
    }); console.log(minMoisture)
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
                            <TextInput style={styles.textTime} onChangeText={(minMoisture) => setMinMoisture(parseFloat(minMoisture))} defaultValue={data.minMoisture.toString()}/>
                        </View>
                    </View>
                    <Text style={styles.cardContent}> MAX  </Text>
                    <View style={styles.smallCard}>
                        <View>
                            <TextInput style={styles.textTime} onChangeText={(maxMoisture) => setMaxMoisture(parseFloat(maxMoisture))} defaultValue={data.maxMoisture.toString()}/>
                        </View>
                    </View>
                    <Text style={styles.cardContent}>  </Text>
                    <TouchableOpacity style={styles.saveButton} onPress={() => {addMinMax()}}>
                      <View>
                        <Text style={styles.textTime}>SAVE</Text>
                      </View>
                    </TouchableOpacity>
                    <Text style={styles.cardContent}>  </Text>
                </View>
                
                {/* {isPickerFirstShow &&(
                <DateTimePicker
                            testID="dateTimePicker1"
                            value={datefirst}
                            display="compact"
                            mode="time"
                            is24Hour={false}
                            onChange={onChangeFirst}
                            accentColor ={colors.newGreen2}
                            style={{marginRight:110,marginTop:-20}}  
                    />
                )}
                {isPickerEndShow &&(
                <DateTimePicker
                            testID="dateTimePicker2"
                            value={dateend}
                            display="compact"
                            mode="time"
                            is24Hour={false}
                            onChange={onChangeEnd}
                            accentColor ={colors.newGreen2}
                            style={{marginRight:30,marginTop:45}}  
                    />
                )} */}
        </View>
    )
}
const deviceWidth = Dimensions.get('screen').width;
const deviceHeight = Dimensions.get('screen').height;

const styles = StyleSheet.create({
    bigCard: {
        width: 350,
        height:100,
        borderRadius: 30,
        backgroundColor: 'lightgrey',
        fontFamily: 'Mitr-Regular',
        fontSize: 23,
        paddingTop:50,
        paddingLeft:60,
        alignSelf:'center',
        marginTop: 20,
        zIndex: 3
    },
    mediumCard: {
        //width: 200,
        height:40,
        borderRadius: 20,
        backgroundColor: '#436E71',
        fontFamily: 'Mitr-Regular',
        fontSize: 23,
        paddingTop:10,
        alignSelf:'center',
        display:'flex',
        flexDirection:'row',
        marginTop:10,
        marginLeft: 20 ,
        zIndex: 1
    },
    smallCard:{
        width: 60,
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
        color:'#436E71',
        marginTop: -70,
        marginLeft: 50
    },
    circleCard:{
        width: 70,
        height:70,
        borderRadius: 70,
        backgroundColor :'#436E71',
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
        marginTop: -83,
        marginLeft: 259
    },
    smText:{
        fontFamily: 'Mitr-Regular',
        fontSize: 10,
        color :'#436E71',
        marginLeft: -37,
        marginTop: -10
    }
})