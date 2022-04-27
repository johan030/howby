import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import React from 'react'
import Header from '../components/secondPage/Header';
import Introduction from '../components/secondPage/Introduction'
import ImageSlider from '../components/secondPage/ImageSlider'
import Emplacements from '../components/secondPage/Emplacements';

const SecondPage = () => {
    return (
        <SafeAreaView style={styles.container}>
          <Header /> 
          <Introduction />
          <ImageSlider />
          <Emplacements />
        </SafeAreaView>
      )
}

const styles = StyleSheet.create ({
    container: {
      backgroundColor: '##F0F0DF',
      marginTop: '1rem',
      marginRight: '1rem',
      marginLeft: '1rem',
      flex: 1,
    }
  })

  
export default SecondPage