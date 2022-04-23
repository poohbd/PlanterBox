import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  Button,
  Modal,
  Alert,
} from 'react-native';
// import { HeaderBackButton } from 'react-navigation';
import colors from '../assets/colors/colors';
import TranspInput from '../components/accountinput';
import FlatButton from '../components/button';
import {Formik} from 'formik';
import * as yup from 'yup';
import UserProfile from './UserProfile';
import axios from 'axios';

const a ={};

export default Userregister = ({navigation}) => {
  const loginValidateSchema = yup.object().shape({
    email: yup.string().email('         Email Address is required')
    .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,'         Invalid Email Address'),
    password: yup
      .string()
      .matches(/\w*[a-z]\w*/, '         Password must have a small letter')
      .matches(/\w*[A-Z]\w*/, '         Password must have a capital letter')
      .matches(/\d/, '         Password must have a number')
      .matches(
        /[!@#$%^&*()\-_"=+{}; :,<.>]/,
        '         Password must have a special character',
      )
      .min(8, ({min}) => `         Password must be at least ${min} characters`)
      .required('         Password is required'),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password')], '         Passwords do not match')
      .required('         Confirm password is required'),
  });
     const [username, setUsername] = React.useState('');
     const [email, setEmail] = React.useState('');
     const [password, setPassword] = React.useState('');
     const [userresult, setUserresult] = React.useState('');

     const validateRegister = async (values) => {
      try {
        const {email,username,password} = values;
        const config = {
          method: 'POST',
          url: 'http://192.168.1.44:3000/user/register',
          data: {
            email: email,
            username: username,
            password: password,
          },
        };
        const setting = await axios
          .request(config)
          .then(res => setUserresult(res.data));
        console.log(userresult);

        if (userresult.error == false) {
          console.log(userresult.error);
          return navigation.navigate('UserProfile', {"UserID":userresult.description.UserID});
        } else {
          if (userresult.description.existedEmail == true) {
            Alert.alert([
            'Error',"This email is already used!!!",
                { text: "OK", onPress: () => console.log("OK Pressed")}],
            { cancelable: false }
            )
          }else if (userresult.description.existedUsername == true){
            Alert.alert([
            'Error',"This username is already used!!!",
                { text: "OK", onPress: () => console.log("OK Pressed")}],
            { cancelable: false }
            )
          }
        } 
      } catch (error){
        alert(error.message);
      }
     };

  return (
    
    <Formik
      initialValues={{
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
      }}
      validationSchema={loginValidateSchema}
      onSubmit={values => {validateRegister(values)}
    }
     >
      {({handleChange, handleBlur, handleSubmit, values, errors, touched}) => (
        <View style={styles.container}>
          <Text style={styles.header}>FARM-O-MATIC</Text>
          <View style={styles.space}/><View style={styles.space}/>
          <Text style={styles.infoname}>USERNAME</Text>
          <TranspInput
            onChangeText={handleChange('username')}
            onBlur={handleBlur('username')}
            value={values.username}
          />
          {/* {errors.username && touched.username && (
            <Text style={styles.errors}></Text>
          )} */}
          <Text style={styles.infoname}>EMAIL</Text>
          <TranspInput
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            value={values.email}
          />
          {errors.email && touched.email ? <Text>{errors.email}</Text> : null}
          <Text style={styles.infoname}>PASSWORD</Text>
          <TranspInput
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            value={values.password}
            secure={true}
          />
          {errors.password && touched.password ? (
            <Text style={styles.errors}>{errors.password}</Text>
          ) : null}
          <Text style={styles.infoname}>RE ENTER PASSWORD</Text>
          <TranspInput
            onChangeText={handleChange('confirmPassword')}
            onBlur={handleBlur('confirmPassword')}
            value={values.confirmPassword}
            secure={true}
          />
          {errors.confirmPassword && touched.confirmPassword ? (
            <Text style={styles.errors}>{errors.confirmPassword}</Text>
          ) : null}
          {/* <Text style={styles.forgetPass}>FORGET PASSWORD?</Text>
          <View style={styles.space} /> */}
          {/* <FlatButton text="LOGIN" onPress={() => navigation.navigate('Register')} /> */}
          <Text style={styles.privacyText}>BY CREATING AN ACCOUNT, YOU AGREE TO OUR</Text>
          <Text style={styles.privacyText}>TERMS AND CONDITIONS AND PRIVACY POLICY</Text>
          <View style={styles.space}/>
          <FlatButton onPress={handleSubmit} text="SIGNUP" title="SIGNUP" color='white' height='20'/>
          <Text style={styles.privacyText}>ALREADY HAVE AN ACCOUNT?<Text style={styles.loginText} onPress={() => navigation.navigate('Login')}> LOG IN</Text></Text>
        </View>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
  },
  image: {
    marginBottom: 30,
    alignSelf: 'center',
  },
  header: {
    fontFamily: 'Mitr-Medium',
    fontSize: 23,
    color: colors.newGreen1,
    marginLeft: 20,
    marginTop: 0,
  },
  infoname: {
    fontFamily: 'Mitr-Regular',
    fontSize: 17,
    color: colors.darkGray,
    marginLeft: 20,
    marginTop: 0
  },
  forgetPass: {
    fontFamily: 'Mitr-Regular',
    fontSize: 10,
    color: colors.lightGray,
    textAlign: 'right',
    marginRight: 20,
  },
  baseText: {
    fontFamily: 'Mitr-Regular',
    fontSize: 10,
    color: colors.darkGray,
    textAlign: 'center',
  },
  signup: {
    color: colors.newGreen2,
  },
  space: {
    width: 20,
    height: 30,
  },
  errors: {
    fontFamily: 'Mitr-Regular',
    fontSize: 10,
    color: colors.red,
    marginTop: 5,
  },
  signupContainer:{
    color: colors.newGreen2,
    height:40,
    width:100,
    justifyContent:'center'
  },
  Button:{
    borderRadius:8,
    height:30,
    width:100,
    backgroundColor: '#f01d71'
  },
  privacyText:{
    fontFamily: 'Mitr-Regular',
    fontSize: 10,
    color: colors.darkGray,
    alignSelf: 'center',
    marginTop: 0
  },
  loginText:{
    fontFamily: 'Mitr-Regular',
    fontSize: 10,
    color: 'green',
    alignSelf: 'center',
    marginTop: 0
  }
});
