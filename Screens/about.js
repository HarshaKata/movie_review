import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
export default function About({navigation}) {
  return (
    <View style={styles.content1}>
      <Text>This is a movie review website</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  content1: {
    padding: 18,
  },
});
