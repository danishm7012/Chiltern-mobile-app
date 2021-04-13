import React from 'react';
import Excursions from '../../components/excursions/Excursions'
import {View,FlatList, Text, Share } from 'react-native'
import {HeaderButtons, Item} from 'react-navigation-header-buttons'
import HeaderButton from '../../components/headerButton/HeaderButton'
import EXCURSIONSCATEGORY from '../../data/ExcursionsCategory'



const ChilternExcursionsMain = (props) =>{

  const ListHeader = () => {
          //View to set in Header
          return (
            <View style={{flex:1}}>
              <Text style={{fontSize:18,fontFamily:'open-sans-bold', color:'#444'}}>
                  Excursions
              </Text>
            </View>
          );
        };
        


    const renderItem = (itemData) =>{ 
    return(
       
      <Excursions
    title= {itemData.item.name}
    logo = {itemData.item.logo}
    image={itemData.item.image}
    onSelect={() => {
      props.navigation.navigate({routeName: 'Excursions_Detail',
       params:{
             serviceId : itemData.item._id,
             serviceTitle : itemData.item.name
           }
          })
       }}
    
      />
      );
    };  
  
  
  return (
    <View style={{width:'100%'}}>    
 
  <FlatList
        data={EXCURSIONSCATEGORY}
        keyExtractor={item => item._id}
        renderItem={renderItem}
        numColumns={3}
        ListHeaderComponent={ListHeader}
      />
  
  </View>
);
}

// ChilternExcursionsMain.navigationOptions = navData => {

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

export default ChilternExcursionsMain



