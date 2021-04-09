import React from 'react';
import {View , Text,ScrollView} from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons'
import HeaderButton from '../../components/headerButton/HeaderButton'


const Aboutss = props =>{
  return(
    <View style={{ height: 130, marginTop: 20 }}>
    <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
    >
        <Category imageUri={require('../../assets/images/about.jpg')}
            name="Home"
        />
        <Category imageUri={require('../../assets/images/about.jpg')}
            name="Experiences"
        />
        <Category imageUri={require('../../assets/images/about.jpg')}
            name="Resturant"
        />
    </ScrollView>
</View>
);
};

Aboutss.navigationOptions = navData => {
  
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

export default Aboutss;