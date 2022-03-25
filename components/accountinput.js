import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import colors from '../assets/colors/colors';

export default function TranspInput ({onChangeText}){
    return(
        <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    selectionColor={colors.newGreen3}
                    placeholder=""
                    placeholderTextColor="#003f5c"
                    autoCapitalize='none'
                    onChangeText={onChangeText}
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