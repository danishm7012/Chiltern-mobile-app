import React from 'react'
import {View,Text,Dimensions,FlatList} from 'react-native'
 import { Card,Avatar, Icon, Button } from 'react-native-elements'
import AllStyle from '../../AllStyle'
import SERVICES from '../../data/Services'


function ServicesMap({onSelectVise,onSelectCity,onSelectTour,onSelectHotel}) {
    return (
<View>

        <View style={{flex:1}}>
{/* <View style={{marginTop:1 }}>
<Text style={{fontSize:18,fontFamily:'open-sans-bold', color:'#444' }}>Services</Text>

</View> */}
<View style={{marginTop:3, flexDirection:'row', alignItems:'center', justifyContent:'space-around'}}>

<View  style={{flex:0.6, alignItems:'center',justifyContent:'center'}}>
<Avatar
    
  size="large"
  rounded
  imageProps={{resizeMode:'stretch',margin:5}}
  containerStyle={AllStyle.containerStyleAvatar}
  // resizeMode='stretch'
  source={require('../../assets/ChilternIcons/Icons-01.png')}
  onPress={onSelectVise}
  //{()=>{
    // props.navigation.navigate({routeName: 'Services_Detail',
    // //  params:{
    // //        servicesId : itemData.item._id,
    // //        servicesTitle : itemData.item.name
    // //      }
    //    })
    //  }}  
  //onPress={onSelect}
  overlayContainerStyle={{backgroundColor:'#fff'}}
  // onPress={() => console.log("Works!")}
  activeOpacity={0.7}
/>
<Text style={{fontSize:12,marginTop:10, marginBottom:10, color:'#444'}}>Visa Assistance</Text>
</View>

<View  style={{flex:0.6, alignItems:'center',justifyContent:'center'}}>
<Avatar
    
  size="large"
  rounded
  imageProps={{resizeMode:'stretch',margin:5}}
  containerStyle={AllStyle.containerStyleAvatar}
  // resizeMode='stretch'
  source={require('../../assets/ChilternIcons/Icons-02.png')}
  onPress={onSelectTour}
  //{()=>{
    // props.navigation.navigate({routeName: 'Services_Detail',
    // //  params:{
    // //        servicesId : itemData.item._id,
    // //        servicesTitle : itemData.item.name
    // //      }
    //    })
    //  }}  
  //onPress={onSelect}
  overlayContainerStyle={{backgroundColor:'#fff'}}
  // onPress={() => console.log("Works!")}
  activeOpacity={0.7}
/>
<Text style={{fontSize:12,marginTop:10, marginBottom:10, color:'#444'}}>Tour Packeges</Text>
</View>


</View>

<View style={{marginTop:3,flexDirection:'row', alignItems:'center', justifyContent:'space-around'}}>

<View  style={{flex:0.6, alignItems:'center',justifyContent:'center'}}>
<Avatar
    
  size="large"
  rounded
  imageProps={{resizeMode:'stretch',margin:5}}
  containerStyle={AllStyle.containerStyleAvatar}
  // resizeMode='stretch'
  source={require('../../assets/ChilternIcons/Icons-03.png')}
  onPress={onSelectHotel}
  //{()=>{
    // props.navigation.navigate({routeName: 'Services_Detail',
    // //  params:{
    // //        servicesId : itemData.item._id,
    // //        servicesTitle : itemData.item.name
    // //      }
    //    })
    //  }}  
  //onPress={onSelect}
  overlayContainerStyle={{backgroundColor:'#fff'}}
  // onPress={() => console.log("Works!")}
  activeOpacity={0.7}
/>
<Text style={{fontSize:12,marginTop:10, marginBottom:10, color:'#444'}}>Hotel Reservation</Text>
</View>

<View  style={{flex:0.6, alignItems:'center',justifyContent:'center'}}>
<Avatar
    
  size="large"
  rounded
  imageProps={{resizeMode:'stretch',margin:5}}
  containerStyle={AllStyle.containerStyleAvatar}
  // resizeMode='stretch'
  source={require('../../assets/ChilternIcons/Icons-04.png')}
  onPress={onSelectCity}
  //{()=>{
    // props.navigation.navigate({routeName: 'Services_Detail',
    // //  params:{
    // //        servicesId : itemData.item._id,
    // //        servicesTitle : itemData.item.name
    // //      }
    //    })
    //  }}  
  //onPress={onSelect}
  overlayContainerStyle={{backgroundColor:'#fff'}}
  // onPress={() => console.log("Works!")}
  activeOpacity={0.7}
/>
<Text style={{fontSize:12,marginTop:10, marginBottom:10, color:'#444'}}>City Sightseeing</Text>
</View>


</View>


</View>
    
        
        </View>
    )
}

export default ServicesMap
