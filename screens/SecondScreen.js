import React from 'react'
import {View,Image,StyleSheet,ScrollView,Text,TouchableOpacity} from 'react-native'
import {Card,Title} from 'react-native-paper'
import Cards from './components/card'
const SecondScreen =({navigation})=>{

    const url1="https://api.jsonbin.io/b/5eaaa8c64c87c3359a643e12"

    const url2="https://api.jsonbin.io/b/5ea830714c87c3359a6327dd"

    const url3="https://api.jsonbin.io/b/5eaab41f66e603359fe13bb6"

    const url4="https://api.jsonbin.io/b/5eaab96f07d49135ba4835c9"

    const url5="https://api.jsonbin.io/b/5eaae4f866e603359fe152b1"

    const url6="https://api.jsonbin.io/b/5eaaea294c87c3359a645cba"

    const url7="https://api.jsonbin.io/b/5eaaef8b66e603359fe158c5"
    
    const url8="https://api.jsonbin.io/b/5eaafbdd07d49135ba485724"

    const link1 = "https://www.holidify.com/images/cmsuploads/compressed/1831_20190228134108.jpg";
    const link2= "https://www.holidify.com/images/bgImages/LAKSHADWEEP-ISLANDS.jpg";
   const  link3 = "https://holidify.com/images/attr_wiki/compressed/attr_wiki_1210.jpg";
   const  link4 = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQjtWYSABxJlc3S7EsxhPAZgtwC3ySZM96QckeFs7q2exhHYyTy";
    const link5  ="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSBgYk7KI_hm4WSjn1C2jwQ917Xbt5olHOPESSFF5sQduAwEniM";
    const link6  = "https://www.holidify.com/images/cmsuploads/compressed/Taj-Mahal_20190807173912.jpg";
    const link7  = "https://www.oyorooms.com/blog/wp-content/uploads/2018/07/shutterstock_655466914.jpg";
    const link8  =  "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSUM4wIRgQKr1LoOqUF9vGDAsZj_2oBBUm1fpcZmenOKsGPffqE";





    return (
        <View style={{flexDirection:'column',margin:10}}>

            <ScrollView>
         <View style={{flexDirection:'row',justifyContent:'space-between'}}>
        <TouchableOpacity onPress={()=>{navigation.navigate('Result',{link:url1})}}><Cards cardText='Top Destinations' url={link1}  /></TouchableOpacity>
        <TouchableOpacity onPress={()=>{navigation.navigate('Result',{link:url2})}}><Cards cardText='Beaches' url={link2}/></TouchableOpacity>
        </View>
        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
        <TouchableOpacity onPress={()=>{navigation.navigate('Result',{link:url3})}}><Cards cardText='Palaces' url={link3}/></TouchableOpacity>
        <TouchableOpacity onPress={()=>{navigation.navigate('Result',{link:url4})}}><Cards cardText='Moutains' url={link4}/></TouchableOpacity>
        </View>
        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
        <TouchableOpacity onPress={()=>{navigation.navigate('Result',{link:url5})}}><Cards cardText='Temples' url={link5}/></TouchableOpacity>
        <TouchableOpacity onPress={()=>{navigation.navigate('Result',{link:url6})}}><Cards cardText='Historical Places' url={link6}/></TouchableOpacity>
         </View>
         <View style={{flexDirection:'row',justifyContent:'space-between'}}>
        <TouchableOpacity onPress={()=>{navigation.navigate('Result',{link:url7})}}><Cards cardText='Romantic Places' url={link7}/></TouchableOpacity>
        <TouchableOpacity onPress={()=>{navigation.navigate('Result',{link:url8})}}><Cards cardText='Deserts' url={link8}/></TouchableOpacity>
        </View>
        </ScrollView>
        </View>
    )
   
}

const styles=StyleSheet.create({

})

export default SecondScreen;