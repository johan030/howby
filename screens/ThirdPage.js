import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import HickingInformation from '../components/thirdPage/HickingInformation';
import Prices from '../components/thirdPage/Prices';
import Hours from '../components/thirdPage/Hours';
import Rating from '../components/thirdPage/Rating';
import ComplementInformation from '../components/thirdPage/ComplementInformation';

const ThirdPage = () => {
  return (
      <>
    <View style={styles.container}>
      <HickingInformation />
      <Prices />
      <Hours />
      <Rating />
      <ComplementInformation />
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