import React from 'react'
import {StyleSheet,Text,View,Image,Linking,ScrollView} from 'react-native'
 import {Button,Card} from 'react-native-paper'
 import Spacer from './components/spacer'
const Page=({navigation})=>{
    
    const name_en=navigation.getParam('name')
    const des=navigation.getParam('des')
    const link=navigation.getParam('link')
    const link2=navigation.getParam('link2')
    const link3=navigation.getParam('link3')
    const link4=navigation.getParam('link4')
   
    const lat=navigation.getParam('lat')
    const lon=navigation.getParam('lon')
    const hotel='hotel'
    const restaurant='restaurant'
    const travelagency='travel agency'
    const trainstation='train station'
    const airport='airport'


 const Map=(lat,lng,place)=>{

   
        var scheme = Platform.OS === 'ios' ? 'maps:' : 'geo:';
        var url = scheme + `${lat},${lng}?q=${place}`;
        Linking.openURL(url);
      }




 

    return (<View style={styles.main}>
        <ScrollView>
        <View >
        
            <Text style={{color:'#000000',fontWeight:'bold',fontSize:30,textAlign:'center',marginTop:10}}>{name_en}</Text>
    <Text style={{color:'#cecece',textAlign:'center',margin:10}}>{des}</Text>
       </View>
       <Spacer>
          <Text style={{fontSize:30 ,textAlign:'center',fontWeight:'bold'}}>GALLERY</Text>
          </Spacer>
       <View>
       <Card>  
             <Card.Cover source={{ uri: link }} />
           </Card>

<Spacer>

    <Button  mode='contained' color='#cecece' style={styles.button}  onPress={()=>navigation.navigate('Gallery',{link2:link2,link3:link3,link4:link4,name:name_en})}>View More Photos</Button>
   </Spacer>


   <Text style={{fontSize:30 ,textAlign:'center',fontWeight:'bold'}}>Explore More This Place</Text>

      <Spacer>
          <Text style={{fontWeight:'bold',textAlign:'center',fontSize:15 }}>How To Reach</Text>
      </Spacer>
      <Button mode='contained' color='#cecece'  style={styles.buttons} onPress={()=>Map(lat,lon,airport)}>Airport</Button>
    <Button mode='contained' color='#cecece'  style={styles.button} onPress={()=>Map(lat,lon,trainstation)}>Train Station</Button>
      
         <Spacer>
      <Text style={{fontWeight:'bold',textAlign:'center',fontSize:15 }}>LODGING</Text></Spacer>


    <Button mode='contained' color='#cecece'  style={styles.buttons} onPress={()=>Map(lat,lon,hotel)}>Hotel</Button>
       
       <Spacer>
        <Text style={{fontWeight:'bold',textAlign:'center',fontSize:15 }}>FOOD</Text>
        </Spacer>
    <Button mode='contained' color='#cecece'  style={styles.button} onPress={()=>Map(lat,lon,restaurant)}>Restaurants</Button>
         
         <Spacer>
          <Text style={{fontWeight:'bold',textAlign:'center',fontSize:15 }}>Tourist Agency</Text>
          </Spacer>
    <Button mode='contained' color='#cecece'  style={styles.button} onPress={()=>Map(lat,lon,travelagency)}>Travel Agency</Button>
    


   </View>
    </ScrollView>
        </View>
    )
}


const styles=StyleSheet.create({

    container:{
         height:100,
         width:100
    },
    main:{
        backgroundColor:'#ec3a54'
    },
    button: {
        width:190,
        height: 44,
       alignSelf:'center',
       
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 10,
  
      },
      buttons:{
        width:100,
        height: 44,
       alignSelf:'center',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 10,
        justifyContent: 'center',

      }
})

export default Page;