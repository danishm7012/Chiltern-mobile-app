import Color from '../../colors/Color'
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import {Platform } from "react-native"
import ExcursionsDetail from '../../screens/excursions/ExcursionsDetail';



const ExcursionsDetailStackNavigator = createStackNavigator({
  Excursions_Detail:{
    screen: ExcursionsDetail,
    navigationOptions:{
      headerTitleAlign:'center',
    headerStyle:{
  backgroundColor: Platform.OS==='android' ? Color.primaryColour  : Color.accentColour
      },
      headerTitleStyle: {
        fontFamily: "open-sans-bold",
        fontWeight: "200"
      },
      headerTintColor: 'white',
    },
  
  },

  
});
const ExcursionsDetailStackNavigation = createAppContainer(ExcursionsDetailStackNavigator);
export default ExcursionsDetailStackNavigation
