import React,{useContext} from 'react'
import {StyleSheet,Image,Text,View,ScrollView,FlatList,SafeAreaView} from 'react-native'
import {AsyncStorage} from 'react-native';
import {Card,Button} from 'react-native-paper'
import Spacer from './components/spacer';
import {Context as TaskContext} from './context/TaskContext'
import {NavigationEvents} from 'react-navigation';



const GalleryScreen =({navigation})=>{

  const {state,getAllImages}=useContext(TaskContext);
 
    const link2=navigation.getParam('link2');
    const link3=navigation.getParam('link3');
    const link4=navigation.getParam('link4');
    const name=navigation.getParam('name')

  const trylocalsignin=async ()=>{
    const token =await AsyncStorage.getItem('token');
    if(token)
    {
       navigation.navigate('TaskCreate',{name_en:name})
       
    }
    else{
       navigation.navigate('Signup');

    }
  }

  const allimages=(imagess)=>{
    
    getAllImages({imagess})

  }

  const getHeader=()=>{

    return   (<>
    
    <Spacer>
        
    <Button  mode='contained' color='#ec3a54' style={styles.button} onPress={()=>{
     return trylocalsignin()}}>ADD PHOTOS</Button>

      </Spacer>

    <Text style={{textAlign:'center',fontSize:20,fontWeight:'bold'}}>{name}</Text>
    
    <Card style={{margin:10}}>  
         <Card.Cover source={{ uri:link2 }} />
       </Card>

     <Card style={{margin:10}}>  
         <Card.Cover source={{ uri:link3 }} />
       </Card>
       <Card style={{margin:10}}>  
         <Card.Cover source={{ uri:link4 }} />
       </Card>
    
  <Text style={{fontSize:20,textAlign:'center',fontWeight:'bold'}}>Users Photos</Text>

 
      </>
      );

  }

return (
       
  
         <SafeAreaView style={{flex: 1}}>
           <NavigationEvents  onWillFocus={ allimages(name)}  />
    <FlatList 
       data={state}
       keyExtractor={(item)=>item._id}
       renderItem={({item})=>{

           return (
           
           <Card style={{margin:10}}>  
           <Card.Cover source={{ uri:item.avatar }} />
         </Card>);
  
       } }
       ListHeaderComponent={getHeader}
       />

   

</SafeAreaView>
    
);


}

const styles=StyleSheet.create({
     button:{
      width:190,
      height: 44,
     alignSelf:'center',
      borderWidth: 1,
      borderRadius: 8,
      marginBottom: 10
     }


})

export default GalleryScreen;

