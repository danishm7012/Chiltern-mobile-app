import React from 'react'
import {View,Text,Dimensions} from 'react-native'
 import { Card,Avatar, Icon, Button } from 'react-native-elements'
import AllStyle from '../../AllStyle'

 let {height, width} = Dimensions.get("window")

function Excursions({onSelect}) {
    return (
        <View style={{flex:1}}>
        <View style={{marginTop:1 }}>
        <Text style={{fontSize:18,fontFamily:'open-sans-bold', color:'#444' }}>Excursions</Text>
        
        </View>
        <View style={{marginTop:10, flexDirection:'row',alignItems:'center',justifyContent:'space-around'}}>
        <View style={{flex:0.3,alignItems:'center',justifyContent:'center'}}>
        <Avatar
          size="medium"
          rounded
          imageProps={{resizeMode:'stretch',margin:5}}
          containerStyle={AllStyle.containerStyleAvatar}
          // resizeMode='stretch'
          source={require('../../assets/passport.png')}
          
          onPress={onSelect}
          overlayContainerStyle={{backgroundColor: '#fbc81b'}}
          // onPress={() => console.log("Works!")}
          activeOpacity={0.7}
        />
        <Text style={{fontSize:12,color:'#444'}}>Attraction</Text>
        </View>
        <View style={{flex:0.3,alignItems:'center',justifyContent:'center'}}>
        <Avatar
          size="medium"
          rounded
          // resizeMode='stretch'
          containerStyle={AllStyle.containerStyleAvatar}
          source={require('../../assets/flight.png')}
          imageProps={{resizeMode:'stretch',margin:5,color:'#fff'}} 
          overlayContainerStyle={{backgroundColor: '#fbc81b'}}
          onPress={() => console.log("Works!")}
          activeOpacity={0.7}
        />
        <Text style={{fontSize:12,color:'#444'}}>Theme Park</Text>
        </View>
        <View style={{flex:0.3,alignItems:'center',justifyContent:'center'}}>
        <Avatar
          size="medium"
          rounded
          // resizeMode='stretch'
          containerStyle={AllStyle.containerStyleAvatar}
          source={require('../../assets/hotel.png')}
          imageProps={{resizeMode:'stretch',margin:5}}
          overlayContainerStyle={{backgroundColor: '#fbc81b'}}
          onPress={() => console.log("Works!")}
          activeOpacity={0.7}
        />
        <Text style={{fontSize:12,color:'#444'}}>Adventure</Text>
        </View>
        </View>
        
        
        
        <View style={{marginTop:1, flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
        <View style={{flex:0.3,alignItems:'center',justifyContent:'center'}}>
        <Avatar
          size="medium"
          containerStyle={AllStyle.containerStyleAvatar}
          rounded
          imageProps={{resizeMode:'stretch',margin:5}}
          // resizeMode='stretch'
          source={require('../../assets/location.png')}
          
          
          overlayContainerStyle={{backgroundColor: '#fbc81b'}}
          onPress={() => console.log("Works!")}
          activeOpacity={0.7}
        />
        <Text numberOfLines={1} style={{  flexBasis:40, fontSize:12,color:'#444'}}>Unseen Dubai</Text>
        </View>
        
        <View style={{flex:0.3,alignItems:'center',justifyContent:'center'}}>
        <Avatar
          size="medium"
          containerStyle={AllStyle.containerStyleAvatar}
          rounded
          imageProps={{resizeMode:'stretch',margin:5}}
          // resizeMode='stretch'
          source={require('../../assets/location.png')}
          
          
          overlayContainerStyle={{backgroundColor: '#fbc81b'}}
          onPress={() => console.log("Works!")}
          activeOpacity={0.7}
        />
        <Text numberOfLines={1} style={{  flexBasis:40, fontSize:12,color:'#444'}}>Shopping</Text>
        </View>
        
        </View>
        </View>
        
    )
}

export default Excursions
