import * as React from 'react';
import { View, Text, StyleSheet, Image,TouchableOpacity,TextInput,Button,Modal,Alert,Dimensions} from 'react-native';
// import { HeaderBackButton } from 'react-navigation';
import colors from '../assets/colors/colors';
import FlatButton from '../components/button';
import axios from 'axios';
import Context from '../Context/context';

const deviceWidth = Dimensions.get('screen').width;
const deviceHeight = Dimensions.get('screen').height;

export default UserProfile = ({route, navigation}) => {
    const [user,setUser] = React.useState("");
    const UU = route.params;
    const UserID = UU.UserID;
    const UserName = UU.UserName;

    const getUserFromApi = async () => {
        try{
            const response = await axios.get('http://localhost:3000/user/getuser/'+UserID);
            setUser(response.data);
        } catch (error){
            console.error(error);
        }
    }
    getUserFromApi()
    
    return (
        <Context.Consumer>
        {context => (
        <View style={styles.container}>
            <View style={styles.space}/><View style={styles.space}/>
            <Text style={styles.header}>FARM-O-MATIC</Text>
            <View style={styles.space} /><View style={styles.space} />
            <Text style={styles.infoname}>USERNAME</Text>
            <Text style={styles.infoname2}>{user.UserName}</Text>
            <View style={styles.space} /><View style={styles.space} />
            <Text style={styles.infoname}>EMAIL</Text>
            <Text style={styles.infoname2}>{user.Email}</Text>
            <View style={styles.space} /><View style={styles.space} />
            
            {/* <FlatButton text="LOGIN" onPress={() => navigation.navigate('Register')} /> */}
            <TouchableOpacity style={styles.button} onPress={() => {
                navigation.navigate('Register',{"UserID":UserID,"UserName":UserName});
                context.replaceNewUser(UserID);
                context.replaceUserName(UserName);
            }}>
                <View>
                    <Text style={styles.buttonText}>NEXT</Text>
                </View>
            </TouchableOpacity>
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
        alignSelf: 'center',
        marginBottom:40
    },
    infoname:{
        fontFamily:'Mitr-Regular',
        fontSize:17,
        color:colors.darkGray,
        alignSelf:'center'
    },
    infoname2:{
        fontFamily:'Mitr-Regular',
        fontSize:17,
        color:colors.newGreen4,
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
        marginTop: deviceHeight*0.3,
        marginLeft: deviceWidth*0.7,
    },
        buttonText: {
        color: '#FAFAFA',
        textAlign: 'center',
        fontFamily: 'Mitr-Regular',
        fontSize: 13,
    },
  });