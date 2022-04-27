import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import Header  from '../components/home/Header';
//import Image from '../components/home/Image'
import MiddleComponent from '../components/home/MiddleComponent';
import Services from '../components/home/Services';
import ProgressBar from '../components/home/ProgressBar';



const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header /> 
      <MiddleComponent />
      <Services />
      <ProgressBar />
    </SafeAreaView>
  )
}



const styles = StyleSheet.create ({
  container: {
    backgroundColor: '##F0F0DF',
    marginTop: '1rem',
    flex: 1,
  }
})

export default HomeScreen