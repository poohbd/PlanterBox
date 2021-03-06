import * as React from 'react';
import { View, Text, Alert,StyleSheet, Image,TouchableOpacity,TextInput,Button,Dimensions} from 'react-native';
// import { HeaderBackButton } from 'react-navigation';
import colors from '../assets/colors/colors';
import TranspInput from '../components/accountinput';
import FlatButton from '../components/button';
import { Card } from 'react-native-paper';
import Context from '../Context/context';

const deviceWidth = Dimensions.get('screen').width;
const deviceHeight = Dimensions.get('screen').height;

export default SerialNumber = ({navigation}) => {
    const [serialNumber,setSerialNumber] = React.useState();
    const addBox = async (UserID) =>{
      const response = await fetch("http://localhost:3000/user/addbox/"+UserID,{
          method:"POST",
          headers : { 
              'Content-Type': 'application/json',
              'Accept': 'application/json'
          },
          body:JSON.stringify({
              "serialNumber":serialNumber,
              })
      });
      const json = await response.json()
      console.log(json)
      if (json.serialNumber != null) {
          return navigation.navigate("SuccesfulReg");
      }else {
          console.log("Box is already registered!")
          Alert.alert(
              "Error","Box is already registered!",
              [{ text: "OK", onPress: () => console.log("OK Pressed")}
              ],
              { cancelable: true }
            )
      }
  }

    return (
        <Context.Consumer>
        {context => (
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
                            <TextInput onChangeText={(serialNumber) => setSerialNumber(parseInt(serialNumber))} placeholder ='SERIAL NUMBER'/>
                        </View>
                </View>
                <TouchableOpacity style={styles.buttonContainer2} onPress={()=>addBox(context.UserID)}>
                      <View>
                        <Text style={styles.buttonText}>NEXT</Text>
                      </View>
                    </TouchableOpacity>
            <Text style={styles.baseText} >
                <Text style={styles.signup} onPress={() => navigation.navigate('QRscan')}>OR REGISTER WITH QR CODE</Text>
            </Text>
           </View> 
        </View>
        )}
        </Context.Consumer>
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