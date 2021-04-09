// *****************************Swiper Styling Start *******************************
import {StyleSheet} from 'react-native'
import {Dimensions} from 'react-native'
let {width:screenWidth, height:screenHeight} = Dimensions.get('window')

export default StyleSheet.create({


// ************************************************ Main Page Style Home

containerStyleAvatar:{
    backgroundColor:'#121212',

shadowColor: "#000",
shadowOffset: {
  width: 0,
  height: 12,
},
shadowOpacity: 0.58,
shadowRadius: 16.00,

elevation: 24,

},


slide1: {
    flex:1,
    
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB'
    },
    slide2: {
      flex:1,
    
    
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5'
    },
    slide3: {
      flex:1,
    
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9'
    },
    text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
    },
    imagess:{
      flex:1,
    resizeMode:'stretch',
    width:'100%',
    
    },
    
    // **************************** About page Start *******************************
    aboutSwiper:{
      resizeMode:'stretch',
      height:screenHeight/3,
      width:screenWidth,
    },
    Aboutdetail:{
      
      
        color: '#808080',
        fontWeight: '600',
        textAlign: 'justify',
        width: screenWidth * 0.93,
        
        
        fontSize: 16,
        lineHeight: 16 * 1.5,
        //paddingBottom:30,
      
    },
    Aboutheading: {
      marginTop:15,
      color: '#444',
      textTransform: 'uppercase',
      fontSize: 24,
      
      fontWeight: '800',
      textAlign:'center',
      letterSpacing: 2,
      
      fontFamily:'open-sans-bold',
    
    },

});