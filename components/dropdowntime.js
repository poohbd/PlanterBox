import * as React from 'react';
import { View, Text, StyleSheet, Image,TouchableOpacity,Dimensions,ImageBackground,Button} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import colors from '../assets/colors/colors';
import DateTimePicker from '@react-native-community/datetimepicker';

// calling example:
//     <DropDownTime type='FERTILIZER'/>
//     <DropDownTime type='PESTICIDE'/>

export default function DropDownTime({type}){
    const [openplan, setOpenplan] = React.useState(false);
    const [valueplan, setValuePlan] = React.useState('SCHEDULE');
    const [items, setItems] = React.useState([
      {label: 'EVERY DAY', value: 'oneday'},
      {label: 'EVERY 2 DAYS', value: 'twoday'},
      {label: 'EVERY 3 DAYS', value: 'threeday'},
      {label: 'EVERY 4 DAYS', value: 'fourday'},
    ]);

    const [isPickerShow, setIsPickerShow] = React.useState(false);
    const [date, setDate] = React.useState(new Date(Date.now()));
    const showTimePicker = () =>{
        setIsPickerShow(true);
    };
    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate;
        setIsPickerShow(false);
        setDate(currentDate);
    };
    defineType=(type)=>{
        switch (type){
            case 'FERTILIZERCARD':
                console.log(type);
                return(styles.fertilizerSmallCard);
            case 'FERTILIZER_TITLE':
                console.log(type);
                return(styles.fertilizerTitle);
            case 'PESTICIDECARD':
                console.log(type);
                return(styles.pesticideSmallCard);
            case 'PESTICIDE_TITLE':
                console.log(type);
                return(styles.pesticideTitle);
            case 'FERTILIZER_BELL':
                console.log(type);
                return(styles.fertilizerBell);
            case 'PESTICIDE_BELL':
                console.log(type);
                return(styles.pesticideBell);
        }
    }
    return(
        <View>
            <View style={styles.cardContent}>
                <View style={styles.cardHeader}>
                    <Text style={defineType(type+"_TITLE")}>{type}</Text>
                    <Image style={defineType(type+"_BELL")} source={require("../assets/images/notificationbell.png")}/>
                </View>
                <View style={defineType(type+"CARD") }>
                    <DropDownPicker
                        open={openplan}
                        value={valueplan}
                        items={items}
                        setOpen={setOpenplan}
                        setValue={setValuePlan}
                        style={styles.dropdownSchedule}
                        dropDownContainerStyle={{
                            borderColor:colors.newGreen2,
                            width:120,
                            marginLeft:7.5,
                        }}
                        placeholder={valueplan}
                        placeholderStyle={{
                            color: colors.newGreen2,
                            fontSize:9,
                            fontFamily:"Mitr-Regular",
                            textAlign:"center",
                            justifyContent:'space-between'
                        }}
                        labelStyle={{
                            fontFamily:"Mitr-Regular",
                            color: colors.newGreen2,
                            textAlign:"center",
                            fontSize:10,
                            justifyContent:'space-between'
                        }}
                        listItemLabelStyle={{
                            color: colors.newGreen2,
                            textAlign:"center",
                            fontSize:10,
                            fontFamily:"Mitr-Regular",
                        }}
                        selectedItemLabelStyle={{
                            fontWeight: "bold"
                        }}
                        zIndex={99}
                    />
                    <TouchableOpacity style={styles.timeInput} onPress={showTimePicker}>
                        <Text style={styles.textTime}>{date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit',hour12: true})}</Text>
                    </TouchableOpacity>
                    <Image style={{alignSelf:"center",marginLeft:5}}source={require("../assets/images/myplantclock.png")}/>
                    
                    
                    
                </View>
                {isPickerShow &&(
                <DateTimePicker
                            testID="dateTimePicker"
                            value={date}
                            display="compact"
                            mode="time"
                            is24Hour={false}
                            onChange={onChange}
                            accentColor ={colors.newGreen2}
                            style={{marginRight:100,marginTop:-70}}  
                    />
                )}                         
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    cardContent: {
      width:350,
      fontFamily: 'Mitr-Regular',
      fontSize: 23,
      height: 100,
      backgroundColor: "#FFFFFF",
      borderRadius: 25,
      shadowColor: colors.lightGray,
      shadowOffset: {width: 0, height: 0},
      shadowOpacity: 1,
      shadowRadius: 8,
      marginTop: 10,
      marginBottom: 6,
      marginLeft: 16,
      marginRight: 16,
      zIndex:1
    },
    cardHeader :{
        display: 'flex',
        flexDirection:'row',
        marginTop:15,
    },
    fertilizerSmallCard : {
        backgroundColor: colors.lightGray,
        borderRadius:25,
        height:40,
        width:290,
        marginLeft:15,
        flexDirection :'row',
        zIndex:1,
        // justifyContent:'flex-start'
    },
    fertilizerTitle :{
        fontFamily:'Mitr-Regular',
        color:colors.lightGray,
        marginBottom:5,
        marginLeft:30,
        fontSize:15,
    },
    fertilizerBell :{
        justifyContent:"center",
        marginLeft:215
    },
    pesticideSmallCard : {
        backgroundColor: colors.brown,
        borderRadius:25,
        height:40,
        width:290,
        marginLeft:15,
        flexDirection :'row',
        zIndex:1,
    },
    pesticideTitle :{
        fontFamily:'Mitr-Regular',
        color:colors.brown,
        marginBottom:5,
        marginLeft:30,
        fontSize:15,
    },
    pesticideBell :{
        justifyContent:"center",
        marginLeft:222
    },
    dropdownSchedule : {
      width:120,
      height:25,
      marginTop:7.5,
      marginLeft:7.5,
      backgroundColor:'#FFFFFF',
      borderRadius:25,
      borderColor:"#FFFFFF",
      fontFamily:"Mitr-Regular",
    },
    timeInput :{
        width: 120,
        height: 25,
        marginTop:7.5,
        marginLeft:-155,
        backgroundColor:"#FFFFFF",
        borderRadius:25,
        zIndex:99,
      },
    textTime:{
        color: colors.newGreen2,
        fontSize:14,
        fontFamily:"Mitr-Regular",
        textAlign:"center",
        justifyContent:'space-between'
    }

})