import React, {useState} from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { TextInput } from 'react-native-paper';
import colors from '../assets/colors/colors';

export default function PlantNameInput ({placeholder,onChangeText}){
    return(
        <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    mode="outlined"
                    selectionColor={colors.newGreen2}
                    placeholder={placeholder}
                    placeholderTextColor={colors.newGreen2}
                    outlineColor="#97BFC2"
                    activeOutlineColor="#579094"
                    autoCapitalize='none'
                    autoCorrect={false}
                    autoComplete='off'
                    clearButtonMode='while-editing'
                    spellCheck={false}
                    onChangeText={onChangeText}
                />
        </View>
    )
}

const styles = StyleSheet.create({
    inputView: {
        width: 150,
        height: 37,
        marginBottom: 20,
        marginTop:10,
    },
    TextInput: {
        fontFamily:'Mitr-Regular',
        fontSize:15,
        color:colors.newGreen2,
        height: 25,
        flex: 1,
        padding: 0,
    }
})