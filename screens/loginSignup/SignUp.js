import React, { useState } from 'react';
import { StyleSheet,Image,TextInput,TouchableOpacity,Button, Text, View } from 'react-native';
import Color from '../../colors/Color'

 function SignUp(navData) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [confirmpassword, setConfirmPassword] = useState('');
 
 return (
<View style={styles.container}>
{/* <Image source = {require("./assets/logo.png")}/> */}

 <View style={{flex:0.3,alignSelf:'stretch', justifyContent:'center',alignItems:'center', paddingTop:30, backgroundColor:Color.primaryColour}}>
 <Image style={{width:'70%',resizeMode:'stretch'}} source = {require("../../assets/chiltern-logo.png")}/>
     </View>   
   
<View style={{flex:1,alignSelf:'stretch',justifyContent:'center',
 alignItems:'center',
  borderTopRightRadius:70,
  borderTopLeftRadius:70 , 
  backgroundColor:Color.accentColour,
elevation:32  
  }}>
    <View style={styles.inputView}>
    <TextInput
      style={styles.TextInput}
      placeholder="Name..."
      placeholderTextColor="#003f5c"
      onChangeText={(email) => setName(email)}
    />
  </View>
   
  <View style={styles.inputView}>
    <TextInput
      style={styles.TextInput}
      placeholder="Email..."
      placeholderTextColor="#003f5c"
      secureTextEntry={true}
      onChangeText={(password) => setEmail(password)}
    />
  </View>
  <View style={styles.inputView}>
    <TextInput
      style={styles.TextInput}
      placeholder="Password..."
      placeholderTextColor="#003f5c"
      secureTextEntry={true}
      onChangeText={(password) => setPassword(password)}
    />
  </View>
  <View style={styles.inputView}>
    <TextInput
      style={styles.TextInput}
      placeholder="Confirm Password."
      placeholderTextColor="#003f5c"
      secureTextEntry={true}
      onChangeText={(password) => setConfirmPassword(password)}
    />
  </View>
  <TouchableOpacity style={styles.loginBtn}>
  <Text style={styles.loginText}>REGISTER</Text>
</TouchableOpacity>
<TouchableOpacity 
onPress={
    () => {
      navData.navigation.goBack()
    }}
style={styles.loginBtn}>
  <Text 
   
  style={styles.loginText}>LOGIN</Text>
</TouchableOpacity>
</View>
  </View>
 );
}

export default SignUp
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Color.primaryColour,
      alignItems: 'center',
      justifyContent: 'center',
    },
    
      inputView: {
        backgroundColor: "#fff",
        width: "90%",
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
   height:50,
   borderRadius: 30,
   
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