import React from 'react';
import {View ,ScrollView,Dimensions, Text} from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons'
import HeaderButton from '../../components/headerButton/HeaderButton'
import CardsSlider from './CardsSlider'
import { Avatar } from "react-native-elements";

let {height, width} = Dimensions.get("window")

const About = props =>{
  return(
    
    <View style={{flex:1}}>
    <View style={{ height: height/3, marginTop: 20 }}>
    <ScrollView
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
    </ScrollView>
</View>
<View style={{marginTop:10}}>
<Text style={{fontSize:18,fontFamily:'open-sans-bold'}}>Services</Text>

</View>
<View style={{marginTop:10, flexDirection:'row',alignItems:'center',justifyContent:'space-around'}}>
<Avatar
  size="medium"
  rounded
  // resizeMode='stretch'
  source={require('../../assets/fork.png')}
  
  
  overlayContainerStyle={{backgroundColor: '#FDA7DF',padding:5}}
  onPress={() => console.log("Works!")}
  activeOpacity={0.7}
/>
<Avatar
  size="medium"
  rounded
  source={require('../../assets/hamburger.png')}

  overlayContainerStyle={{backgroundColor: '#FDA7DF'}}
  onPress={() => console.log("Works!")}
  activeOpacity={0.7}
/>
<Avatar
  size="medium"
  rounded
  title="MT"
  overlayContainerStyle={{backgroundColor: '#FDA7DF'}}
  onPress={() => console.log("Works!")}
  activeOpacity={0.7}
/>

</View>
<View style={{marginTop:10, flexDirection:'row',alignItems:'center',justifyContent:'space-around'}}>
<Avatar
  size="medium"
  rounded
  title="MT"
  overlayContainerStyle={{backgroundColor: '#FDA7DF'}}
  onPress={() => console.log("Works!")}
  activeOpacity={0.7}
/>
<Avatar
  size="medium"
  rounded
  title="MT"
  overlayContainerStyle={{backgroundColor: '#FDA7DF'}}
  onPress={() => console.log("Works!")}
  activeOpacity={0.7}
/>
<Avatar
  size="medium"
  rounded
  title="MT"
  overlayContainerStyle={{backgroundColor: '#FDA7DF'}}
  onPress={() => console.log("Works!")}
  activeOpacity={0.7}
/>

</View>

<View style={{marginTop:10}}>
<Text style={{fontSize:18,fontFamily:'open-sans-bold'}}>Packeges</Text>

</View>
<View style={{marginTop:10, flexDirection:'row',alignItems:'center',justifyContent:'space-around'}}>
<Avatar
  size="medium"
  width={width/3}
 // rounded
  // resizeMode='stretch'
  imageProps={{ resizeMode: 'contain',height:50,width:20}} 
  source={require('../../assets/fork.png')}
  
  
  overlayContainerStyle={{backgroundColor: '#FDA7DF',padding:5}}
  onPress={() => console.log("Works!")}
  activeOpacity={0.7}
/>
<Avatar
  size="medium"
  //rounded
  source={require('../../assets/fork.png')}


  overlayContainerStyle={{backgroundColor: '#FDA7DF'}}
  onPress={() => console.log("Works!")}
  activeOpacity={0.7}
/>
<Avatar
  size="medium"
  
  source={require('../../assets/fork.png')}

  overlayContainerStyle={{backgroundColor: '#FDA7DF'}}
  onPress={() => console.log("Works!")}
  activeOpacity={0.7}
/>

</View>
<View style={{marginTop:10, flexDirection:'row',alignItems:'center',justifyContent:'space-around'}}>
<Avatar
  size="medium"
  //rounded
  source={require('../../assets/fork.png')}

  overlayContainerStyle={{backgroundColor: '#FDA7DF'}}
  onPress={() => console.log("Works!")}
  activeOpacity={0.7}
/>
<Avatar
  size="medium"
  //rounded
  source={require('../../assets/fork.png')}

  overlayContainerStyle={{backgroundColor: '#FDA7DF'}}
  onPress={() => console.log("Works!")}
  activeOpacity={0.7}
/>
<Avatar
  size="medium"
  //rounded
  source={require('../../assets/fork.png')}

  overlayContainerStyle={{backgroundColor: '#FDA7DF'}}
  onPress={() => console.log("Works!")}
  activeOpacity={0.7}
/>

</View>

</View>
);
};

About.navigationOptions = navData => {
  
  return{

  headerTitle:'About',
  headerLeft: () => (
  <HeaderButtons HeaderButtonComponent = {HeaderButton}>
    <Item 
    title='Menu' 
    iconName='ios-menu' 
    onPress={() => {
      navData.navigation.toggleDrawer();
    }} /> 

  </HeaderButtons>
)
  }
}

export default About;