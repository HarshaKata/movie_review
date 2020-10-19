import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList,TouchableOpacity,Image,ImageBackground } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function Header({navigation,title}) {
    return (
        
        <ImageBackground source={require('../assets/game_bg.png')} style={styles.container}>
            <MaterialIcons style={styles.button1} name="menu" size={25} color="black" onPress={()=>navigation.openDrawer()} />
            <View style={styles.container1}>
                <Image style={styles.image1} source={require('../assets/heart_logo.png')}/>
                <Text style={styles.text}>{title}</Text>
            </View>
            
        </ImageBackground>
    );
}
const styles = StyleSheet.create({
  container:{
    flexDirection:'row',
    alignItems: 'center',
    height: 56,
  },
  button1:{
    marginLeft:0,
  },
  container1: {
    padding: 90,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  image1:{
    width: 26,
    height: 26,
  },
  text: {
      paddingTop: 4,
      paddingLeft: 4,
      
  },
});
