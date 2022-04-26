import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import Header  from '../components/home/Header';
//import Image from '../components/home/Image'



const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      
    
      
    </SafeAreaView>
  )
}



const styles = StyleSheet.create ({
  container: {
    backgroundColor: '##F0F0DF',
    flex: 1,
  }
})

export default HomeScreen