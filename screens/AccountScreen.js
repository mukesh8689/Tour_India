import React,{useContext} from 'react'
import {StyleSheet,View,Text,Image,SafeAreaView} from 'react-native'
import {Context as AuthContext} from './context/AuthContext'
import {Context as TaskContext} from './context/TaskContext';
import {NavigationEvents} from 'react-navigation';
import Spacer from './components/spacer'
import { FlatList } from 'react-native-gesture-handler';
import {Button,Card} from 'react-native-paper'


const AccountScreen =()=>{

    const {state,fetchUserImage}=useContext(TaskContext);
    const {signout} =useContext(AuthContext);
  
  const getHeader=()=>{
     return (
         <>
        <Spacer>
        <Text style={{fontSize:20,fontWeight:'bold',textAlign:'center',marginTop:10}} >My Account</Text>
   </Spacer>
  <Spacer>
  <Button  mode='contained' color='#ec3a54' style={styles.button} onPress={signout}>SIGN OUT</Button>

    </Spacer>
    

<Spacer>
    <Text style={{fontSize:20,textAlign:'center',fontWeight:'bold'}}>My Uploads</Text>
    </Spacer>

  </>
     );
  }


 return (
 

    <SafeAreaView style={{flex: 1}}>
           <NavigationEvents  onWillFocus={fetchUserImage}  />


    <FlatList 
       data={state}
       renderItem={({item})=>{

           return (
            <Card style={{margin:10}}>  
            <Card.Cover source={{ uri:item.avatar }} />
          </Card>);
       }}
       keyExtractor={(item)=>item._id}
       ListHeaderComponent={getHeader}
    
    />

</SafeAreaView>

 )


}

const styles=StyleSheet.create({
  
    container:{
        height:100,
        width:100,
        alignItems:'center',
        flexDirection:'row'
    }


});

export default AccountScreen;