import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View>
        <View style={styles.headerWrapper}>
      <Text style={{color: 'red'}}>Le sentier des gorges propose</Text>
      <Image source = {{ uri: 'https://img.icons8.com/ios/50/000000/book.png'}}
          style = {styles.icon}/>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({

    icon:{
        width: '25px',
        height: '25px',
        marginTop: '-10px'
    },
    headerWrapper:{
        borderBottomColor: 'gray',
        borderBottomWidth: 2,
        marginBottom: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }

})

export default Header