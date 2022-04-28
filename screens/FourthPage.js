import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import HealthSecurity from '../components/fourthPage/HealthSecurity'
import SimilarContent from '../components/fourthPage/SimilarContent'

const FourthPage = () => {
  return (
    <View style={styles.container}>
      <HealthSecurity />
      <SimilarContent />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        margin: '1rem'
    }
});
export default FourthPage