import React, { useState } from 'react';
import { StyleSheet, Text, View} from 'react-native';


export default function Card(props) {
    return (
        <View style={styles.container}>
            <View style={styles.container1}>
                {props.children}
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
  container:{
    borderRadius:6,
    elevation:3,
    backgroundColor:'#fff',
    shadowColor:'#333',
    shadowOpacity:0.3,
    shadowRadius:2,
    marginHorizontal:4,
    marginVertical:6,
  },
  container1: {
    marginHorizontal:18,
    marginVertical:10,
  },
});
