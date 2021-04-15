import React,{useState} from 'react';
import {StyleSheet,Image,Button, View,Text,TouchableOpacity, SafeAreaView} from 'react-native'
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer'
import { Ionicons } from '@expo/vector-icons';
import {Platform,Dimensions } from "react-native"
import Color from '../colors/Color'
import BarberShopsStackNavigation from './stackNavigation/BarberShopsStackNavigation'
import AboutStackNavigation from './stackNavigation/AboutStackNavigation'
import ExcursionsDetailStackNavigation from './stackNavigation/PartnersStackNavigation';
import ContactUsStackNavigation from './stackNavigation/ContactUsStackNavigation';
import TermandConditionStackNavigation from './stackNavigation/TermandConditionStackNavigation';
import FAQStackNavigation from './stackNavigation/FAQStackNavigation';
import { ScrollView } from 'react-native-gesture-handler'
import {createBottomTabNavigator} from "react-navigation-tabs"
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs'
import Aboutss from '../screens/about/Aboutss'
import DropDownPicker from 'react-native-dropdown-picker';
import SubDrawerMenu from '../components/SubDrawerMenu'





// const RouteDrawerCongigure = {
//   About:{
//     screen:AboutStackNavigation,
//     navigationOptions:{
      
//       drawerIcon: () => (
//         <Ionicons name = 'information-circle-sharp'size={29} color='white'/>
//       ),
//       drawerLabel:'AboutUs',
//     }
//   },
// }

// const tabScreenConfig = {
//   Home: {
//   screen: BarberShopsStackNavigation,
//   navigationOptions:{
//     tabBarIcon: (tabInfo) => {
//       return <Ionicons name = 'home' size={25} color={tabInfo.tintColor}/>
//     },
//     tabBarColor: Color.accentColour
//   },
      
// },
//   AboutUs:{
//     screen: AboutStackNavigation,
//     navigationOptions:{
//       tabBarIcon: (tabInfo) => {
//   return <Ionicons name = 'information-circle-sharp'size={29} color={tabInfo.tintColor}/>
//     },
//     tabBarColor: Color.primaryColour

//   },
//   },
//   Partnership: {
//     screen: PartnersStackNavigation,
//     navigationOptions:{
//       tabBarIcon: (tabInfo) => {
//   return <Ionicons name = 'people-sharp'size={25} color={tabInfo.tintColor}/>
//       },
//     tabBarColor: Color.accentColour

//     },
//   },
//   ContactUs: { 
//     screen:ContactUsStackNavigation,
//     navigationOptions:{
//       tabBarIcon: (tabInfo) => {
//         return <Ionicons name = 'call-sharp'size={25} color={tabInfo.tintColor}/>
//       },
//     tabBarColor: Color.primaryColour

//     },
//   },

// };

// const CompaniesTabNavigator = Platform.OS==='android'? createMaterialBottomTabNavigator(tabScreenConfig, {
//   activeTintColor: 'white',
//   shifting:true
// }) 
// : createBottomTabNavigator (
//   tabScreenConfig,
//   {
//   tabBarOptions:{
//     activeTintColor: Color.primaryColour
//   },
// });
// const MainDrawerNavigation = createDrawerNavigator(RouteDrawerCongigure,
//   {
    // drawerIcon: ({ tintColor }) => (
    //   <Image
    //     source={require('../assets/images/logos/logo.png')}
    //     style={[styles.icon, { tintColor: 'white' }]}
    //   />
    // ),
//     contentComponent: (props) => {
//       // var addd = {props} 
//       return (
//       <ScrollView>
//       <SafeAreaView style={{flex:1}}
//       forceInset={{ top: '', horizontal: 'never' }}>
//         <View style={{flex:1,backgroundColor:'#fbc81b', borderBottomRightRadius:200}}>
          
//           <View style={styles.drawerLogo}>
  
//           <Button title="Go back" onPress={() => props.navigation.navigate(<MainDrawerNavigator/>)} />
//           </View>
          
//           </View>
//           <View style={{}}>
//             <SubDrawerMenu/>
//           </View>
//           {/* <DrawerItems {...props} />  */}
//           {/* <DrawerItems {...props} /> */}
//           <DrawerItems {...props}/>
          
//             {/* </DrawerItems> */}
//       </SafeAreaView>
//       </ScrollView>
      
//     )
// },
//   })
   
  // BarberShops: {
  //     screen: BarberShopsStackNavigation,
  //     navigationOptions:{
  //       drawerIcon: () => (
  //         <Ionicons name = 'home' size={25} color='white'/>
  //       ),
        
  //       drawerLabel:'Home',
  //     }
    
  //   },
    
  // });



const MainDrawerNavigator = createDrawerNavigator({
   
  BarberShops: {
      screen: BarberShopsStackNavigation,
      navigationOptions:{
        drawerIcon: () => (
          <Ionicons name = 'home' size={25} color='white'/>
        ),
        
        drawerLabel:'Home',
        
      }
    
    },
//   cosmopolitanDrawer: {
//     screen: EuropeStackNavigator,
//     navigationOptions:{
//       drawerIcon: () => (
//         <Ionicons name = 'globe' size={25} color='white'/>
//       ),
      
//       drawerLabel:'CosmopolitanIntrest',
//     }
//   },
  
    About:{
      screen:AboutStackNavigation,
      navigationOptions:{
        
        drawerIcon: () => (
          <Ionicons name = 'information-circle-sharp'size={29} color='white'/>
        ),
        drawerLabel:'AboutUs',
      }
    },
  
  
    // Excursions_Detail:{ 
    //   screen:ExcursionsDetailStackNavigation,
      
    //   navigationOptions: {
    //     drawerIcon: () => (
    //       <Ionicons name = 'people-sharp'size={25} color='white'/>
    //     ),
    //    drawerLabel:'Excursions' 
    //   }
    // },
  
  
  ContactUs:{
    screen: ContactUsStackNavigation,
    navigationOptions:{
      drawerIcon: () => (
        <Ionicons name = 'call-sharp'size={25} color='white'/>
      ),
      drawerLabel:'ContactUs',
    }
  },
  
  
  TermCondition:{
    screen: TermandConditionStackNavigation,
    navigationOptions:{
      drawerIcon: () => (
        <Ionicons name = 'reader-sharp'size={25} color='white'/>
      ),
      drawerLabel:'Term&Condition',
    }
  },
  
  
  FandQ:{
    screen: FAQStackNavigation,
    navigationOptions:{
      drawerIcon: () => (
        <Ionicons name = 'hand-left-sharp'size={25} color='white'/>
  
      ),
      drawerLabel:'FAQ',
    }
  },
  
  
  },
  
    
  {
    // drawerIcon: ({ tintColor }) => (
    //   <Image
    //     source={require('../assets/images/logos/logo.png')}
    //     style={[styles.icon, { tintColor: 'white' }]}
    //   />
    // ),
    contentComponent: (props) => {
      // var addd = {props} 
      return (
      <ScrollView>
      <SafeAreaView style={{flex:1}}
      forceInset={{ top: '', horizontal: 'never' }}>
        <View style={{flex:1,backgroundColor:'#fbc81b', borderBottomRightRadius:200}}>
          
          <View style={styles.drawerLogo}>
  
            <Image style={{flex:0.6,width:'80%',resizeMode:'stretch'}} source={require('../assets/chiltern-logo.png')} />
          </View>
          
          </View>
          {/* <View style={{}}>
            <SubDrawerMenu/>
          </View> */}
          {/* <DrawerItems {...props} />  */}
          {/* <DrawerItems {...props} /> */}
          <DrawerItems {...props}/>
          
            {/* </DrawerItems> */}
      </SafeAreaView>
      </ScrollView>
      
    )
},
   // drawerWidth: Dimensions.get('window').width * 1,
    drawerBackgroundColor: Color.drawerColor,
    // width: Dimensions.get('window').width * 2,
    contentOptions:{
      activeTintColor:'hsla(360, 100%, 100%, 1.0)',
      activeBackgroundColor : Color.accentColour,
      inactiveTintColor: '#808080',
      itemsContainerStyle: {
        marginVertical: 55,
        
      },
      labelStyle:{
        fontFamily: 'open-sans-bold',
        fontSize:18,
       
      },
      itemStyle:{
        marginVertical:10,
         
       
      },
      
    }
  
  });
  export default createAppContainer(MainDrawerNavigator);
  
  const styles = StyleSheet.create({
    icon: {
      width: 24,
      height: 24,
    },
    drawerLogo:{
      flex:1,
      height: 100,
      alignItems: 'flex-start',
      marginTop:120, 
      justifyContent: 'flex-start',
      // borderBottomWidth: 2,
      // borderBottomColor: '#C0C0C0',
      // borderBottomEndRadius:38,
      // borderBottomStartRadius:38,

    },
    container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'center',
    },
    cardContainer: {
      flexGrow: 1,
    },
    card: {
      flexGrow: 1,
      
      alignItems: 'center',
      justifyContent: 'center',
    },
    heading: {
      fontSize: 18,
      flex:1,
      textAlign:'center',
     
      fontWeight: '400',
      borderBottomColor:'#C0C0C0',
      backgroundColor:'#10d300',
      borderBottomWidth:2,
      textTransform: 'uppercase',
      letterSpacing: 2,
      padding:10,
    },
    body: {
      fontSize: 20,
      lineHeight: 20 * 1.9,
      textAlign: 'center',
      borderBottomWidth:2,
      borderBottomColor:'#C0C0C0',
       borderRadius:15,
    },
    subCategoriesList: {
      marginTop: 10,
      marginBottom:10,

    },
    btn: {
      alignItems: 'center',
      backgroundColor: '#DDDDDD',
      borderColor: '#dc00ff',
      borderRadius: 10,
      borderWidth: 1,
      padding: 10,
    },
    btnActive: {
      alignItems: 'center',
      backgroundColor: '#dc00ff',
      borderColor: '#dc00ff',
      borderRadius: 10,
      borderWidth: 1,
      padding: 10,
    },
  
  });