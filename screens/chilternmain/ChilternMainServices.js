import React from 'react';
import Services from '../../components/services/Services'
import {View,FlatList, Text, Share } from 'react-native'
import {HeaderButtons, Item} from 'react-navigation-header-buttons'
import HeaderButton from '../../components/headerButton/HeaderButton'
import SERVICES from '../../data/Services'




const ChilternMainServices = (props) =>{

  const ListHeader = () => {
    //View to set in Header
    return (
      <View style={{flex:1}}>
        <Text style={{fontSize:18,fontFamily:'open-sans-bold', color:'#444'}}>
            Services
        </Text>
      </View>
    );
  };

  
  const renderItem = (itemData) =>{ 
    return(
       
      <Services
    title= {itemData.item.name}
    logo = {itemData.item.logo}
    image={itemData.item.image}
    //   onSelect={()=>{
    //  props.navigation.navigate({routeName: 'Excursions_Detail',
    //   params:{
    //         excursion_id : itemData.item._id,
    //         excursions_title : itemData.item.name
    //       }
    //     })
    //   }}
    
      />
      );
    };  
  
  
  return (
    <View style={{width:'100%'}}>    
 
  <FlatList
        data={SERVICES}
        keyExtractor={item => item._id}
        renderItem={renderItem}
        numColumns={2}
        ListHeaderComponent={ListHeader}
      />
  
  </View>
);
}

// ChilternMainServices.navigationOptions = navData => {

// return{    
//   headerTitle:'Home',
//   headerLeft: () => (
//   <HeaderButtons HeaderButtonComponent = {HeaderButton}>
//     <Item 
//     title='Menu' 
//     iconName='ios-menu' 
//     onPress={() => {
//       navData.navigation.toggleDrawer();
//     }} /> 

//   </HeaderButtons>
// ),
// headerRight: () => (  <HeaderButtons HeaderButtonComponent={HeaderButton}>
//   <Item  iconName="share-social-sharp"
//  onPress={
//   () => {
//     Share.share({
//       title: 'Paradisegoc App',
//       message:  'https://reactnative.dev/docs/share'  + '\nHy! Happy to see you!'
//     }).then((res) => console.log(res))
//       .catch((error) => console.log(error))
//   }
//  } />
  
// </HeaderButtons>
// ),
//   }
// }

export default ChilternMainServices



