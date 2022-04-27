import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import HickingInformation from '../components/thirdPage/HickingInformation';

const ThirdPage = () => {
  return (
      <>
    <View style={styles.container}>
      <HickingInformation />
    </View>
    </>
  )
}


const styles = StyleSheet.create({
    container: {
        margin: '1rem'
    }
});
export default ThirdPage