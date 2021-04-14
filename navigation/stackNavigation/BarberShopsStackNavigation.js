import React from 'react'
import { createStackNavigator } from "react-navigation-stack";
import BarberShops from '../../screens/BarberShops'
import BarberServices from '../../screens/BarberServices'
import BarberBookAppointment from '../../screens/BarberBookAppointment'
import Color from '../../colors/Color'
import { createAppContainer } from "react-navigation";
import {Platform } from "react-native"
import ContactUs from '../../screens/contactUs/ContactUs'
import Filter from '../../screens/filter/Filter'
import ExcursionsDetail from "../../screens/excursions/ExcursionsDetail";
import ChilternExcursionsMain from '../../screens/chilternmain/ChilternExcursionsMain'
import ServicesExcursionsStackNavigation from '../stackNavigation/ChilternSerExcur'
import {View,FlatList, Text, Share } from 'react-native'
import {HeaderButtons, Item} from 'react-navigation-header-buttons'
import HeaderButton from '../../components/headerButton/HeaderButton'
import Login from '../../screens/loginSignup/Login';
import SignUp from '../../screens/loginSignup/SignUp';

const BarberStackNavigation = createStackNavigator({
  

  Barber_Shops: {
    
    screen: BarberShops,
   
},


    // Services_Excursions_StackNavigation: {
    
    //   screen: ServicesExcursionsStackNavigation,
    //  navigationOptions: (navData) => {
    //   return{    
    //     headerTitle:'Home',
    //     headerLeft: () => (
    //     <HeaderButtons HeaderButtonComponent = {HeaderButton}>
    //       <Item 
    //       title='Menu' 
    //       iconName='ios-menu' 
    //       onPress={() => {
    //         navData.navigation.toggleDrawer();
    //       }} /> 
      
    //     </HeaderButtons>
    //   ),
    //   headerRight: () => (  <HeaderButtons HeaderButtonComponent={HeaderButton}>
    //     <Item  iconName="share-social-sharp"
    //    onPress={
    //     () => {
    //       navData.navigation.navigate('Login_Screen')
    //       // Share.share({
    //       //   title: 'Paradisegoc App',
    //       //   message:  'https://reactnative.dev/docs/share'  + '\nHy! Happy to see you!'
    //       // }).then((res) => console.log(res))
    //       //   .catch((error) => console.log(error))
    //     }
    //    } />
        
    //   </HeaderButtons>
    //   ),
    //     }
    //   }
      
//},
Barber_Services:
  {
    screen: BarberServices,
},
BarberBook_Appointment:{
    screen :ContactUs,
  },
  Filter_Screen:{
         screen:Filter,
  },
  Chiltern_Excursions_Main:{
    screen:ChilternExcursionsMain,
  },
  Excursions_Detail:{
    screen: ExcursionsDetail,
},
  
  Login_Screen:{
    screen:Login,
  },
  Sign_Up:{
    screen:SignUp,
  },
},
{

  mode:'modal',
  defaultNavigationOptions:{
    headerTitleAlign:'center',
    headerStyle:{
  backgroundColor: Platform.OS==='android' ? Color.accentColour : Color.primaryColour
        
},
    headerTitleStyle:{
      fontFamily: "open-sans-bold",
        fontWeight: "200"
    },
      headerTintColor: 'white'
  }
});

const BarberShopsStackNavigation = createAppContainer(BarberStackNavigation)

export default BarberShopsStackNavigation
