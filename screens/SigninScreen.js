import React,{useContext} from 'react';
import {View,StyleSheet,Text} from 'react-native';
import AuthForm from './components/AuthForm';
import Navlink from  './components/Navlink';
import {Context} from './context/AuthContext';

import {NavigationEvents} from 'react-navigation';

const SigninScreen=()=>{

   const {state,signin,clearErrorMessage} =useContext(Context);


    return (
        <View style={styles.container}>

            <NavigationEvents  onWillFocus={clearErrorMessage}   />
        <AuthForm   headerText="Sign In To Upload"
                 errorMessage={state.errorMessage}
                submitButtonText="Sign In"
                onSubmit={signin}
        
        
        
        
        />

        <Navlink 
          routename="Signup"
          text="Don't have an account ? Signup First"  />

        </View>




    );

}

SigninScreen.navigationOptions=()=>{
    return {
        headerShown:false
    };
};

const styles=StyleSheet.create({
    container:{

        flex:1,
        justifyContent:'center',
        marginBottom:250
   
     }


});

export default SigninScreen;