import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";

const Header = () => {
  return (
    <>
      <View style={styles.container}>
        <Text>Retour</Text>
        <Text>Sentier des gorges du Verdon</Text>

        <View style={styles.wrapper}>
          <View style={styles.wrapper}>
            <Pressable style={styles.ButtonRed}>
              <Text style={{color: 'white'}}>Favori</Text>
            </Pressable>
            <Pressable style={styles.ButtonBlue}>
              <Text style={{color: 'white'}}>Partager</Text>
            </Pressable>
            <Pressable style={styles.ButtonBlue}>
              <Text style={{color: 'white'}}>Appeler</Text>
            </Pressable>
          </View>
          <TouchableOpacity>
          <Image source = {{ uri: 'https://img.icons8.com/ios/50/000000/download--v1.png'}}
          style = {styles.icon}/>
          </TouchableOpacity>
        </View>

        <Image
        style={styles.image}
        source={{
          uri: 'https://images.unsplash.com/photo-1508181441164-3c8e9bd4575a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80',
        }}/>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: "1rem",
    marginRight: '1rem'
  },
  wrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: "1rem",
  },
  ButtonRed: {
    backgroundColor: "red",
    color: "white", //fonctionne pas
    borderRadius: ".5rem",
    marginRight: "1rem",
    padding: '5px,10px,5px,10px'
  },
  ButtonBlue: {
    backgroundColor: "#000D4E",
    color: "#fff", // fonctionne pas?
    marginRight: "1rem",
  },
  icon: {
    width: 30,
    height: 30,
    marginLeft: 10,
    resizeMode: "contain",
  },
  image:{
    marginTop: '1rem',
    width: '300px',
    height: '400px',
    
  }
});
export default Header;
