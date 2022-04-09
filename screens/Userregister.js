import * as React from 'react';
import { View, Text, StyleSheet, Image,TouchableOpacity,TextInput,Button,Modal,Alert} from 'react-native';
// import { HeaderBackButton } from 'react-navigation';
import colors from '../assets/colors/colors';
import TranspInput from '../components/accountinput';
import FlatButton from '../components/button';
import {Formik} from 'Formik';
import * as yup from 'yup';
const loginValidateSchema = yup.object().shape({
        email: yup.string().email('Email Address is required'),
        password: yup.string().min(8,{min}) => `Password must be at least ${min} characters`.required('Password is required').matches(
            "^(?=.*[A-Za-z])(?=.*d)(?=.*[@$!%*#?&])[A-Za-zd@$!%*#?&]{8,}$",
            "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
          )
});
export default Userregister = ({navigation}) => {
    const [username,setUsername] = React.useState("");
    const [email,setEmail] = React.useState("");
    const [password,setPassword] = React.useState("");
    
    const validateRegister = async () =>{
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
        if (json.error == false) {
            console.log(json.error);
            return navigation.navigate("Register");
        }else {
            console.log("Incorrect password")
            console.log(email);
            console.log(password);
            console.log(json.error);
            Alert.alert(
                "Warning","Incorrect Password!!!",
                { text: "OK", onPress: () => this.setState({email:""})}
            )
            // return (setModalVisible(true));
        }
    }

    return (
        <Formik
            initialValues={{ email: '',password: '' }}
            validateOnMount={true}
            onSubmit={values => console.log(values)}
        >
            {({ handleChange, handleBlur, handleSubmit, values,touched,errors,isValid }) => (
        <View style={styles.container}>
            <Text style={styles.header}>FARM-O-MATIC</Text>
            <Text style={styles.infoname}>USERNAME</Text>
            <TranspInput onChangeText={(username) => setUsername(username)}
                onChangeText={handleChange('username')}
                onBlur={handleBlur('username')}
                value={values.username} />
            {(errors.username && touched.username)&& <Text style={styles.errors}></Text>}
            <Text style={styles.infoname}>EMAIL</Text>
            <TranspInput onChangeText={(email) => setEmail(email)}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email} />
            {(errors.email && touched.email)&& <Text style={styles.errors}></Text>}
            <Text style={styles.infoname}>PASSWORD</Text>
            <TranspInput secure={true} onChangeText={(password) => setPassword(password)}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password} />
            {(errors.password && touched.password)&& <Text style={styles.errors}></Text>}
            <Text style={styles.infoname}>RE ENTER PASSWORD</Text>
            <TranspInput secure={true} onChangeText={(password) => setPassword(password)} />
            <Text style={styles.forgetPass}>FORGET PASSWORD?</Text>
            <View style={styles.space} />
            {/* <FlatButton text="LOGIN" onPress={() => navigation.navigate('Register')} /> */}
            <FlatButton 
                rounded disabled={!isValid}
                text="LOGIN" onPress={validateLogin} />
        </View>
        )}
        </Formik>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 0.6,
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
        marginTop:0
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
    errors:{
        fontFamily:'Mitr-Regular',
        fontSize:10,
        color:colors.red,
        margintTop:5
    }
  });