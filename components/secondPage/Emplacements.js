import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

const Emplacements = () => {
  return (
      <>
    <View style={styles.emplacement}>
      <Text style={{color: 'red'}}>Emplacements</Text>
      <Image source = {{ uri: 'https://img.icons8.com/ios/50/000000/place-marker--v1.png'}}
          style = {styles.icon}/>   
    </View>
    <View>
    <Image source = {{ uri: 'https://www.astuces-webmaster.ch/tutos/html5_css3/geoloc-html5-google-maps/geoloc-html5-google-maps.png'}}
          style = {styles.image}/>
    </View>
    </>
  )
}

const styles = StyleSheet.create ({
    emplacement: {
        marginTop: '20px',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomColor: 'gray',
        borderBottomWidth: 2,
        marginBottom: 20,
    },
    icon:{
        width: '25px',
        height: '25px',
        marginTop: '-10px'
    },
    image:{
        width: 300,
        height: 300,
       
    }
})
export default Emplacements