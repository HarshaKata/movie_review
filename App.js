import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { StyleSheet, Text, View } from 'react-native';
import Home from './Screens/home.js';
import Navigator from './routes/drawer.js';
const getFonts=()=> Font.loadAsync({
  'nunito-regural':require('./assets/fonts/Nunito-Regular.ttf'),
  'nunito-bold':require('./assets/fonts/Nunito-Bold.ttf'),
})
export default function App() {
  const[fonts,setFont]=useState(false);
  if(fonts){
    return (
      <View style={styles.container}>
        <Navigator />
      </View>
    );
  }
  else{
    return (
      <AppLoading 
      startAsync={getFonts}
      onFinish={()=>setFont(true)}
      />
    )
    
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
