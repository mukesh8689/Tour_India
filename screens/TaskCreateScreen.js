import React,{useState,useContext} from 'react';
import {View,StyleSheet,Text} from 'react-native';

import {Button,TextInput} from 'react-native-paper'
import {Context as AuthContext} from  './context/AuthContext';
import Spacer from './components/spacer';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import { navigate } from './NavigationRef';

const TaskCreateScreen=({navigation})=>{

    const name=navigation.getParam('name_en');
    const {state,uploadimage} =useContext(AuthContext);


    const pickFromGallery = async (name_en)=>{
        const {granted} =  await Permissions.askAsync(Permissions.CAMERA_ROLL)
        if(granted){
             let data =  await ImagePicker.launchImageLibraryAsync({
                  mediaTypes:ImagePicker.MediaTypeOptions.Images,
                  allowsEditing:true,
                  aspect:[1,1],
                  quality:0.5
              })
              if(!data.cancelled){
                  var format=data.uri.split('.');
    
                  let newfile = { 
                    uri:data.uri,
                    type:`test/${format[3]}`,
                    name:`test.${format[3]}` 
                    
                }
    
                  handleUpload(newfile,name_en)
              }
        }else{
           Alert.alert("you need to give up permission to work")
        }
     }


     const pickFromCamera = async (name_en)=>{
        const {granted} =  await Permissions.askAsync(Permissions.CAMERA)
        if(granted){
             let data =  await ImagePicker.launchCameraAsync({
                  mediaTypes:ImagePicker.MediaTypeOptions.Images,
                  allowsEditing:true,
                  aspect:[1,1],
                  quality:0.5
              })
            if(!data.cancelled){
                const str=data.uri;
               
                const format=data.uri.split('.');
                let newfile = { 
                  uri:data.uri,
                  type:`test/${format[3]}`,
                  name:`test.${format[3]}` 
  
              }
                handleUpload(newfile,name_en)
            }
        }else{
           Alert.alert("you need to give up permission to work")
        }
     }
    
    
     const handleUpload = (image,name)=>{
        const data = new FormData()
        data.append('file',image)
        data.append('upload_preset','employeeApp')
        data.append("cloud_name","mukesha")
        fetch("https://api.cloudinary.com/v1_1/mukesha/image/upload",{
            method:"post",
            body:data
        }).then(res=>res.json()).
        then(data=>{
           // console.log(data)
          uploadimage({data,name});
        }).catch(err=>{
          console.log("error while uploading")
      })
      }

    
    return (
        <View>
        <Spacer>
        <Text style={{fontSize:20,fontWeight:'bold',textAlign:'center',marginTop:10}} >Upload Photos</Text>
            </Spacer>
            <TextInput 
            value={name} 
            disabled={true}
             alignSelf='center'
            />
            <Spacer />
      
            <Spacer>
     <Text style={{fontSize:20,fontWeight:'bold',textAlign:'center'}}>Choose Photo to Upload</Text>

     </Spacer>
        
            <Button  mode='contained' color='#ec3a54' style={styles.button} onPress={()=>{
       return pickFromGallery(name)}}>Gallery</Button>
           <Spacer>
           <Button icon='camera' mode='contained' color='#ec3a54' style={styles.button} onPress={()=>{
       return pickFromCamera(name)}}>Camera</Button>
       

       </Spacer>

       <Button  mode='contained' color='#ec3a54' style={styles.button} onPress={()=>{
       return navigate('Second')}}>HOME</Button>
        
                { (state.errorMessage) ? <Text   style={styles.errorMessage}>{state.errorMessage}</Text> : null}

          
            
            </View>
            );

};



const styles=StyleSheet.create({

    errorMessage: {

        fontSize:16,
      color:'red',
      marginLeft:15,
      marginTop:15,
      textAlign:'center'
    
       },
       container:{

        flex:1,
        justifyContent:'center',
        marginBottom:250
   
     },
     button:{
        width:190,
        height: 44,
       alignSelf:'center',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 10
       }
});

export default TaskCreateScreen;