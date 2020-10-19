import {createStackNavigator} from 'react-navigation-stack';
import About from '../Screens/about';
import Header from '../shared/header'
import React from 'react'
const screens={  
    About:{
        screen: About,
        navigationOptions:({navigation})=>{
            return {
                headerTitle:()=><Header navigation={navigation} title='ABOUT MOVIE REVIEW'/>,
            } 
            
        },
    }, 
}
const AboutStack=createStackNavigator(screens,{
    defaultNavigationOptions:{
        headerStyle:{
            backgroundColor:"grey"
        }
    }
});
export default AboutStack;