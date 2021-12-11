import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import  {createSwitchNavigator, createAppContainer} from "react-navigation";
import LoginScreen from "./screens/LoginScreen" 
import SignUpScreen from "./screens/SignUpScreen";

import * as firebase from "firebase";
import {firebaseConfig} from "./config";

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
}else {
    firebase.app()
}

const AppSwitchNavigator = createSwitchNavigator({
    LoginScreen: LoginScreen,
    SingUpScreen: SignUpScreen,

});

constAppNavigator = createAppContainer(AppSwitchNavigator);

export default function App(){
        return <AppNavigator/>
}