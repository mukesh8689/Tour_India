import React from 'react'
import {Card,Title} from 'react-native-paper'
import {View,Image,StyleSheet,ScrollView,Text} from 'react-native'

const CardSreen=({cardText,url})=>{

        return (
            <View >
                
            <Card style={{height:200,width:150,margin:10}}>
               
        <View style={{alignItems:'center'}}>
        <Image 
          source={{uri:url}} 
          style={{height:170,width:150,marginTop:5}}
           />
          
         <Text>{cardText}</Text>
    
         </View>
        
      </Card>
      </View>
        )


}

export default CardSreen;