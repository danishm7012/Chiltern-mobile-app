import React,{useState} from 'react';
import {StyleSheet,Image, View,Text,TouchableOpacity, SafeAreaView} from 'react-native'
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer'
import { Ionicons } from '@expo/vector-icons';
import {Platform,Dimensions } from "react-native"
import Color from '../colors/Color'
import BarberShopsStackNavigation from './stackNavigation/BarberShopsStackNavigation'
import AboutStackNavigation from './stackNavigation/AboutStackNavigation'
import PartnersStackNavigation from './stackNavigation/PartnersStackNavigation';
import ContactUsStackNavigation from './stackNavigation/ContactUsStackNavigation';
import TermandConditionStackNavigation from './stackNavigation/TermandConditionStackNavigation';
import FAQStackNavigation from './stackNavigation/FAQStackNavigation';
import { ScrollView } from 'react-native-gesture-handler'
import {createBottomTabNavigator} from "react-navigation-tabs"
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs'
import Aboutss from '../screens/about/Aboutss'
import DropDownPicker from 'react-native-dropdown-picker';



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
  
  
    Our_Partners:{ 
      screen:PartnersStackNavigation,
      
      navigationOptions: {
        drawerIcon: () => (
          <Ionicons name = 'people-sharp'size={25} color='white'/>
        ),
       drawerLabel:'Our_Partners' 
      }
    },
  
  
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
  
  
  },{
    // drawerIcon: ({ tintColor }) => (
    //   <Image
    //     source={require('../assets/images/logos/logo.png')}
    //     style={[styles.icon, { tintColor: 'white' }]}
    //   />
    // ),
    contentComponent: (props) => { 
      
      const data = [
        {
          bg: '#6c398f',
          color: '#ffffff',
          category: 'Services',
          subCategories: 'Visa Assistant',
          // 'Tour Packeges',
          // 'Hotel Reservation',
          // 'City Sight',
        },
        {
          bg: '#c11e8a',
          color: '#ffffff',
          category: 'Excursions',
          subCategories: 'Attraction',
          //'Theme Park','Adventures','Unseen Dubai','Shopping'],
    
        },
      ];
    
    
        const [currentIndex, setCurrentIndex] = React.useState(false);
        const [isOpen, setIsOpen] = React.useState(false);
        const [active , setActive] = React.useState({activeDrawerColor:''}); 
      
      return (
      <ScrollView>
      <SafeAreaView style={{flex:1}}
      forceInset={{ top: '', horizontal: 'never' }}>
          <View style={styles.drawerLogo}>
  
            <Image style={{flex:1,width:'100%',resizeMode:'cover'}} source={require('../assets/chiltern-logo.png')} />
          </View>
          <View style={{flex:1}}>
              <Text style={{color:'#fff'}} onPress={()=>{props.navigation.navigate({routeName:'FandQ'})}}>
              Page1
              </Text>
              <View style={styles.container}>
      {/* <StatusBar hidden /> */}
      {/* {data.map(({ bg, color, category, subCategories }, index) => {
        return ( */}
          <TouchableOpacity
            
            onPress={() => {
              
              setCurrentIndex(currentIndex === false ? true  : false);
              setActive({ activeDrawerColor: 0 })       

              
            }}
            style={styles.cardContainer}
            activeOpacity={0.9}
          >
            {/* { backgroundColor:Color.drawerColor} */}
            <View style={[styles.card, { backgroundColor:Color.drawerColor} ]}>
            <View style={{flex:1,flexDirection:'row', alignItems:'center',backgroundColor:'#10d300', justifyContent:'space-around'}}>
              <Text style={[styles.heading, { color:'#fff' }]}>

              Services
                
                </Text>
              <Ionicons name = 'arrow-down-circle-sharp' size={18} color='white' style={{marginLeft:20}}/>

                </View>

              {currentIndex === true && (
                <View style={styles.subCategoriesList}>
                  {/* {subCategories.map( subCategory => (
                    <Text key={subCategory} style={[styles.body, { color }]}>
                      {subCategory}
                    </Text>
                  ))} */}
      <Text style={[styles.body, { color:'#fff' }]} onPress={()=>{props.navigation.navigate({routeName:'FandQ'})}}>
                      VissaAssistance
                    </Text>
      <Text style={[styles.body, { color:'#fff' }]} onPress={()=>{props.navigation.navigate({routeName:'TermCondition'})}}>
                    Tour Packege
                    </Text>  
      <Text style={[styles.body, { color:'#fff' }]}  onPress={()=>{props.navigation.navigate({routeName:'About'})}}>
                    Hotel Reservation
          </Text>  
      <Text style={[styles.body, { color:'#fff' }]} onPress={()=>{props.navigation.navigate({routeName:'BarberShops'})}}>
                    City Sight View
                    </Text>
                  
                </View>
              )}
            </View>
          </TouchableOpacity>
        {/* );
      })} */}
    </View>

    <View style={styles.container}>
      {/* <StatusBar hidden /> */}
      {/* {data.map(({ bg, color, category, subCategories }, index) => {
        return ( */}
          <TouchableOpacity
            
            onPress={() => {
              
              setIsOpen(isOpen === false ? true  : false);

            }}
            style={styles.cardContainer}
            activeOpacity={0.9}
          >
            <View style={[styles.card, { backgroundColor: Color.drawerColor }]}>
              <View style={{flex:1,flexDirection:'row', alignItems:'center',backgroundColor:'#10d300', justifyContent:'space-around'}}>
              <Text style={[styles.heading, { color:'#fff' }]}>

              Excursions
                
                </Text>
              <Ionicons name = 'arrow-down-circle-sharp' size={18} color='white' style={{marginLeft:20}}/>

                </View>

              {isOpen === true && (
                <View style={styles.subCategoriesList}>
                  {/* {subCategories.map( subCategory => (
                    <Text key={subCategory} style={[styles.body, { color }]}>
                      {subCategory}
                    </Text>
                  ))} */}
                    <Text style={[styles.body, { color:'#fff' }]}>
                    Awais
                    </Text>
                    <Text style={[styles.body, { color:'#fff' }]}>
                    Awais
                    </Text>  
                    <Text style={[styles.body, { color:'#fff' }]}>
                    Awais
                    </Text>  
                    <Text style={[styles.body, { color:'#fff' }]}>
                    Awais
                    </Text>
                    <Text style={[styles.body, { color:'#fff' }]}>
                      Awais
                    </Text>
                  
                </View>
              )}
            </View>
          </TouchableOpacity>
        {/* );
      })} */}
    </View>
            </View>
          {/* <DrawerItems {...props} /> */}
        {/* <Text style={{color:'red'}}>Footer Area After</Text> */}
      </SafeAreaView>
      </ScrollView>
      
    )
},
    drawerWidth: Dimensions.get('window').width * 1,
    drawerBackgroundColor: Color.drawerColor,
    // width: Dimensions.get('window').width * 2,
    contentOptions:{
      activeTintColor:'hsla(360, 100%, 100%, 1.0)',
      activeBackgroundColor : Color.accentColour,
      inactiveTintColor: '#808080',
      itemsContainerStyle: {
        marginVertical: 30,
        
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
      alignItems: 'center',
      marginTop:120, 
      justifyContent: 'center',
      borderBottomWidth: 2,
      borderBottomColor: '#C0C0C0',
      borderBottomEndRadius:38,
      borderBottomStartRadius:38,
     
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