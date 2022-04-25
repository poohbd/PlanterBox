import * as React from 'react';
import { View, Text, StyleSheet, Image,TouchableOpacity,TextInput,Button,Modal,Alert} from 'react-native';
// import { HeaderBackButton } from 'react-navigation';
import colors from '../assets/colors/colors';
import TranspInput from '../components/accountinput';
import FlatButton from '../components/button';
import Context from '../Context/context';

export default Login = ({navigation}) => {
    const [email,setEmail] = React.useState("");
    const [password,setPassword] = React.useState("");
    const validateLogin = async () =>{
        const response = await fetch("http://localhost:3000/user/login",{
            method:"POST",
            headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body:JSON.stringify({
                "email":email,
                "password":password
                })
        });
        const json = await response.json()
        console.log(json)
        //console.log(json.description.UID.UserName)

        if (json.error == false) {
            console.log(json.error);
            return navigation.navigate("Register", {"UserID":json.description.UID.UserID,"UserName":json.description.UID.UserName});
        }else {
            console.log("Incorrect password")
            console.log(email);
            console.log(password);
            console.log(json.error);
            Alert.alert(
                "Error","Incorrect Password!!!",
                [{ text: "OK", onPress: () => console.log("OK Pressed")}
                ],
                { cancelable: true }
            )
            // return (setModalVisible(true));
        }
    }

    return (
        <Context.Consumer>
        {context => (
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
                {/* <FlatButton text="LOGIN" onPress={() => navigation.navigate('Register')} /> */}
                <FlatButton text="LOGIN" onPress={() =>{
                    validateLogin(); 
                    //context.replaceNewUser(99); 
                    //console.log(context.UserID);
                }} />
                <Text style={styles.baseText} >DON'T HAVE AN ACCOUNT?
                    <Text style={styles.signup} onPress={() => navigation.navigate('Signup')}> SIGN UP</Text>
                </Text>
                <Text style={{color:colors.newGreen2,fontSize:20,textAlign:'center'}} onPress={() => navigation.navigate('QRscan')}>{'\n'} QR SCAN PAGE</Text>
            </View>
        )}
        </Context.Consumer>
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