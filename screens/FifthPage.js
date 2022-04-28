import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import CheckBoxes from '../components/fifthPage/CheckBoxes'

const FifthPage = () => {
  return (
    <View style={styles.container}>
      <CheckBoxes />
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
        margin: '1rem'
    }
});

export default FifthPage