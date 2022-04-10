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

export default Userregister = ({navigation}) => {
  const loginValidateSchema = yup.object().shape({
    email: yup.string().email('         Email Address is required'),
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

  //   const validateRegister = async () => {
  //     const response = await fetch('http://localhost:3000/user/login', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //         Accept: 'application/json',
  //       },
  //       body: JSON.stringify({
  //         email: email,
  //         password: password,
  //       }),
  //     });
  //     const json = await response.json();
  //     console.log(json);
  //     if (json.error == false) {
  //       console.log(json.error);
  //       return navigation.navigate('Register');
  //     } else {
  //       console.log('Incorrect password');
  //       console.log(email);
  //       console.log(password);
  //       console.log(json.error);
  //       Alert.alert('Warning', 'Incorrect Password!!!', {
  //         text: 'OK',
  //         onPress: () => this.setState({email: ''}),
  //       });
  //       // return (setModalVisible(true));
  //     }
  //   };

  return (
    <Formik
      initialValues={{
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
      }}
      validationSchema={loginValidateSchema}
      onSubmit={values => console.log(values)}>
      {({handleChange, handleBlur, handleSubmit, values, errors, touched}) => (
        <View style={styles.container}>
          <Text style={styles.header}>FARM-O-MATIC</Text>
          <View style={styles.space}/><View style={styles.space}/>
          <Text style={styles.infoname}>USERNAME</Text>
          <TranspInput onChangeText={(username) => setUsername(username)} />
          <TextInput
            onChangeText={handleChange('username')}
            onBlur={handleBlur('username')}
            value={values.username}
          />
          {/* {errors.username && touched.username && (
            <Text style={styles.errors}></Text>
          )} */}
          <Text style={styles.infoname}>EMAIL</Text>
          <TranspInput onChangeText={(email) => setEmail(email)} />
          <TextInput
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            value={values.email}
          />
          {errors.email && touched.email ? <Text>{errors.email}</Text> : null}
          <Text style={styles.infoname}>PASSWORD</Text>
          <TranspInput onChangeText={(password) => setPassword(password)} />
          <TextInput
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            value={values.password}
          />
          {errors.password && touched.password ? (
            <Text style={styles.errors}>{errors.password}</Text>
          ) : null}
          <Text style={styles.infoname}>RE ENTER PASSWORD</Text>
          <TranspInput onChangeText={(confirmPassword) => setconfirmPassword(confirmPassword)} />
          <TextInput
            onChangeText={handleChange('confirmPassword')}
            onBlur={handleBlur('confirmPassword')}
            value={values.confirmPassword}
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
    margintTop: 5,
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
