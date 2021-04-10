import React from 'react';
import {View ,FlatList} from 'react-native';
import BarberServicesGrid from '../components/barberShopScreens/BarberServicesGrid';
import {HeaderButtons, Item} from 'react-navigation-header-buttons'
import HeaderButton from '../components/headerButton/HeaderButton'

const BarberServices = props =>{

  
//   const shId = props.navigation.getParam('shopId');
//   const displayedSubCompanies = NationalCompanies.filter(
//     company=> company.companyIds.indexOf(shId) >= 0 );

  // const shTitle = props.navigation.getParam('shopTitle');
  // const displayedSubCompanies = NationalCompanies.filter(
  //   company=> company.category === shTitle  );
  
   // const renderCompanyItem = itemData =>{
      return(
        <BarberServicesGrid
        onSelect={()=>{
                         props.navigation.navigate({routeName: 'BarberBook_Appointment',})
        }}
        
                         />
//         <View style={{flex:1 }}>
          
         
            
//             <BarberServicesGrid
//             title={itemData.item.name}
//              shopslogo={itemData.item.logo}
//              phnNum = {itemData.item.phoneNo}
//              addrss={itemData.item.address}
//             onSelect={()=>{
//               props.navigation.navigate({routeName: 'BarberBook_Appointment',
//               params:{
//                 shopDetail : itemData.item.id
//               }
//             });
//             }}
//             />
          
// </View>
      );
    };
    

//   return(
    
    
//     <View style={{flex:1}}>
//     <FlatList data={displayedSubCompanies}
      
//     // ListHeaderComponent={ <CustomCarousel/> }
//       keyExtractor={item => item.id}
//      renderItem={renderCompanyItem}
//      numColumns={1}
//     />
//     </View>
// );
// };
BarberServices.navigationOptions = navigationData => {
  // const shId = navigationData.navigation.getParam('shopId');
  // const selectedCompany = ServicesData.find(shop =>shop.id===shId);

  return{
    headerTitle: 'Detail', 
    headerRight: () => (  <HeaderButtons HeaderButtonComponent={HeaderButton}>
      <Item title="compdetail"
      iconName="ios-star"/>
    </HeaderButtons>
    )
  };

};


export default BarberServices;

