import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const introduction = () => {
  return (
    <View>
      <Text style={{fontSize: '25px'}}>DANS</Text>
      <Text style={styles.text}>le livre de réservation, les noms des clients sont rares. "Nous avons deux tables réservées pour midi,
          trois pour ce soir, consulte Paula.
          Disons que c'est rien pour une journée normale. On va dire que c'est une petite reprise
      </Text>
      <Text>En savoir plus</Text>
    </View>
  )
}


const styles = StyleSheet.create ({
    text: {
        color: '#506266',
        marginTop: 5,
        marginBottom: 10,
        lineHeight: '20px'
  
    }
})
export default introduction