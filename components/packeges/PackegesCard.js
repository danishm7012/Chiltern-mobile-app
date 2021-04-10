import React from 'react';
import { Card,  Button, Icon } from 'react-native-elements'
import { FlatList, SafeAreaView,ScrollView, ImageBackground, Text, TouchableOpacity, View } from "react-native";
import {Dimensions} from 'react-native'
let {width:screenWidth, height:screenHeight} = Dimensions.get('window')

export const DATA = [
  {
    id:'p1' ,
    name: 'Fenghuang Elevator Pvt Ltd.',
    imgs: require('../../assets/ContactUS.jpg'),
    detail: 'We are in extremely good to prvoide our services to our customers. We is the installation, maintenance, repair, reconstruction and modernization of elevators, escalators, parking systems and lifting equipment.',
    comDetailText1: 'We are in extremely good to prvoide our services to our customers. ',
    comDetailText2:'We is the installation, maintenance, repair, reconstruction and modernization of',
    comDetailText3:'elevators, escalators, parking systems and lifting equipment.',
    service:
    'What we Offer to our customers. 1.Installation 2.Maintenance 3.Repair 4.Reconstruction 5.Modernization',
  vision:
    'Our vision is to help individuals in the market to find their ideal products. Our mission is to provide state of the art services and features for our clients. Our objective is to aware consumers with the most detailed and dependable information in the market. We have sound and correct data of our Community all over Pakistan which always helps us to evaluate the original Market Rate, Investment, returns and genuineness. Many others only claim but we have done a lot for time saving and reducing expensive process of visits of proposed products.',
    country:"china",
    phoneNo: '+92-111-777-666',
  whatsaap: '+44 7379 331419',
  email: 'Missing',
  website: 'Missing',
  facebook: 'https://www.facebook.com/pg/Fenghuangelevator-552526915238948/about/?ref=page_internal',
  twitter: null,
  linkedin: 'Missing',
  instagram:'Missing',
  },
 {
   id: 'p2',
   name: 'Long Hui Ventures Pvt Ltd.',
   imgs: require('../../assets/ContactUS.jpg'),
   detail: 'Long Hui Ventures Pvt Ltd. is a company established in Pakistan as Sole Distributor from LanZhou Yatai Eastern Elevator Co. Ltd. which supplies lifts (all categories), Elevators & Parking Lifts.',
   comDetailText1: 'Long Hui Ventures Pvt Ltd. is a company established in Pakistan as Sole Distributor from LanZhou Yatai Eastern Elevator Co. Ltd.',
   comDetailText2:'which supplies lifts (all categories), Elevators & Parking Lifts Initially. After Sales Service 2/3/5 years having its offices in all Major cities of Pakistan.',
   comDetailText3:'Eastern Elevators International (Australia) & Asia Pacific industrial (Group) Company [China] merged and formed LanZhou Yatai Eastern Elevator Co. Limited.',
   
   service:
   'What we Offer to our customers. 1.Installation 2.Maintenance 3.Repair 4.Reconstruction 5.Modernization',
 vision:
   'Our vision is to help individuals in the market to find their ideal products. Our mission is to provide state of the art services and features for our clients. Our objective is to aware consumers with the most detailed and dependable information in the market. We have sound and correct data of our Community all over Pakistan which always helps us to evaluate the original Market Rate, Investment, returns and genuineness. Many others only claim but we have done a lot for time saving and reducing expensive process of visits of proposed products.',
 phoneNo: '+447391758721',
 country:"china",
 whatsaap: '+44 7379 331419',
 email: 'info@paradisegoc.com',
 website: 'Missing',
 facebook: 'https://www.facebook.com/pg/Fenghuangelevator-552526915238948/about/?ref=page_internal',
 twitter: null,
 linkedin: 'Missing',
 instagram:'Missing', 
   
  },
  
];

const Cards = ({ imgs,name,detail }) => {

 return ( 
   

 <TouchableOpacity 
 >
     
        <View style={{flex:1,marginLeft:20,height:screenHeight/5}}>
        <ImageBackground source={imgs} style={{height:screenHeight/5,width:screenHeight/2.9}}>
        {/* <Text style={{ fontFamily: 'open-sans-bold'}}>{name}</Text> */}
        </ImageBackground>
    {/* <Card.Image style={{height:screenHeight/5, width:screenHeight/2.9, resizeMode:'stretch'}} source={imgs}>
  
    </Card.Image> */}
    </View>
    {/* <Card.Title style={{fontFamily: 'open-sans-bold'}}>{name}</Card.Title>
    <Card.Divider/>

    <Text style={{marginBottom: 1 }}>
 {detail}
      </Text> */}
      {/* <Button
     // onPress={onSelect}
        icon={<Icon name='code' color='#ffffff' />}
        buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0, backgroundColor:'#6c398f'}}
        title='MORE INFO' /> */}
{/* </TouchableOpacity>  </Card> */}
  
  </TouchableOpacity>

);
}
const PackegesCard = (props) => {

 // const renderItem = ({ item }) => {

    return (
        <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        
    >
      <Cards
    
    imgs={ require('../../assets/ChiltrenPackages/chiltern.jpg')  }
    name = {'Packeges'}
    detail = {'Packeges Detail'}
    />
    <Cards
    
    imgs={ require('../../assets/ChiltrenPackages/chiltern2.jpg')  }
    name = {'Packeges'}
    detail = {'Packeges Detail'}
    />
    <Cards
    
    imgs={ require('../../assets/ChiltrenPackages/chiltern3.jpg')  }
    name = {'Packeges'}
    detail = {'Packeges Detail'}
    />
    <Cards
    
    imgs={ require('../../assets/ChiltrenPackages/chiltern4.jpg')  }
    name = {'Packeges'}
    detail = {'Packeges Detail'}
    />
    </ScrollView>
        // onSelect={()=>{
        //   props.navigation.navigate({routeName: 'Partners_Detail',
        //   params:{
        //     partnersDetailId: item.id
        //   }
        // });
        //}}
      
    );
  };
  
//   return (
//     <SafeAreaView>
//       <FlatList
//         data={DATA}
//         renderItem={renderItem}
//         keyExtractor={(item) => item.id}
//         numColumns={1}
//       />
//     </SafeAreaView>
//   );
// };
export default PackegesCard;