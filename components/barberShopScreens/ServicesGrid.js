import React from 'react'
import {TouchableOpacity,View,Text, ImageBackground,
TouchableNativeFeedback,
Platform,
Dimensions,
Image,
ScrollView,
} from 'react-native'
import PackegesCard from '../packeges/PackegesCard'
import CustomCarousel from '../CarouselSlider'
import CardsSlider from '../../screens/about/CardsSlider'
//import { Avatar } from "react-native-elements";
import SearchBars from '../../components/searchComponent/SearchBar'
 import { Card,Avatar, Icon, Button } from 'react-native-elements'
import AllStyle from '../../AllStyle'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'
import { SafeAreaView } from 'react-native-safe-area-context'
 let {height, width} = Dimensions.get("window")

const ServicesGrid = ({onSelect}) => {
let TouchableCom = TouchableOpacity;

if (Platform.OS==="android" && Platform.Version >= 21){
  TouchableCom = TouchableNativeFeedback;
}
  return(
    
      <ScrollView
      horizontal={false}
      style={{
        top:0,
        backgroundColor:'hsla(0,100%,100%,1)' }} 
      >
      
    
    <View style={{flex:1 }}>
      
 
      
    <View style={{ flex:0.8}}>
    <CustomCarousel/>
    {/* <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
    >
        <CardsSlider imageUri={require('../../assets/images/about.jpg')}
            name="Home"
        />
        <CardsSlider imageUri={require('../../assets/images/about.jpg')}
            name="Experiences"
        />
        <CardsSlider imageUri={require('../../assets/images/about.jpg')}
            name="Resturant"
        />
    </ScrollView> */}
</View>
<View style={{flexDirection:'row'}} >
    
    <SearchBars/>
    <Button
  
  type="outline"
  containerStyle={{flex:1}}
/>
      </View>
<View style={{marginTop:1 }}>
<Text style={{fontSize:18,fontFamily:'open-sans-bold', color:'#444' }}>Services</Text>

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
<Text style={{fontSize:12,color:'#444'}}>Visa Assistance</Text>
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
<Text style={{fontSize:12,color:'#444'}}>Tour Packages</Text>
</View>
</View>
<View style={{marginTop:1, flexDirection:'row',alignItems:'center',justifyContent:'space-around'}}>

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
<Text style={{fontSize:12,color:'#444'}}>Hotel Reservation</Text>
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
<Text numberOfLines={1} style={{  flexBasis:40, fontSize:12,color:'#444'}}>City Sightseeing</Text>
</View>

</View>

<View style={{marginTop:10}}>
<Text style={{fontSize:18,fontFamily:'open-sans-bold', color:'#444'}}>Packeges</Text>

</View>
<View style={{flex:1}}>

<PackegesCard/>



{/* <View style={{flex:0.2}}>
<Avatar
  size="medium"
 // rounded
  // resizeMode='stretch'
  containerStyle={AllStyle.containerStyleAvatar}
  source={require('../../assets/hotel.png')}
  imageProps={{resizeMode:'stretch',margin:10}}
  overlayContainerStyle={{backgroundColor: '#FDA7DF',padding:5}}
  onPress={() => console.log("Works!")}
  activeOpacity={0.7}
/>
<Text style={{fontSize:12,color:'#444'}}>Attraction</Text>
</View>
<View style={{flex:0.2}}>
<Avatar
  size="medium"
 // rounded
  // resizeMode='stretch'
  containerStyle={AllStyle.containerStyleAvatar}
  source={require('../../assets/passport.png')}
  imageProps={{resizeMode:'stretch',margin:10}}
  overlayContainerStyle={{backgroundColor: '#FDA7DF',padding:5}}
  onPress={() => console.log("Works!")}
  activeOpacity={0.7}
/>
<Text style={{fontSize:12,color:'#444'}}>Theme Park</Text>
</View>
<View style={{flex:0.2}}>
<Avatar
  size="medium"
 // rounded
  // resizeMode='stretch'
  containerStyle={AllStyle.containerStyleAvatar}
  source={require('../../assets/passenger.png')}
  imageProps={{resizeMode:'stretch',margin:10}}
  overlayContainerStyle={{backgroundColor: '#FDA7DF',padding:5}}
  onPress={() => console.log("Works!")}
  activeOpacity={0.7}
/>
<Text style={{fontSize:12,color:'#444'}}>Adventure</Text>
</View>
</View>
<View style={{marginTop:10, flexDirection:'row',alignItems:'center',justifyContent:'space-around'}}>
<View style={{flex:0.2}}>
<Avatar
  size="medium"
 // rounded
  // resizeMode='stretch'
  containerStyle={AllStyle.containerStyleAvatar}
  source={require('../../assets/airplane.png')}
  imageProps={{resizeMode:'stretch',margin:10}}
  overlayContainerStyle={{backgroundColor: '#FDA7DF',padding:5}}
  onPress={() => console.log("Works!")}
  activeOpacity={0.7}
/>
<Text style={{fontSize:12,color:'#444'}}>Unseen Dubai</Text>
</View>
<View style={{flex:0.2}}>
<Avatar
  size="medium"
 // rounded
  // resizeMode='stretch'
  containerStyle={AllStyle.containerStyleAvatar}
  source={require('../../assets/fork.png')}
  imageProps={{resizeMode:'stretch',margin:10}}
  overlayContainerStyle={{backgroundColor: '#FDA7DF',padding:5}}
  onPress={() => console.log("Works!")}
  activeOpacity={0.7}
/>
<Text style={{fontSize:12,color:'#444'}}>Shopping</Text>
</View> */}

</View>

</View>
      
</ScrollView>
  );
};
export default ServicesGrid