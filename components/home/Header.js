import { View, Text, StyleSheet, Pressable, Image, TouchableOpacity } from "react-native";
import React from "react";

const Header = () => {
  return (
    <>
      <View style={styles.container}>
        <Text>retour</Text>
        <Text>Sentier des gorges du Verdon</Text>

        <View style={styles.wrapper}>
        <Pressable style={styles.ButtonRed}>
          <Text style={{color: "white", padding: '5px'}}>Favori</Text>
        </Pressable>
        <Pressable style={styles.ButtonBlue}>
          <Text style={{color: "white"}}>Partager</Text>
        </Pressable>
        <Pressable style={styles.ButtonBlue}>
          <Text style={{color: "white"}}>Appeler</Text>
        </Pressable>
        <TouchableOpacity>
        <Image source = {{ uri: 'https://img.icons8.com/ios/50/000000/download--v1.png'}} style = {styles.icon}/>
        </TouchableOpacity>
        </View>
  
      </View>
      
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: "1rem",
    
  },
  wrapper:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '1rem'
  },
  ButtonRed:{
    backgroundColor: 'red',
    color: "white", //fonctionne pas
    borderRadius: '.5rem',
    marginRight: '1rem'
        
    
  },
  ButtonBlue: {
    backgroundColor: "#000D4E",
    color: "#fff", // fonctionne pas? 
    marginRight: '1rem'
    
  },
  icon: {
    width: 30,
    height: 30,
    marginLeft: 10,
    resizeMode: 'contain'
  },
});
export default Header;
