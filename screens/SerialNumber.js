import * as React from 'react';
import { View, Text, StyleSheet, Image,TouchableOpacity,TextInput,Button,Dimensions} from 'react-native';
// import { HeaderBackButton } from 'react-navigation';
import colors from '../assets/colors/colors';
import TranspInput from '../components/accountinput';
import FlatButton from '../components/button';
import { Card } from 'react-native-paper';

const deviceWidth = Dimensions.get('screen').width;
const deviceHeight = Dimensions.get('screen').height;

export default SeriaNumber = ({navigation}) => {
    const [email,setEmail] = React.useState("");
    const [password,setPassword] = React.useState("");

    return (
        <View style={styles.container}>
            <View style={{ flex: 1, alignItems: 'center' }}>
                <Text style={styles.header} >PLANT REGISTER{'\n'}</Text>
            <View style={styles.card}>
                <View style={styles.cardContent}>
                    <Text style={styles.cardContent}>PLEASE LOOK FOR THE</Text>
                    <Text style={styles.cardContent}>SERIAL NUMBER ON THE</Text>
                    <Text style={styles.cardContent}>SIDE OF THE PLANTERBOX{'\n'}</Text>
                </View>
            </View>
                 <View style={styles.headerContainer}>
                        <View style={styles.textInputContainer}>
                            <TextInput placeholder='SERIAL NUMBER'/>
                        </View>
                </View>
                <TouchableOpacity style={styles.buttonContainer2} onPress={() => navigation.navigate('SuccesfulReg')}>
                      <View>
                        <Text style={styles.buttonText}>NEXT</Text>
                      </View>
                    </TouchableOpacity>
            <Text style={styles.baseText} >
                <Text style={styles.signup} onPress={() => navigation.navigate('QRscan')}>OR REGISTER WITH QR CODE</Text>
            </Text>
           </View> 
        </View>
        
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 0.5,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
    },
    image :{
        marginBottom: 30,
        alignSelf:'center',
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
        textAlign:'center',
        marginTop: 15
    },
    signup: {
        color:colors.newGreen2

    },
    space: {
        width: 20,
        height: 30,
      },
    header: {
        fontFamily:'Mitr-Medium',
        fontSize:23,
        color:colors.newGreen1,
        marginTop:100,
    },
    card: {
        width: 300,
        height:150,
        borderRadius: 6,
        backgroundColor: 'lightgrey',
        fontFamily: 'Mitr-Regular',
        fontSize: 23,
        paddingTop:25,
        alignSelf:'center',
        marginTop: deviceHeight*0.2
    
      },
      cardContent: {
        textAlign: 'center',
        fontFamily: 'Mitr-Regular',
        fontSize: 18,
        lineHeight: 35,
        color: colors.darkGray,
      },
      headerContainer:{
        width: 200,
        height: 40,
        backgroundColor: 'lightgrey',
        alignItems: 'center',
        borderRadius: 18,
        marginTop: 40
      },
      textInputContainer:{
        fontSize: 18,
        lineHeight: 30,
        color: colors.darkGray,
        marginTop: 10,
        alignItem: 'center'
      },
      buttonText: {
        color: '#FAFAFA',
        textAlign: 'center',
        fontFamily: 'Mitr-Regular',
        fontSize: 13,
      },
      buttonContainer2: {
        paddingVertical: 8,
        width: 80,
        justifyContent: 'space-between',
        backgroundColor: colors.newGreen2,
        borderRadius: 20,
        marginTop: 20,
        marginLeft: deviceWidth*0,
      }
    })