import * as React from 'react';
import { View, Text, StyleSheet, Image,TouchableOpacity,TextInput } from 'react-native';
import colors from '../assets/colors/colors';
import TranspInput from '../components/accountinput';
import PasswInput from '../components/passwordinput';

export default function Login(){
    const [email,setEmail] = React.useState("");
    const [password,setPassword] = React.useState("");

    return (
        <View style={styles.container}>
            <Image style={styles.image} source = {require("../assets/images/tree.png")}/>
            <Text style={styles.header}>FARM-O-MATIC</Text>
            <Text style={styles.infoname}>EMAIL</Text>
            <TranspInput onChangeText={(email) => setEmail(email)} />
            <Text style={styles.infoname}>PASSWORD</Text>
            <TranspInput onChangeText={(password) => setPassword(password)} />
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
    
  });