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
import TranspInput from './accountinput';
import FlatButton from './button';
import {Formik,Form ,ErrorMessage, useField } from 'formik';
import * as yup from 'yup';

export const TextField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <View>
      <input
        className={`form-control shadow-none ${meta.touched && meta.error && 'is-invalid'}`}
        {...field} {...props}
        autoComplete="off"
      />
      <ErrorMessage component="div" name={field.name} className="error" />
    </View>
  )
}