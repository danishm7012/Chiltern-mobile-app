import React from 'react'
import { View,Text,Dimensions,SafeAreaView,StatusBar, TouchableOpacity,ScrollView } from 'react-native'
import AllStyle from '../../AllStyle'
import {PricingCard,SocialIcon, Button,Avatar,Icon,Tile} from 'react-native-elements'
import SwiperComponent from './SwiperCard'
import SearchBars from '../../components/searchComponent/SearchBar'
let {width:screenWidth, height:screenHeight} = Dimensions.get('window')

function BarberServicesGrid({onSelect}) {

  const compDetailId = props.navigation.getParam('servicesId');
  const selectedCompany = SERVICES.find(company => company.id === compDetailId);
    return (
<View style={{flex:1}}>
  
    <View style={AllStyle.aboutSwiper}>
    <SwiperComponent/>
    </View>
    <View style={{}}>
      <Text style={AllStyle.Aboutheading}>Detail</Text>
    </View>
    <SafeAreaView style={{flex:1,paddingTop: StatusBar.currentHeight, justifyContent:'center',alignItems:'center'}}>
      <ScrollView style={{ }}>
    <View >
    
    <View >
      <Text style={AllStyle.Aboutdetail}>
      {selectedCompany.detail}
</Text>
    </View>
    <View >
    <Button
      // onPress={onSelect}
      title="Inquiry Now"
  raised={true}
  type="outline"
/>
    </View>
    {/* <View style={{paddingTop: StatusBar.currentHeight*1.2, justifyContent:'center',alignItems:'center'}}>
        <SocialMediaIcon
        //  style={AllStyles.logo}
        //  style={{position:'absolute'}}
         facebookSocial={socialLinks.facebook}
         twitterSocial={socialLinks.twitter}
         linkedInSocial={socialLinks.linkedIn}
         instagramSocial={socialLinks.instagram}
         websiteSocial={socialLinks.website}
        />
        </View> */}
    </View>
    </ScrollView>
    </SafeAreaView>
  </View>
    )
}

export default BarberServicesGrid
