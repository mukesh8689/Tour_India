import React,{useState}from 'react';
import {Text,Button,Input} from 'react-native-elements';
import {View,StyleSheet} from 'react-native';
import Spacer from './spacer';


//headerText,errorMessage,onSubmit,submitButtonText  -->these props we need to extract
const AuthForm =({headerText,errorMessage,onSubmit,submitButtonText})=>{

    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    


    return (
        <>
        <Spacer>
    <Text h3>{headerText}</Text>
        </Spacer>
        <Input label='Email' 
        value={email} 
        onChangeText={(newText)=>{
            setEmail(newText);
        }}  
         
        autoCapitalize='none'
        autoCorrect={false}
        />
        <Spacer />
        <Input label='Password' 
        value={password}
         onChangeText={(newText)=>{
            setPassword(newText)}}
            autoCapitalize='none'
            autoCorrect={false}
            secureTextEntry={true}  
            
            />
    
            { (errorMessage) ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null}
         <Spacer>
        <Button title={submitButtonText}
                 onPress={()=>onSubmit({email,password})} />
        </Spacer>
        
        </>);




};

const styles=StyleSheet.create({
   errorMessage: {

    fontSize:16,
  color:'red',
  marginLeft:15,
  marginTop:15

   }

});

export default AuthForm;