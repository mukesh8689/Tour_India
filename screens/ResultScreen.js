import React,{useState} from 'react'
import {View,Button,Text,StyleSheet,FlatList} from 'react-native'
import {NavigationEvents} from 'react-navigation';
import {Card} from 'react-native-paper'

const ResultScreen=({navigation})=>{

    const [name,setname]=useState('');
    const url=navigation.getParam('link')

    const fetchUserImages=(url)=>{

      fetch(url).then(res=>res.json())
      .then(data=>{
        setname({Data:data.records});

          })
        

    }

    const renderlist=(({item})=>{

        return (  
        
            <Card onPress={()=>navigation.navigate('PageScreen',{name:item.name_en,des:item.short_description_en,link:item.link1,lat:item.latitude,lon:item.longitude,link2:item.link2,link3:item.link3,link4:item.link4})
             }>
             
             <Card.Cover source={{ uri: item.link1 }} />
  
  <Card.Content>
    <Text>{item.name_en}</Text>
    </Card.Content>
        
          
           </Card>);
        

    });

 return(<View>
     <NavigationEvents  onWillFocus={fetchUserImages(url)} />
     <FlatList data={(name.Data)}
              keyExtractor={(item)=>item.latitude}
                   renderItem={renderlist} />

                </View>);
        
}


const styles=StyleSheet.create({

    container:{
         height:100,
         width:100
    }
})


export default ResultScreen;