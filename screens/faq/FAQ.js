import React,{Component} from 'react';
import {View ,Image, Text} from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons'
import HeaderButton from '../../components/headerButton/HeaderButton'
import CardSilder from 'react-native-cards-slider';


//const FAQ = props =>{
  class FAQ extends Component { 
    render(){
  return(
    <View>
    <Text style={{fontSize: 30, color: '#000', marginTop:50, marginLeft:20, fontWeight:'bold'}}>
      Images
    </Text>
    <CardSilder style={{marginTop: 30}}>
      <Image style={{height: 170,width:150}} source={require('../../assets/images/excursions/admission-to-kidzania-600x433.jpg')} />
      <Image style={{height: 170}} source={require('../../assets/images/excursions/admission-to-kidzania-600x433.jpg')} />
      <Image style={{height: 170}} source={require('../../assets/images/excursions/admission-to-kidzania-600x433.jpg')} />
      <Image style={{height: 170}} source={require('../../assets/images/excursions/admission-to-kidzania-600x433.jpg')} />
    </CardSilder>
    <Text style={{fontSize: 30, color: '#000', marginTop:40, marginLeft:20, fontWeight:'bold'}}>
      Block with Text
    </Text>
    <CardSilder style={{marginTop: 30}}>
      <View style={{height: 170, justifyContent:'center', alignItems:'center', backgroundColor: 'skyblue'}}>
        <Text style={{color: 'white', fontSize: 24, fontWeight: 'bold'}}>
          悉尼
        </Text>
      </View>
      <View style={{height: 170, justifyContent:'center', alignItems:'center', backgroundColor: 'lightsalmon'}}>
        <Text style={{color: 'white', fontSize: 24, fontWeight: 'bold'}}>
          纽约
        </Text>
      </View>
      <View style={{height: 170, justifyContent:'center', alignItems:'center', backgroundColor: 'teal'}}>
        <Text style={{color: 'white', fontSize: 24, fontWeight: 'bold'}}>
          东京
        </Text>
      </View>
      <View style={{height: 170, justifyContent:'center', alignItems:'center', backgroundColor: 'lightpink'}}>
        <Text style={{color: 'white', fontSize: 24, fontWeight: 'bold'}}>
          上海
        </Text>
      </View>
    </CardSilder>
  </View>
);
};
  }
FAQ.navigationOptions = navData => {
  
  return{

  headerTitle:'FAQ',
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

export default FAQ;