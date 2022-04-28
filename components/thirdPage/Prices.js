import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

const Prices = () => {
  return (
      <>
    <View style={styles.wrapper}>
      <Text style = {{color: 'red'}}>Tarifs</Text>
      <Image source= {{uri: 'https://img.icons8.com/material-two-tone/24/000000/euro-pound-exchange.png'}} style={styles.icon} />
    </View>

    <View style={styles.content}>
        <Text style={{marginBottom: '15px'}}>Tarif de bases</Text>
        <Text style={styles.text}>20 € de l'heure</Text>
        <Text  style={styles.text}>10 € par personnes</Text>
        <Text  style={styles.text}>20 € par personnes</Text>
    </View>
    <View style={styles.content}>
        <Text style={{marginBottom: '15px'}}>Plein tarifs</Text>
        <Text  style={styles.text}>20 € de l'heure</Text>
        <Text  style={styles.text}>10 € par personnes</Text>
        <Text  style={styles.text}>20 € par personnes</Text>
    </View>
    </>
  )
}


const styles = StyleSheet.create ({
    wrapper: {
        marginTop: '20px',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomColor: 'gray',
        borderBottomWidth: 2,
        marginBottom: 20,
    },
    icon:{
        width: '30px',
        height: '30px',
        marginTop: '-10px'
    },
    content:{
        marginBottom: '30px',
    },
    text:{
        PaddingTop: '5px'
    }
})
export default Prices
