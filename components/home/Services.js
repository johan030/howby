import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const Services = () => {
  return (
    <View style={styles.wrapper}>
        <View style={styles.dontknowhowtocallmyclass}>
        <Text style={{color: 'red' }}>équipement et services</Text>
        <Image source={{uri: "https://img.icons8.com/ios/50/000000/book.png"}} style={styles.icon} />
        </View>
        <View style={styles.dontknowhowtocallmyclass}>
        <Text style={{color: 'red' }}>équipement et services</Text>
        <Image source={{uri: "https://img.icons8.com/ios/50/000000/book.png"}} style={styles.icon} />
        </View>
        <View style={styles.dontknowhowtocallmyclass}>
        <Text style={{color: 'red' }}>équipement et services</Text>
        <Image source={{uri: "https://img.icons8.com/ios/50/000000/book.png"}} style={styles.icon} />
        </View>
        <View style={styles.dontknowhowtocallmyclass}>
        <Text style={{color: 'red' }}>équipement et services</Text>
        <Image source={{uri: "https://img.icons8.com/ios/50/000000/book.png"}} style={styles.icon} />
        </View>
        <TouchableOpacity>
            <Text>En savoir plus </Text>
        </TouchableOpacity>
      
    </View>
  )
}

const styles = StyleSheet.create ({
    wrapper:{
        marginTop: '2rem',
        marginLeft: '1rem',
        marginRight: '1rem'
    },
    icon:{
        width: '30px',
        height: '30px'
    },
    dontknowhowtocallmyclass:{
        flexDirection: 'row',
        justifyContent:'space-between'
    }
})

export default Services