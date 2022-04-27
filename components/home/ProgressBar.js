import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import ProgressBar from 'react-native-animated-progress'

const Bar = () => {
    return (
       
         <>
          <View>
              <View style={styles.wrapper}>
            <Text>Ressenti sur Howby</Text>
            <Text>94% favorable</Text>
            </View>
            <ProgressBar
              progress={94}
              height={7}
              backgroundColor="#4a0072"
              animated={false}
            />
          </View>
        </>
      );
}
const styles = StyleSheet.create({
    wrapper: {
        
        marginTop: '10px',
        marginLeft: '1rem',
        marginRight: '1rem',
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})
export default Bar