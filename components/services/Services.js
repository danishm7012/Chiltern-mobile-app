import React from 'react'
import {View,Text,Dimensions,FlatList} from 'react-native'
 import { Card,Avatar, Icon, Button } from 'react-native-elements'
import AllStyle from '../../AllStyle'
import SERVICES from '../../data/Services'

 let {height, width} = Dimensions.get("window")

function Services({onSelect,title,logo,image}) {
    return (
<View style={{flex:1}}>
{/* <View style={{marginTop:1 }}>
<Text style={{fontSize:18,fontFamily:'open-sans-bold', color:'#444' }}>Services</Text>

</View> */}
<View style={{marginTop:10, flexDirection:'row',alignItems:'center',justifyContent:'space-around'}}>
<View style={{flex:0.3,alignItems:'center',justifyContent:'center'}}>
<Avatar
  size="large"
  rounded
  imageProps={{resizeMode:'stretch',margin:5}}
  containerStyle={AllStyle.containerStyleAvatar}
  // resizeMode='stretch'
  source={logo}
  
  onPress={onSelect}
  overlayContainerStyle={{backgroundColor:'#fff'}}
  // onPress={() => console.log("Works!")}
  activeOpacity={0.7}
/>
<Text style={{fontSize:12,marginTop:18, marginBottom:18, color:'#444'}}>{title}</Text>
</View>
</View>

</View>
   
)
}


 const  ServicesFlatlist = (props) =>{
   
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
        onSelect={props.onSelect}
/>
          );
        };  
    return(
<View style={{width:'100%'}}>    
 
 <FlatList
       data={SERVICES}
       keyExtractor={item => item._id}
       renderItem={renderItem}
       numColumns={2}
       ListHeaderComponent={ListHeader}
     />
     </View>
    )
}
export default ServicesFlatlist