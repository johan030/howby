import { View, Text } from 'react-native'
import React from 'react'
import Header from '../components/secondPage/Header';

const SecondPage = () => {
    return (
        <SafeAreaView style={styles.container}>
          <Header /> 
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

  
export default SecondPage