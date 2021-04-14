import React from 'react';
import ServicesGrid from '../components/barberShopScreens/ServicesGrid'
import {View,FlatList, Text, Share } from 'react-native'
import {HeaderButtons, Item} from 'react-navigation-header-buttons'
import HeaderButton from '../components/headerButton/HeaderButton'
import SERVICES from '../data/Services' 
import ChilternExcursionsMain from './chilternmain/ChilternExcursionsMain'
import EXCURSIONSCATEGORY from '../data/ExcursionsCategory'
import CustomCarousel from '../components/CarouselSlider'
import SearchBars from '../components/searchComponent/SearchBar'
import PackegesCard from '../components/packeges/PackegesCard'
import { Card,Avatar, Icon, Button } from 'react-native-elements'
import Services from '../components/services/Services'
import Excursions from '../components/excursions/Excursions'
//import AllStyle from '../../AllStyle'

const BarberShops = (props) =>{

  //  const displayedSubCompanies = NationalCompanies.filter(
  //    company=> company.companyIds.indexOf(shId) >= 0 );
const listHeader = () =>{
  return (
   <View style={{flex:1}}>
   <View style={{ flex:0.8}}>
    <CustomCarousel/>

</View>
<View style={{flex:1,flexDirection:'row',marginTop:5}} >
    
    <SearchBars/>
    <Button
  icon={
    <Icon
      name="search"
      size={39}
      color="#961a1d"
    />
  }
  type="outline"
  containerStyle={{flex:1, borderColor:'#444'}}
  buttonStyle={{borderColor:'#444',borderWidth:0.5}}
/>
<Button
  icon={
    <Icon
      name="filter-alt"
      size={39}
      color="#961a1d"
    />
  }
  type="outline"
 // onPress={onSelectFilter}
  containerStyle={{flex:1, borderColor:'#444'}}
  buttonStyle={{borderColor:'#444',borderWidth:0.5}}
/>
      </View>
      <View style={{flex:1}}>
              <Text style={{fontSize:18,flex:1, fontFamily:'open-sans-bold', color:'#444'}}>
                  Services
              </Text>
            </View>
      </View>
  )
}

const listFooter = () => {
  return(
    <View style={{flex:1}}>
      <View style={{marginTop:10}}>
<Text style={{fontSize:18,fontFamily:'open-sans-bold', color:'#444'}}>Packeges</Text>

</View>
<View style={{flex:1}}>

<PackegesCard/>
</View>

    </View>
  )
}
    const renderItem = (itemData) =>{ 
    
   if   (itemData.item.category === 'excursion') {  
      return(
      
      <Excursions
    name= {itemData.item.name}
    logo = {itemData.item.logo}
    image={itemData.item.image}
      onSelect={()=>{
     props.navigation.navigate({routeName: 'Barber_Services',
      params:{
            serviceId : itemData.item._id,
            serviceTitle : itemData.item.name
          }
        })
      }}
      // onSelectExcursions={()=>{
      //   props.navigation.navigate({routeName: 'Excursions_Detail',
      //   //  params:{
      //   //        serviceId : itemData.item._id,
      //   //        serviceTitle : itemData.item.name
      //   //      }
      //       })
      //    }}

      // onSelectFilter={()=>{
      //   props.navigation.navigate({routeName: 'Filter_Screen'})
      //    }} 
     
     
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
    }
   else { 

  return(
     <Services
  name= {itemData.item.name}
  logo = {itemData.item.logo}
  image={itemData.item.image}
    onSelect={()=>{
   props.navigation.navigate({routeName: 'Excursions_Detail',
    params:{
          serviceId : itemData.item._id,
          serviceTitle : itemData.item.name
        }
      })
    }}

    // onSelectExcursions={()=>{
    //   props.navigation.navigate({routeName: 'Excursions_Detail',
    //   //  params:{
    //   //        serviceId : itemData.item._id,
    //   //        serviceTitle : itemData.item.name
    //   //      }
    //       })
    //    }}

    // onSelectFilter={()=>{
    //   props.navigation.navigate({routeName: 'Filter_Screen'})
    //    }} 
   
   
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
};  
    
  return (
    <View style={{width:'100%'}}>    
 
  <FlatList
        data={SERVICES.concat(EXCURSIONSCATEGORY)}
        keyExtractor={item => item._id}
        ListFooterComponent={listFooter}
        renderItem={renderItem}
        numColumns={3}
        ListHeaderComponent={listHeader}
      />
  {/* <FlatList 
  keyExtractor={(item)=> item.id}
  data={ServicesData}
  renderItem={renderGridItem} 
  /> */}
  </View>
);
}

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
),
  }
}

export default BarberShops



