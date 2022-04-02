import * as React from 'react';
import { View, Text, StyleSheet, Image,TouchableOpacity,TextInput,Button} from 'react-native';
// import { HeaderBackButton } from 'react-navigation';
import colors from '../assets/colors/colors';
import TranspInput from '../components/accountinput';
import FlatButton from '../components/button';

export default Login = ({navigation}) => {
    const [email,setEmail] = React.useState("");
    const [password,setPassword] = React.useState("");

    return (
        <View style={styles.container}>
            <View style={styles.space}/><View style={styles.space}/><View style={styles.space}/><View style={styles.space}/><View style={styles.space}/>
            <Image style={styles.image} source = {require("../assets/images/tree.png")}/>
            <Text style={styles.header}>FARM-O-MATIC</Text>
            <Text style={styles.infoname}>EMAIL</Text>
            <TranspInput onChangeText={(email) => setEmail(email)} />
            <Text style={styles.infoname}>PASSWORD</Text>
            <TranspInput secure={true} onChangeText={(password) => setPassword(password)} />
            <Text style={styles.forgetPass}>FORGET PASSWORD?</Text>
            <View style={styles.space} />
            <FlatButton text="LOGIN" onPress={() => navigation.navigate('Register')} />
            <Text style={styles.baseText} >DON'T HAVE AN ACCOUNT?
                <Text style={styles.signup} onPress={() => navigation.navigate('Signup')}> SIGN UP</Text>
            </Text>
            <Text style={{color:colors.newGreen2,fontSize:20,textAlign:'center'}} onPress={() => navigation.navigate('QRscan')}>{'\n'} QR SCAN PAGE</Text>
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
        marginLeft:20,
        marginBottom:40
    },
    infoname:{
        fontFamily:'Mitr-Regular',
        fontSize:17,
        color:colors.darkGray,
        marginLeft:20,
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
  });