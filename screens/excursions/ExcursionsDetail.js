import React from 'react';
import { View } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import Ratting from '../../components/rating/Rating'
import { Ionicons } from '@expo/vector-icons';
import Color from '../../colors/Color'
import EXCURSIONSCATEGORY from '../../data/ExcursionsCategory'
import {HeaderButtons, Item} from 'react-navigation-header-buttons'
import HeaderButton from '../../components/headerButton/HeaderButton'


// const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

// const shTitle = props.navigation.getParam('shopTitle');
// const displayedSubCompanies = Excursions.filter(
//   company=> company.category === shTitle  );

const ExcursionsDetail = () => {
return (
  <Card
  elevation={15}
  >
    {/* <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} /> */}
    {/* <Card.Content>
      <Title>Card title</Title>
      <Paragraph>Card content</Paragraph>
    </Card.Content> */}
    <Card.Cover source={require('../../assets/images/excursions/helicopter.jpg')} />
     <Card.Content >
         <View style={{ flexDirection:'row' ,alignItems:'center',justifyContent:'space-between'}}>
      <Title>Helicopter-Ride</Title>
      <View style={{flexDirection:'row'}}>
    <Ionicons name = 'location' size={18} color={Color.primaryColour} style={{marginLeft:20}}/>
     
      <Paragraph style={{}}>
          
          Dubai,UAE
          </Paragraph>
          </View>
      </View>
    </Card.Content>
    <Card.Content >
         <View style={{ flexDirection:'row' ,alignItems:'center',justifyContent:'space-between'}}>
      <Ratting/>
      <View style={{flexDirection:'row'}}>
    <Ionicons name = 'flash' size={18} color={Color.primaryColour} style={{marginLeft:20}}/>
     <Paragraph style={{}}>from  AED580</Paragraph>
          </View>
      </View>
    </Card.Content>
    <Card.Actions>
      <Button>Cancel</Button>
      <Button>Ok</Button>
    </Card.Actions>
  </Card>
);
}

// const  ExcursionsDetailList = (props) =>{
   
//     const ListHeader = () => {
//       //View to set in Header
//       return (
//         <View style={{flex:1}}>
//           <Text style={{fontSize:18,fontFamily:'open-sans-bold', color:'#444'}}>
//               Excursions
//           </Text>
//         </View>
//       );
//     };
    
//      const renderItem = (itemData) =>{ 
//           return(
             
//             <ExcursionsDetail
//           title= {itemData.item.name}
//           logo = {itemData.item.logo}
//           onSelect={props.onSelect}
  
//   />
//             );
//           };  
//       return(
//   <View style={{width:'100%'}}>    
   
//    <FlatList
//          data={EXCURSIONSCATEGORY}
//          keyExtractor={item => item._id}
//          renderItem={renderItem}
//          numColumns={3}
//          ListHeaderComponent={ListHeader}
//        />
//        </View>
//       )
//   }

  //ExcursionsDetailList.navigationOptions = navigationData => {
    // const shId = navigationData.navigation.getParam('shopId');
    // const selectedCompany = ServicesData.find(shop =>shop.id===shId);
  
//     return{
//       headerTitle: 'Detail', 
//       headerRight: () => (  <HeaderButtons HeaderButtonComponent={HeaderButton}>
//         <Item title="compdetail"
//         iconName="ios-star"/>
//       </HeaderButtons>
//       )
//     };
  
//   };
  
  export default ExcursionsDetail