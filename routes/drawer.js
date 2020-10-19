import {createDrawerNavigator} from 'react-navigation-drawer';
import {createAppContainer} from 'react-navigation';
import HomeStack from './homeStack';
import AboutStack from './aboutSatck';
const screens={
    Home:{
        screen: HomeStack,
    },
    About:{
        screen: AboutStack,
    },  
};
const RootDrawerContainer=createDrawerNavigator(screens);
export default createAppContainer(RootDrawerContainer);