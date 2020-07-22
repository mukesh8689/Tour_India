import React from 'react'
import {View,Image,StyleSheet,ScrollView,Text,TouchableOpacity} from 'react-native'
import {Card,Title} from 'react-native-paper'
import Cards from './components/card'
const SecondScreen =({navigation})=>{

    const url1="https://api.jsonbin.io/b/5edb542b655d87580c44d53f"
    const url2="https://api.jsonbin.io/b/5edb54842f5fd957fda4d157"
    const url3="https://api.jsonbin.io/b/5edb54e6655d87580c44d572"
    const url4="https://api.jsonbin.io/b/5edb588d1f9e4e578818523f"
    const url5="https://api.jsonbin.io/b/5edb556f655d87580c44d59a"
    const url6="https://api.jsonbin.io/b/5edb55b2655d87580c44d5ad"
    const url7="https://api.jsonbin.io/b/5edb55ee2f5fd957fda4d1bc"
    const url8="https://api.jsonbin.io/b/5edb56331f9e4e578818514b"

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