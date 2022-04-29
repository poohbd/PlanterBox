import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View, Button, TouchableOpacity,Image,Platform } from "react-native";
import PlantNameInput from "./plantnameinput";
import colors from '../assets/colors/colors';
import { launchImageLibrary } from 'react-native-image-picker';
// const createFormData = (photo, body = {}) => {
//   const data = new FormData();

//   data.append('photo', {
//     name: photo.fileName,
//     type: photo.type,
//     uri: Platform.OS === 'ios' ? photo.uri.replace('file://', '') : photo.uri,
//   });

//   Object.keys(body).forEach((key) => {
//     data.append(key, body[key]);
//   });

//   return data;
// };
const Notification = ({notiVisible,closeNoti}) => {
    // const [plantname, setPlantName] = React.useState('');
    // const [response, setResponse] = React.useState(null);
  
    // const handleChoosePhoto = () => {
    //   launchImageLibrary({
    //     selectionLimit: 1,
    //     mediaType: 'photo',
    //     includeBase64: false,
    //   }, setResponse)
    // };
  
    // const handleUploadPhoto = () => {
    //   fetch(`${SERVER_URL}/api/upload`, {
    //     method: 'POST',
    //     body: createFormData(photo, { userId: '123' }),
    //   })
    //     .then((response) => response.json())
    //     .then((response) => {
    //       console.log('response', response);
    //     })
    //     .catch((error) => {
    //       console.log('error', error);
    //     });
    // };
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={notiVisible}
        // onRequestClose={() => {
        //   Alert.alert("Modal has been closed.");
        //   closeModal;
        // }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.infoname}>NOTIFICATIONS</Text>
            {/* <PlantNameInput placeholder="EX.SUNFLOWER" style={{alignSelf:'center'}} onChangeText={(plantname) => setPlantName(plantname)} />
            {response?.assets &&
                response?.assets.map(({ uri }) => (
                    <View key={uri} style={styles.image}>
                        <Image
                            resizeMode="cover"
                            resizeMethod="scale"
                            style={{ width: 200, height: 200 }}
                            source={{ uri: uri }}
                        />
                    </View>
            ))}
            <TouchableOpacity style={{marginBottom:20}} onPress={handleChoosePhoto}>
              <Image source={require("../assets/images/save.png")} />
            </TouchableOpacity> */}
            <Text style={styles.infoname}>FERTILIZER TIME FOR...</Text>
            <Text style={styles.infoname}>PESTICIDE TIME FOR...</Text>
            <TouchableOpacity onPress={closeNoti}>
                <Text style={styles.infoname}>{'\n'}Close</Text>
            </TouchableOpacity>
            
          </View>
        </View>
      </Modal>
      {/* <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>Show Modal</Text>
      </Pressable> */}
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  infoname: {
    color: colors.newGreen2,
    textAlign: 'center',
    fontFamily: 'Mitr-Regular',
    fontSize: 15,
  },
  image: {
    marginVertical: 24,
    alignItems: 'center',
  }
});

export default Notification;