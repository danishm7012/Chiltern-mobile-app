import React,{useState} from 'react'
import {View,Text,Dimensions,FlatList} from 'react-native'
 import { Card,Avatar, Icon, Button } from 'react-native-elements'
import AllStyle from '../../AllStyle'
import EXCURSIONSCATEGORY from '../../data/ExcursionsCategory'
 let {height, width} = Dimensions.get("window")


const Excursions = ({onSelect,title,logo,image}) => {
    return (
<View style={{flex:1}}>
{/* <View style={{marginTop:1 }}>
<Text style={{fontSize:18,fontFamily:'open-sans-bold', color:'#444' }}>Services</Text>

</View> */}
<View style={{marginTop:3, flexDirection:'row',alignItems:'center',justifyContent:'space-around'}}>
<View style={{flex:0.6,alignItems:'center',justifyContent:'center'}}>
<Avatar
  size="large"
  rounded
  imageProps={{resizeMode:'stretch',margin:5}}
  containerStyle={AllStyle.containerStyleAvatar}
  // resizeMode='stretch'
  source={logo}
  
  onPress = {onSelect}
  overlayContainerStyle={{backgroundColor:'#fff'}}
  // onPress={() => console.log("Works!")}
  activeOpacity={0.7}
/>
<Text style={{flex:1,flexWrap:'wrap', flexBasis:30,fontSize:12,marginTop:10, marginBottom:10, color:'#444'}}>{title}</Text>
</View>
</View>

</View>
   
)
}

export default Excursions