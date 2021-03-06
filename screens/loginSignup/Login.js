import React, { useState } from 'react';
import { StyleSheet,Image,SafeAreaView,ScrollView, TextInput,TouchableOpacity,Button, Text, View } from 'react-native';
import Color from '../../colors/Color'

 function Login(navData) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
 return (


<View style={styles.container}>
{/* <Image source = {require("./assets/logo.png")}/> */}

 <View style={{flex:0.5,alignSelf:'stretch', paddingTop:80, backgroundColor:Color.primaryColour, borderBottomRightRadius:70,borderBottomLeftRadius:70}}>
 <Image source = {require("../../assets/chiltern-logo.png")}/>
     </View>   
   
<View style={{flex:1,alignSelf:'stretch',justifyContent:'center', alignItems:'center',  backgroundColor:Color.accentColour}}>
    <View style={styles.inputView}>
    <TextInput
      style={styles.TextInput}
      placeholder="Email."
      placeholderTextColor="#003f5c"
      onChangeText={(email) => setEmail(email)}
    />
  </View>
   
  <View style={styles.inputView}>
    <TextInput
      style={styles.TextInput}
      placeholder="Password."
      placeholderTextColor="#003f5c"
      secureTextEntry={true}
      onChangeText={(password) => setPassword(password)}
    />
  </View>
  <TouchableOpacity style={styles.loginBtn}>
  <Text style={styles.loginText}>LOGIN</Text>
</TouchableOpacity>
<TouchableOpacity 
onPress={
    () => {
      navData.navigation.goBack()
    }}
style={styles.loginBtn}>
  <Text 
     
  style={styles.loginText}>Cancel</Text>
</TouchableOpacity>
<Text style={{padding:5,color:'#fff', fontFamily:'open-sans'}}>First  
    <Text 
    onPress={
        () => {
          navData.navigation.navigate('Sign_Up')
        }}
    style=
    {{fontFamily:'open-sans-bold',  
    color:Color.primaryColour, 
    textDecorationLine:'underline',
    letterSpacing:1 }}>
        Register</Text>
    Your Self
</Text>
</View>
  </View>

 );
}

export default Login
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Color.accentColour,
      alignItems: 'center',
      justifyContent: 'center',
    },
    
      inputView: {
        backgroundColor: "#fff",
      //  borderRadius: 30,
        width: "80%",
        height: 45,
        marginBottom: 20,
        alignItems: "center",
      },
      
      TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 20,
      },
loginBtn:{
   width:"60%",
   borderRadius:25,
   height:50,
   
   alignItems:"center",
   justifyContent:"center",
   marginTop:10,
   borderWidth:1,
   borderColor:Color.primaryColour,
   backgroundColor:Color.accentColour,
 },
 loginText:{
color:'#fff',
fontFamily:'open-sans-bold',
 },
  });