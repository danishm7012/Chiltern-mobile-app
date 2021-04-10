import React from 'react';
import ServicesGrid from '../components/barberShopScreens/ServicesGrid'
import {View,FlatList, Text, Share } from 'react-native'
import {HeaderButtons, Item} from 'react-navigation-header-buttons'
import HeaderButton from '../components/headerButton/HeaderButton'
import SERVICES from '../data/Services'


const BarberShops = (props) =>{

  //  const renderItem = (itemData) =>{ 
    return(
       
      <ServicesGrid
    // title= {itemData.item.name}
    // logo = {itemData.item.logo}
    // image={itemData.item.image}
    //   onSelect={()=>{
    //  props.navigation.navigate({routeName: 'Barber_Services'})
    // //  params:{
    //         serviceId : itemData.item._id,
    //         serviceTitle : itemData.item.name
    //       }
    
      // }}
      onSelectFilter={()=>{
        props.navigation.navigate({routeName: 'Filter_Screen'})
         }} 
     
     
      // <ServicesGrid  
      //  title = {itemData.item.name}

      //    onSelect={()=>{
      //    props.navigation.navigate({routeName: 'Barber_Services',
      //    params:{
      //      shopId : itemData.item.id,
      //      shopTitle : itemData.item.title
      //    }
      // });
      // }}
      />
      );
    };  
  
  
  // return (
    
  // <View style={{width:'100%'}}>    
 
  // <FlatList
  //       data={SERVICES}
  //       keyExtractor={item => item._id}
  //       renderItem={renderItem}
  //       numColumns={2}
  //     />
  {/* <FlatList 
  keyExtractor={(item)=> item.id}
  data={ServicesData}
  renderItem={renderGridItem} 
  /> */}
  {/* </View> */}
// )
// }

BarberShops.navigationOptions = navData => {
  return{    
  headerTitle:'Home',
  headerLeft: () => (
  <HeaderButtons HeaderButtonComponent = {HeaderButton}>
    <Item 
    title='Menu' 
    iconName='ios-menu' 
    onPress={() => {
      navData.navigation.toggleDrawer();
    }} /> 

  </HeaderButtons>
),
headerRight: () => (  <HeaderButtons HeaderButtonComponent={HeaderButton}>
  <Item  iconName="share-social-sharp"
 onPress={
  () => {
    Share.share({
      title: 'Paradisegoc App',
      message:  'https://reactnative.dev/docs/share'  + '\nHy! Happy to see you!'
    }).then((res) => console.log(res))
      .catch((error) => console.log(error))
  }
 } />
  
</HeaderButtons>
)
  }
}

export default BarberShops;



