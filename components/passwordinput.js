import React, {useState} from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { TextInput } from 'react-native-paper';
import colors from '../assets/colors/colors';

export default function PasswInput ({onChangeText}){
    const [passwordVisible, setPasswordVisible] = useState(true);

    return(
        <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    selectionColor={colors.newGreen3}
                    placeholder=""
                    placeholderTextColor="#003f5c"
                    autoCapitalize='none'
                    secureTextEntry={passwordVisible}
                    onChangeText={onChangeText}
                    right={<TextInput.Icon name={passwordVisible ? "eye" : "eye-off"} onPress={() => setPasswordVisible(!passwordVisible)} />}
                />
        </View>
    )
}

const styles = StyleSheet.create({
    inputView: {
        borderBottomWidth:0.5,
        borderBottomColor:"#CAD0D0",
        width: "85%",
        height: 30,
        marginBottom: 20,
        marginLeft: 20,
    },
    TextInput: {
        fontFamily:'Mitr-Regular',
        fontSize:14,
        color:colors.newGreen2,
        height: 30,
        flex: 1,
        padding: 0,
    }
})