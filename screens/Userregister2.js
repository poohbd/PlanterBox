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
import {Formik,Form} from 'formik';
import * as yup from 'yup';
import { TextField } from '../components/TextField';

export default Userregister2 = ({navigation})=> {
    const validate = yup.object({
      firstName: yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
      lastName: yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
      email: yup.string()
        .email('Email is invalid')
        .required('Email is required'),
      password: yup.string()
        .min(6, 'Password must be at least 6 charaters')
        .required('Password is required'),
      confirmPassword: yup.string()
        .oneOf([yup.ref('password'), null], 'Password must match')
        .required('Confirm password is required'),
    })
    return (
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          password: '',
          confirmPassword: ''
        }}
        validationSchema={validate}
        onSubmit={values => {
          console.log(values)
        }}
      >
        {formik => (
          <div>
            <Text>Sign Up</Text>
            <Form>
              <TextField label="First Name" name="firstName" type="text" />
              <TextField label="last Name" name="lastName" type="text" />
              <TextField label="Email" name="email" type="email" />
              <TextField label="password" name="password" type="password" />
              <TextField label="Confirm Password" name="confirmPassword" type="password" />
              <button className="btn btn-dark mt-3" type="submit">Register</button>
              <button className="btn btn-danger mt-3 ml-3" type="reset">Reset</button>
            </Form>
          </div>
        )}
      </Formik>
    )
  }