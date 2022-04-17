import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Ionicons} from '@expo/vector-icons';
import {tabBarIcon} from 'react-native-vector-icons';
import {Image} from 'react-native';

import Example from './screens/Example';
import Welcome from './screens/Welcome';
import Login from './screens/Login';
import Signup from './screens/Signup';
import Register from './screens/Register';
import SerialNumber from './screens/SerialNumber';
import QRscan from './screens/QRscan';
import SuccesfulReg from './screens/SuccessfulReg';
import Menu from './screens/Menu';
import MyPlant from './screens/MyPlant';
import Forum from './screens/Forum';
import Wiki from './screens/Wiki';
import Settings from './screens/Settings';
import Test from './screens/ChooseCard';
import ChooseCard from './screens/ChooseCard';
import Userregister from './screens/Userregister';
import UserProfile from './screens/UserProfile';
import UserProfileHome from './screens/UserProfileHome';
import UserChangeName from './screens/UserChangeName';

const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();

function Tabs_MyPlant() {
  return (
    <Tab.Navigator initialRouteName="MyPlant">
      <Tab.Screen
        name="MyPlant"
        component={MyPlant}
        options={{
          headerShown: false,
          tabBarIcon: ({size, focused, color}) => {
            return <Image source={require('./assets/images/plant-pot.png')} />;
          },
        }}
      />
      <Tab.Screen
        name="Forum"
        component={Forum}
        options={{
          headerShown: false,
          tabBarIcon: ({size, focused, color}) => {
            return <Image source={require('./assets/images/Vector.png')} />;
          },
        }}
      />
      <Tab.Screen
        name="Wiki"
        component={Wiki}
        options={{
          headerShown: false,
          tabBarIcon: ({size, focused, color}) => {
            return (
              <Image source={require('./assets/images/cib_wikipedia.png')} />
            );
          },
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          headerShown: false,
          tabBarIcon: ({size, focused, color}) => {
            return (
              <Image
                style={{width: 30, height: 30}}
                source={require('./assets/images/carbon_settings.png')}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}
function Tabs_Forum() {
  return (
    <Tab.Navigator initialRouteName="Forum">
      <Tab.Screen
        name="MyPlant"
        component={MyPlant}
        options={{
          headerShown: false,
          tabBarIcon: ({size, focused, color}) => {
            return <Image source={require('./assets/images/plant-pot.png')} />;
          },
        }}
      />
      <Tab.Screen
        name="Forum"
        component={Forum}
        options={{
          headerShown: false,
          tabBarIcon: ({size, focused, color}) => {
            return <Image source={require('./assets/images/Vector.png')} />;
          },
        }}
      />
      <Tab.Screen
        name="Wiki"
        component={Wiki}
        options={{
          headerShown: false,
          tabBarIcon: ({size, focused, color}) => {
            return (
              <Image source={require('./assets/images/cib_wikipedia.png')} />
            );
          },
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          headerShown: false,
          tabBarIcon: ({size, focused, color}) => {
            return (
              <Image
                style={{width: 30, height: 30}}
                source={require('./assets/images/carbon_settings.png')}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}

function Tabs_Wiki() {
  return (
    <Tab.Navigator initialRouteName="Wiki">
      <Tab.Screen
        name="MyPlant"
        component={MyPlant}
        options={{
          headerShown: false,
          tabBarIcon: ({size, focused, color}) => {
            return <Image source={require('./assets/images/plant-pot.png')} />;
          },
        }}
      />
      <Tab.Screen
        name="Forum"
        component={Forum}
        options={{
          headerShown: false,
          tabBarIcon: ({size, focused, color}) => {
            return <Image source={require('./assets/images/Vector.png')} />;
          },
        }}
      />
      <Tab.Screen
        name="Wiki"
        component={Wiki}
        options={{
          headerShown: false,
          tabBarIcon: ({size, focused, color}) => {
            return (
              <Image source={require('./assets/images/cib_wikipedia.png')} />
            );
          },
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          headerShown: false,
          tabBarIcon: ({size, focused, color}) => {
            return (
              <Image
                style={{width: 30, height: 30}}
                source={require('./assets/images/carbon_settings.png')}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}

function Tabs_Settings() {
  return (
    <Tab.Navigator initialRouteName="Settings">
      <Tab.Screen
        name="MyPlant"
        component={MyPlant}
        options={{
          headerShown: false,
          tabBarIcon: ({size, focused, color}) => {
            return <Image source={require('./assets/images/plant-pot.png')} />;
          },
        }}
      />
      <Tab.Screen
        name="Forum"
        component={Forum}
        options={{
          headerShown: false,
          resizeMode: 'cover',
          tabBarIcon: ({size, focused, color}) => {
            return <Image source={require('./assets/images/Vector.png')} />;
          },
        }}
      />
      <Tab.Screen
        name="Wiki"
        component={Wiki}
        options={{
          headerShown: false,
          tabBarIcon: ({size, focused, color}) => {
            return (
              <Image source={require('./assets/images/cib_wikipedia.png')} />
            );
          },
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          headerShown: false,
          tabBarIcon: ({size, focused, color}) => {
            return (
              <Image
                style={{width: 30, height: 30}}
                source={require('./assets/images/carbon_settings.png')}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="UserChangeName">
        <Stack.Screen name="Example" component={Example} options={{
          headerShown : false
        }}/>
        <Stack.Screen name="Welcome" component={Welcome} options={{
          headerShown : false
        }}/>
        <Stack.Screen name="Login" component={Login} options={{
          headerShown : false
        }}/>
        <Stack.Screen name="Signup" component={Signup} options={{
          headerShown : false
        }}/>
        <Stack.Screen name="Register" component={Register} options={{
          headerShown : false
        }}/>
        <Stack.Screen name="SerialNumber" component={SerialNumber} options={{
          headerShown : false
        }}/>
        <Stack.Screen name="QRscan" component={QRscan} options={{
          headerShown : false
        }}/>
        <Stack.Screen name="SuccesfulReg" component={SuccesfulReg} options={{
          headerShown : false
        }}/>
        <Stack.Screen name="Menu" component={Menu} options={{
          headerShown : false
        }}/>
        <Stack.Screen name="Tabs_MyPlant" component={Tabs_MyPlant} options={{
          headerShown : false
        }}/>
        <Stack.Screen name="Tabs_Forum" component={Tabs_Forum} options={{
          headerShown : false
        }}/>
        <Stack.Screen name="Tabs_Wiki" component={Tabs_Wiki} options={{
          headerShown : false
        }}/>
        <Stack.Screen name="Tabs_Settings" component={Tabs_Settings} options={{
          headerShown : false
        }}/>
        <Stack.Screen name="ChooseCard" component={ChooseCard} options={{
          headerShown : false
        }}/>
        <Stack.Screen name="Userregister" component={Userregister} options={{
          headerShown : false
        }}/>
        <Stack.Screen name="UserProfile" component={UserProfile} options={{
          headerShown : false
        }}/>
        <Stack.Screen name="UserProfileHome" component={UserProfileHome} options={{
          headerShown : false
        }}/>
        <Stack.Screen name="UserChangeName" component={UserChangeName} options={{
          headerShown : false
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
