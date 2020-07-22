import React from 'react'
import { createAppContainer,createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';  
import Page from './screens/Page'
import SecondScreen from './screens/SecondScreen'
import ResultScreen from './screens/ResultScreen'
import GalleryScreen from './screens/GallerySccreen'
import SignupScreen from './screens/SignupScreen';
import SigninScreen from './screens/SigninScreen';
import TaskCreateScreen from './screens/TaskCreateScreen';
import AccountScreen from './screens/AccountScreen';
import { setNavigator} from './screens/NavigationRef';
import {Provider as AuthProvider}  from './screens/context/AuthContext';
import {Provider as TaskProvider} from './screens/context/TaskContext';

const switchNavigator=createSwitchNavigator({
mainFlow:createStackNavigator({
  
  Second :SecondScreen,
     PageScreen:Page,
    
     Result:ResultScreen,
      Gallery:GalleryScreen,
      Signup:SignupScreen,
      Signin:SigninScreen

}),
uploadFlow:createBottomTabNavigator({
  TaskCreate:TaskCreateScreen,
  Account:AccountScreen
})

});

const App= createAppContainer(switchNavigator);
        
export default ()=>{
return (

      <TaskProvider>
     <AuthProvider>
         <App  ref={(navigator)=>setNavigator(navigator)}/>
          </AuthProvider>
          </TaskProvider>);

}