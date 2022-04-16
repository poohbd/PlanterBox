import * as React from 'react';
import { View, Text, StyleSheet, Image,TouchableOpacity,TextInput,Button,Modal,Alert,Dimensions} from 'react-native';
// import { HeaderBackButton } from 'react-navigation';
import colors from '../assets/colors/colors';
import FlatButton from '../components/button';
import axios from 'axios';

const deviceWidth = Dimensions.get('screen').width;
const deviceHeight = Dimensions.get('screen').height;

export default UserProfileHome = ({route, navigation}) => {
    /*const UU = route.params;
    const UserID = UU.UserID;
    console.log(UserID);

    const getUserFromApi = async () => {
        try{
            const response = await axios.get('http://localhost:3000/user/getuser'+ UserID);
            console.log(response);
        } catch {
            console.error(error);
        }
    }
    console.log(getUserFromApi.response);*/
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Menu')}>
                <View>
                    <Text style={styles.buttonText}>BACK</Text>
                </View>
            </TouchableOpacity>
            <View style={styles.space}/><View style={styles.space}/>
            <Text style={styles.header}>FARM-O-MATIC</Text>
            <View style={styles.space} /><View style={styles.space} />
            <Text style={styles.infoname}>USERNAME</Text>
            <View style={styles.space} /><View style={styles.space} />
            <Text style={styles.infoname}>EMAIL</Text>
            <View style={styles.space} /><View style={styles.space} />
            <Text style={styles.infoname}>PASSWORD</Text>
            <View style={styles.space} /><View style={styles.space} />
            <FlatButton text="Change USERNAME/EMAIL" onPress={() => navigation.navigate('Register')} /> 
        </View>
        
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
    },
    image :{
        marginBottom: 30,
        alignSelf:'center',
    },
    header: {
        fontFamily:'Mitr-Medium',
        fontSize:23,
        color:colors.newGreen1,
        alignSelf: 'center',
        marginBottom:40
    },
    infoname:{
        fontFamily:'Mitr-Regular',
        fontSize:17,
        color:colors.darkGray,
        alignSelf:'center'
    },
    forgetPass: {
        fontFamily:'Mitr-Regular',
        fontSize:10,
        color:colors.lightGray,
        textAlign:'right',
        marginRight:20
    },
    baseText: {
        fontFamily:'Mitr-Regular',
        fontSize:10,
        color:colors.darkGray,
        textAlign:'center'
    },
    signup: {
        color:colors.newGreen2

    },
    space: {
        width: 20,
        height: 30,
    },
    button: {
        paddingVertical: 8,
        width: 80,
        backgroundColor: colors.newGreen2,
        borderRadius: 20,
        marginTop: deviceHeight*-0.2,
        marginLeft: deviceWidth*0.1,
    },
        buttonText: {
        color: '#FAFAFA',
        textAlign: 'center',
        fontFamily: 'Mitr-Regular',
        fontSize: 13,
    },
  });