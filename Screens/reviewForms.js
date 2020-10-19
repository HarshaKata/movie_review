
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import {Formik} from 'formik';
import * as yup from 'yup';
export default function ReviewForm({addReview}) {
    const requireSchema=yup.object({
        title:yup.string().required().min(10),
        lead:yup.string().required().min(6),
        rating:yup.string().required().test((val)=>{
            return parseInt(val)<6 && parseInt(val)>0;
        })
    })
  return (
    <View>
        <Formik
            initialValues={{title:'',lead:'',rating:''}}
            validationSchema={requireSchema}
            onSubmit={(values)=>{
                addReview(values);
            }}
        >
            {(props)=>(
                <View style={styles.container5}>
                    <TextInput
                        style={styles.container6}
                        placeholder='Movie Title'
                        onChangeText={props.handleChange('title')}
                        value={props.values.title}
                        onBlur={props.handleBlur('title')}
                    />
                    <Text>{props.touched.title && props.errors.title}</Text>
                    <TextInput
                        style={styles.container6}
                        placeholder='Lead Actor'
                        onChangeText={props.handleChange('lead')}
                        value={props.values.lead}
                        onBlur={props.handleBlur('lead')}
                    />
                    <Text>{props.touched.lead && props.errors.lead}</Text>
                    <TextInput
                        style={styles.container6}
                        placeholder='Rating'
                        onChangeText={props.handleChange('rating')}
                        value={props.values.rating}
                        onBlur={props.handleBlur('rating')}
                    />
                    <Text>{props.touched.rating && props.errors.rating}</Text>
                    <Button title='submit' color='maroon' onPress={props.handleSubmit}/>
                </View>
            )}
            
        </Formik>
    </View>
  );
}
const styles = StyleSheet.create({
  container5:{
    margin: 15,
  },
  container6:{
    borderColor:'black',
    borderWidth: 2,
    borderStyle:'solid',
    padding: 2,
  },
});
