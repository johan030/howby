import { View, Text, StyleSheet,Pressable } from 'react-native'
import React from 'react';


const Header = () => {
  return (
    <>
    <View  style = {styles.container}>
      <Text>retour</Text>
      <Text>Sentier des gorges du Verdon</Text>
      
    </View>
    
    
    <Pressable>
        <Text Style={{backgroundColor: 'black'}}>Partager</Text>
      </Pressable>
    
    </>
    
  )
 
}


const styles = StyleSheet.create({
    container: {
      marginLeft: '1rem',
    },
    ButtonBlue:{
      backgroundColor: '#000D4E'
    }    
})
export default Header