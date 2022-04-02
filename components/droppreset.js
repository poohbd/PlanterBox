import * as React from 'react';
import { useState } from 'react';
import { Button, Menu, Divider, Provider } from 'react-native-paper';
import { View, Text, StyleSheet, Image,TouchableOpacity,Dimensions,ImageBackground} from 'react-native';


export default function DropPreset({visible,closeMenu}){
    return (
      <Provider>
        <View
          style={{
            paddingTop: 50,
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <Menu
            visible={visible}
            onDismiss={closeMenu}>
            <Menu.Item onPress={() => {}} title="Item 1" />
            <Menu.Item onPress={() => {}} title="Item 2" />
            <Divider />
            <Menu.Item onPress={() => {}} title="Item 3" />
          </Menu>
        </View>
      </Provider>
    );
};