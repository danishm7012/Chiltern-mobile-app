import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import ServiceNavigators from './navigation/BarberNavigation'
import AppLoading from 'expo-app-loading'
import * as Font from 'expo-font'
import { enableScreens } from 'react-native-screens'
import MainDrawerNavigator from './navigation/BarberNavigation'

// import { Provider } from 'react-redux'
// import store from './store'

enableScreens()
const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  })
}

export default function App() {
  let x = 1
  const [fontloaded, setfontloaded] = useState(false)

  if (!fontloaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setfontloaded(true)}
        onError={console.err}
      />
    )
  }
  return (
   // <Provider store={store}>
      <MainDrawerNavigator />
    //</Provider>
  )
}
