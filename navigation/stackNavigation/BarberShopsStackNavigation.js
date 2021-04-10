import { createStackNavigator } from "react-navigation-stack";
import BarberShops from '../../screens/BarberShops'
import BarberServices from '../../screens/BarberServices'
import BarberBookAppointment from '../../screens/BarberBookAppointment'
import Color from '../../colors/Color'
import { createAppContainer } from "react-navigation";
import {Platform } from "react-native"
import ContactUs from '../../screens/contactUs/ContactUs'


const BarberStackNavigation = createStackNavigator({
  
    Barber_Shops: {
    
      screen: BarberShops,
},
Barber_Services:
  {
    screen: BarberServices,
},
BarberBook_Appointment:{
    screen :ContactUs,
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
