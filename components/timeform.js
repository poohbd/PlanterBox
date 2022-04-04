import React from 'react';
import { View, Text, StyleSheet, TextInput,Dimensions,Image } from 'react-native';
import colors from '../assets/colors/colors';
import DropDownPicker from 'react-native-dropdown-picker';
import WateringDropdown from './WateringDropdown';


export default function TimeForm ({}){
    return(
        <View style={styles.bigCard}>
            <View style={styles.circleCard}>
            <Text style={styles.circleCardText}>46%</Text>
            </View>
            <Text style={styles.cardWatering}>WATERING</Text>
            <WateringDropdown zIndex={300}/>
                <View style={styles.mediumCard}>
                    <Text style={styles.cardContent}>   FROM  </Text>
                    <View style={styles.smallCard}>
                        <View style={styles.textInputContainer}>
                            <TextInput placeholder='TIME'/>
                        </View>
                    </View>
                    <Text style={styles.cardContent}> TO  </Text>
                    <View style={styles.smallCard}>
                        <View style={styles.textInputContainer}>
                            <TextInput placeholder='TIME'/>
                        </View>
                    </View>
                </View>
                <Text style={styles.smText}>Soil Moisture</Text>
                <Image style={styles.image} source = {require("../assets/images/Waterlogo.png")}/>
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
        width: 200,
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
    textInputContainer:{
        fontSize: 10
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