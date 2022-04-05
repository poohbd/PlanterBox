import React from 'react';
import { View, Text, StyleSheet, TextInput,Dimensions,Image } from 'react-native';
import colors from '../assets/colors/colors';
import DropDownPicker from 'react-native-dropdown-picker';
import LightDropdown from './LightDropdown';
import Slider from '@react-native-community/slider';

export default function LightForm ({}){
    return(
        <View style={styles.bigCard}>
            <View style={styles.circleCard}>
            <Text style={styles.circleCardText}>48%</Text>
            </View>
            <Text style={styles.cardWatering}>LIGHT EXPOSURE</Text>
            <LightDropdown zIndex={300}/>
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
                <Text style={styles.smText}>20,000 LUX</Text>
                <Image style={styles.image} source = {require("../assets/images/lightlogo.png")}/>
                <Slider
                    style={{width: 120, height: 40}}
                    minimumValue={0}
                    maximumValue={1}
                    minimumTrackTintColor="#C8A805"
                    maximumTrackTintColor="#000000"
                    value={0.5}
                    marginTop={6}
                    marginLeft={45}
                />
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
        marginTop: 100,
        zIndex: 3
    },
    mediumCard: {
        width: 200,
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