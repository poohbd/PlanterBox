import * as React from 'react';
import TimeForm from '../components/timeform';
import LightForm from '../components/lightform';
import Slider from '@react-native-community/slider';
import { View} from 'react-native';

export default Example = () =>{
    return(
        <View>
        <LightForm/>
        <TimeForm/>
        </View>
    )
}