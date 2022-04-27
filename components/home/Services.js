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
        <Text style={{color: 'lightgray'}}>Accès pour personnes à mobilité réduite</Text>
        <Image source={{uri: "https://img.icons8.com/ios/50/000000/wheelchair.png"}} style={styles.icon} />
        </View>
        <View style={styles.dontknowhowtocallmyclass}>
        <Text style={{color: 'lightgray' }}>Animaux acceptés</Text>
        <Image source={{uri: "https://img.icons8.com/ios/50/000000/dog--v1.png"}} style={styles.icon} />
        </View>
        <View style={styles.dontknowhowtocallmyclass}>
        <Text style={{color: 'red' }}>parking gratuit sur place</Text>
        <Image source={{uri: "https://img.icons8.com/ios-glyphs/30/000000/park-and-charge.png"}} style={styles.icon} />
        </View>
        <View style={styles.dontknowhowtocallmyclass}>
        <Text style={{color: 'black' }}>Français</Text>
        <Image source={{uri: "https://img.icons8.com/color/48/000000/france.png"}} style={styles.icon} />
        </View>
        <View style={styles.dontknowhowtocallmyclass}>
        <Text style={{color: 'black' }}>Anglais</Text>
        <Image source={{uri: "https://img.icons8.com/office/16/000000/great-britain.png"}} style={styles.icon} />
        </View>
        <TouchableOpacity>
            <Text style={{marginTop: '10px'}}>En savoir plus </Text>
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
        width: '20px',
        height: '20px'
    },
    dontknowhowtocallmyclass:{
        flexDirection: 'row',
        justifyContent:'space-between',
        marginTop: '15px'
    }
})

export default Services