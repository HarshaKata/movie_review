import React from 'react';
import { StyleSheet, Text, View,Button,Image } from 'react-native';
import Card from '../shared/card';
export default function Review({navigation}) {
    const images={
        ratings:{
            '5': require('../assets/rating-5.png'),
            '4': require('../assets/rating-4.png'),
            '3': require('../assets/rating-3.png'),
            '2': require('../assets/rating-2.png'),
            '1': require('../assets/rating-1.png'),
        }
    }
    const rating=navigation.getParam('rating')
  return (
    <View style={styles.content2}>
        <Card>
            <Text>Title: {navigation.getParam('title')}</Text>
            <Text>Lead Actor: {navigation.getParam('lead')}</Text>
            <View style={styles.rating}>
                <Text>Rating:</Text>
                <Image source={images.ratings[rating]}/>
            </View>
        </Card>
    </View>
  );
}
const styles = StyleSheet.create({
  content2: {
    padding: 18,
  },
  rating: {
      flexDirection: 'row',
      borderTopColor: '#eee',
      borderTopWidth: 1,
  }
});