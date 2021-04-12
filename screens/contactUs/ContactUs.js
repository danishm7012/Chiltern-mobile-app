import React, { useState } from 'react'
import {
  View,
  Image,
  TextInput,
  Button,
  StatusBar,
  Text,
  ScrollView,
  SafeAreaView,
} from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import HeaderButton from '../../components/headerButton/HeaderButton'
import axios from 'react-native-axios'
import AllStyle from '../../AllStyle'
import SocialMediaIcon from '../../components/socialMediaIcon/SocialMediaIcon'

const ContactUs = (props) => {
  const [value, setValue] = useState(0)

  const [socialLinks, setSocialLinks] = useState({
    facebook:
      'https://www.facebook.com/Learning-Business-Globe-110291561146464',
    instagram: 'https://www.instagram.com/lbglobe/',
    twitter: 'https://twitter.com/BussinessGlobe',
    linkedIn: 'https://www.linkedin.com/in/lb-globe-15411a20a/',
    website: 'http://lbglobe.herokuapp.com/',
  })

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  const [errors, setErrors] = useState({})

  const submitHandler = async () => {
    try {
      const response = await fetch(
        'http://chiltern.herokuapp.com/api/contact/add',
        {
          method: 'POST',
          mode: 'cors',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name, subject, email, message }),
        }
      )
      const resData = await response.json()
      if (resData) {
        console.log('submit succefully!')
        alert(resData)
      }
    } catch (err) {
      setErrors(err)
      console.log(err)
    }
  }

  return (
    <View style={{ flex: 1 }}>
      <View style={AllStyle.contactUsImagesView}>
        <Image
          source={require('../../assets/ContactUS.jpg')}
          style={AllStyle.contactUsImages}
        />
      </View>
      <View style={AllStyle.mainContactForm}>
        <View style={AllStyle.contactUsformMainHeading}>
          <Text style={AllStyle.contactUsformMainHeadingOuter}>
            {' '}
            Contact{' '}
            <Text style={AllStyle.contactUsformMainHeadingInner}> Us</Text>{' '}
          </Text>
        </View>
        <SafeAreaView style={{ paddingTop: StatusBar.currentHeight }}>
          <ScrollView style={{}}>
            <View style={{ flex: 1 }}>
              <View style={{ flex: 1 }}>
                <TextInput
                  style={AllStyle.TextinputfieldcontactUs}
                  placeholder='Name'
                  onChangeText={(name) => setName(name)}
                  value={name}
                  placeholderTextColor='#0f385a'
                />

                {errors.name}

                <TextInput
                  style={AllStyle.TextinputfieldcontactUs}
                  placeholder='Email'
                  placeholderTextColor='#0f385a'
                  onChangeText={(useremail) => setEmail(useremail)}
                  value={email}
                  textContentType='emailAddress'
                />
                {errors.email}
                <TextInput
                  style={AllStyle.TextinputfieldcontactUs}
                  placeholder='Subject'
                  placeholderTextColor='#0f385a'
                  onChangeText={(subject) => setSubject(subject)}
                  value={subject}
                />
                {errors.subject}

                <TextInput
                  style={AllStyle.TextinputfieldcontactUs}
                  placeholder='Leave your Message Here !'
                  placeholderTextColor='#0f385a'
                  multiline={true}
                  numberOfLines={4}
                  onChangeText={(usermessage) => setMessage(usermessage)}
                  value={message}
                />
              </View>

              {/* <Slider
          step={1}
          minimumValue={0}
          maximumValue={100}
          value={value}
          onValueChange={slideValue => setValue(slideValue)}
          minimumTrackTintColor="#1fb28a"
          maximumTrackTintColor="#d3d3d3"
          thumbTintColor="#b9e4c9"
        /> */}
            </View>
            <View style={{ paddingTop: StatusBar.currentHeight }}>
              <Button title='Submit' color='#0f385a' onPress={submitHandler} />
            </View>

            <View
              style={{
                paddingTop: StatusBar.currentHeight * 2.5,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <SocialMediaIcon
                //  style={AllStyles.logo}
                //  style={{position:'absolute'}}
                facebookSocial={socialLinks.facebook}
                twitterSocial={socialLinks.twitter}
                linkedInSocial={socialLinks.linkedIn}
                instagramSocial={socialLinks.instagram}
                websiteSocial={socialLinks.website}
              />
            </View>
          </ScrollView>
        </SafeAreaView>
      </View>
    </View>
  )
}

ContactUs.navigationOptions = (navData) => {
  return {
    headerTitle: 'ContactUs',
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title='Menu'
          iconName='ios-menu'
          onPress={() => {
            navData.navigation.toggleDrawer()
          }}
        />
      </HeaderButtons>
    ),
  }
}

export default ContactUs
