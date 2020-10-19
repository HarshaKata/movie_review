import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Home from '../Screens/home';
import Review from '../Screens/review';
import Header from '../shared/header';
import React from 'react';
const screens={  
    Home:{
        screen: Home,
        navigationOptions:({navigation})=>{
            return {
                headerTitle:()=><Header navigation={navigation} title='MOVIE REVIEW'/>,
            } 
            
        },
    },
    Review:{
        screen:Review
    },  
}
const HomeStack=createStackNavigator(screens,{
    defaultNavigationOptions:{
        headerStyle:{
            backgroundColor:"grey"
        }
    }
});
export default HomeStack;