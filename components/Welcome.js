import * as React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import welcomepageData from '../assets/data/welcomepageData';
import colors from '../assets/colors/colors';

export default Welcome = () =>{
    return (
        <View>
            <View style={{top:0,left:0}}>
                <Image source={require('../assets/images/uppercircle.png')}></Image>
            </View>
            <View style={{alignItems:'center',top:225}}>
                <Image source={require('../assets/images/tree.png')}></Image>
                <Text style={styles.intro}>{'\n'}WELCOME TO FARM-O-MATIC</Text>
                <Text style={styles.intro}>A PLATFORM THAT WILL MAKE PLANTING EASIER</Text>
            </View>
            <View  style={{position:'absolute',top:500,right:0}}>
                <Image source={require('../assets/images/lowercircle.png')}></Image>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'column',
    },
    intro:{
        fontFamily:'Mitr-Regular',
        fontSize:13,
        lineHeight:30,
        color:colors.darkGray
    }
});