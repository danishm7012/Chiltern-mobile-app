import React,{useState} from 'react'
import {StyleSheet,Image, View,Text,TouchableOpacity, SafeAreaView} from 'react-native'
import Color from '../colors/Color'
import { Ionicons } from '@expo/vector-icons';


function SubDrawerMenu(props) {
  const [currentIndex, setCurrentIndex] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);
  const [active , setActive] = React.useState({activeDrawerColor:''}); 

  return (
    <View style={{flex:1,marginTop:30}}>
    
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
  <View style={{flex:1,flexDirection:'row', alignItems:'center',
  backgroundColor:Color.drawerColor, justifyContent:'center',marginHorizontal:18,marginVertical:15}}>
    <Ionicons name = 'paper-plane'size={25} color='white'/>
    
    <Text style={[styles.heading, {textAlign: 'justify' ,color:'#808080',fontFamily: 'open-sans-bold' }]}>

    Services
      
      </Text>
    <Ionicons name = 'caret-forward' size={18} color='white' style={{marginLeft:20}}/>

      </View>

    {currentIndex === true && (
      <View style={styles.subCategoriesList}>
        {/* {subCategories.map( subCategory => (
          <Text key={subCategory} style={[styles.body, { color }]}>
            {subCategory}
          </Text>
        ))} */}
<Text style={[styles.body, { color:'#808080',textAlign: 'justify',fontFamily: 'open-sans-bold' }]} 
onPress={()=>{props.navigation.navigate({routeName:'FandQ'})}}>
            VissaAssistance
          </Text>
<Text style={[styles.body, { color:'#808080',textAlign: 'justify',fontFamily: 'open-sans-bold' }]} 
onPress={()=>{props.navigation.navigate({routeName:'TermCondition'})}}>
          Tour Packege
          </Text>  
<Text style={[styles.body, { color:'#808080',textAlign: 'justify',fontFamily: 'open-sans-bold' }]}  
onPress={()=>{props.navigation.navigate({routeName:'About'})}}>
          Hotel Reservation
</Text>  
<Text style={[styles.body, { color:'#808080',textAlign: 'justify',fontFamily: 'open-sans-bold' }]} 
onPress={()=>{props.navigation.navigate({routeName:'BarberShops'})}}>
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
    <View style={{flex:1,flexDirection:'row', alignItems:'center',
    backgroundColor:Color.drawerColor, justifyContent:'space-around',marginHorizontal:18}}>
    <Ionicons name = 'earth'size={25} color='white'/>
    
    <Text style={[styles.heading, {textAlign: 'justify' ,fontFamily: 'open-sans-bold', color:'#808080' }]}>

    Excursions
      
      </Text>
    <Ionicons name = 'caret-forward' size={18} color='white' style={{marginLeft:20}}/>

      </View>

    {isOpen === true && (
      <View style={styles.subCategoriesList}>
        {/* {subCategories.map( subCategory => (
          <Text key={subCategory} style={[styles.body, { color }]}>
            {subCategory}
          </Text>
        ))} */}
          <Text style={[styles.body, { color:'#808080',fontFamily: 'open-sans-bold' }]}>
          Attraction
          </Text>
          <Text style={[styles.body, { color:'#808080',fontFamily: 'open-sans-bold' }]}>
          Theme Park
          </Text>  
          <Text style={[styles.body, { color:'#808080',fontFamily: 'open-sans-bold' }]}>
          Adventure
          </Text>  
          <Text style={[styles.body, { color:'#808080',fontFamily: 'open-sans-bold' }]}>
          Unseen Dubai
          </Text>
          <Text style={[styles.body, { color:'#808080',fontFamily: 'open-sans-bold' }]}>
            Shopping
          </Text>
        
      </View>
    )}
  </View>
</TouchableOpacity>
{/* );
})} */}
</View>
  </View>
  )
}

export default SubDrawerMenu

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
    backgroundColor:Color.drawerColor,
   
    textTransform: 'uppercase',
    letterSpacing: 2,
    padding:10,
  },
  body: {
    fontSize: 20,
    lineHeight: 20 * 1.9,
    textAlign: 'center',

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
