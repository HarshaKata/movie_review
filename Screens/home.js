import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList,TouchableOpacity, Modal, Keyboard, TouchableWithoutFeedback } from 'react-native';
import Card from '../shared/card';
import { MaterialIcons } from '@expo/vector-icons';
import ReviewForm from './reviewForms';
export default function Home({navigation}) {
    const[model,setModel]=useState(false);
    const[reviews,setReviews]=useState([
        {title:'RRR',rating:5,lead:'NTR',key:1},
        {title:'Kanthri',rating:4,lead:'NTR',key:2},
        {title:'Janata Garage',rating:5,lead:'NTR',key:3}
    ]);
    const addReview=(review)=>{
        review.key=Math.random().toString();
        setReviews((existingReviews)=>{
            return [review,...existingReviews]; 
        });
        setModel(false);
    }
    return (
        <View style={styles.content}>
            <Modal visible={model} animationType='slide'>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View>
                        <MaterialIcons name="close" size={25} color="black" onPress={()=>setModel(false)} />    
                        <ReviewForm addReview={addReview}/>
                    </View>
                </TouchableWithoutFeedback>
                
            </Modal>
            <MaterialIcons name="add" size={25} color="black" onPress={()=>setModel(true)} />
            <FlatList
                data={reviews}
                renderItem={({item})=>(
                    <TouchableOpacity onPress={()=>navigation.navigate('Review',item)}>
                        <Card>
                            <Text>{item.title}</Text>
                        </Card>
                        
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}
const styles = StyleSheet.create({
  content: {
    padding: 18,
    marginTop: 25,
  },
});
