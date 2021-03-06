import FAQ from '../../screens/faq/FAQ'
import Color from '../../colors/Color'
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import {Platform } from "react-native"



const FAQStackNavigator = createStackNavigator({
    FAQ_Us:{
    screen:FAQ,
    navigationOptions:{
      headerTitleAlign:'center',
    headerStyle:{
  backgroundColor: Platform.OS==='android' ? Color.accentColour  : Color.primaryColour
      },
      headerTitleStyle: {
        fontFamily: "open-sans-bold",
        fontWeight: "200"
      },
      headerTintColor: 'white',
    },
  
  },

  
});
const FAQStackNavigation = createAppContainer(FAQStackNavigator);
export default FAQStackNavigation
