import React from 'react';
import { View,FlatList,Text } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import Ratting from '../../components/rating/Rating'
import { Ionicons } from '@expo/vector-icons';
import Color from '../../colors/Color'
import EXCURSIONSCATEGORY from '../../data/ExcursionsCategory'
import {HeaderButtons, Item} from 'react-navigation-header-buttons'
import HeaderButton from '../../components/headerButton/HeaderButton'
import EXCURSION from '../../data/Excursions'
import ExcursionsCards from '../../components/excursions/ExcursionsCards'
// const LeftContent = props => <Avatar.Icon {...props} icon="folder" />



// const ExcursionsDetail = () => {
// return (
//   <Card
//   elevation={15}
//   >
//     {/* <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} /> */}
//     {/* <Card.Content>
//       <Title>Card title</Title>
//       <Paragraph>Card content</Paragraph>
//     </Card.Content> */}
//     <Card.Cover source={require('../../assets/images/excursions/helicopter.jpg')} />
//      <Card.Content >
//          <View style={{ flexDirection:'row' ,alignItems:'center',justifyContent:'space-between'}}>
//       <Title>{displayedSubCompanies}</Title>
//       <View style={{flexDirection:'row'}}>
//     <Ionicons name = 'location' size={18} color={Color.primaryColour} style={{marginLeft:20}}/>
     
//       <Paragraph style={{}}>
          
//           Dubai,UAE
//           </Paragraph>
//           </View>
//       </View>
//     </Card.Content>
//     <Card.Content >
//          <View style={{ flexDirection:'row' ,alignItems:'center',justifyContent:'space-between'}}>
//       <Ratting/>
//       <View style={{flexDirection:'row'}}>
//     <Ionicons name = 'flash' size={18} color={Color.primaryColour} style={{marginLeft:20}}/>
//      <Paragraph style={{}}>from  AED580</Paragraph>
//           </View>
//       </View>
//     </Card.Content>
//     <Card.Actions>
//       <Button>Cancel</Button>
//       <Button>Ok</Button>
//     </Card.Actions>
//   </Card>
// );
// }

const  ExcursionsDetail = (props) => {
  
  const shTitle = props.navigation.getParam('excursionTitle');
  const DisplayedSubCompanies = EXCURSION.filter(
    exer => exer.catagory === shTitle  );  

   // const ListHeader = () => {
    //   //View to set in Header
    //   return (
    //     <View style={{flex:1}}>
    //       <Text style={{fontSize:18,fontFamily:'open-sans-bold', color:'#444'}}>
    //           Excursions
    //       </Text>
    //     </View>
    //   );
    // };
    
     const renderExcursions = (itemData) =>{ 
          return(
            <ExcursionsCards
          title= {itemData.item.name}
          images = {itemData.item.image}
          costs = {itemData.item.cost}
          price = {itemData.item.price}
          onSelect={()=>{
            props.navigation.navigate({routeName: 'Contact_Us'})}}
  
  />
            );
          };  
 return (
  <View style={{width:'100%'}}>    
   
   <FlatList
         data={DisplayedSubCompanies}
         keyExtractor={item => item._id}
         renderItem={renderExcursions}
         numColumns={1}
        //  ListHeaderComponent={ListHeader}
       />
       </View>
      )
  }

  ExcursionsDetail.navigationOptions = navigationData => {
    const excursionTitle = navigationData.navigation.getParam('excursionTitle');
  //  const selectedCompany = ServicesData.find(shop =>shop.id===shId);
  
    return{
      headerTitle: excursionTitle, 
      headerRight: () => (  <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item title="compdetail"
        iconName="ios-star"/>
      </HeaderButtons>
      )
    };
  
  };
  
  export default ExcursionsDetail