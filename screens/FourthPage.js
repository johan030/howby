import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import HealthSecurity from '../components/fourthPage/HealthSecurity'

const FourthPage = () => {
  return (
    <View style={styles.container}>
      <HealthSecurity />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        margin: '1rem'
    }
});
export default FourthPage