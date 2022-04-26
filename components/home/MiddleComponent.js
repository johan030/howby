import { View, Text, TouchableOpacity, StyleSheet,Image } from "react-native";
import React from "react";

const MiddleComponent = () => {
  return (
    <View style={styles.wrapper}>
      <TouchableOpacity>
        <Image
          source={{
            uri: "https://img.icons8.com/ios-glyphs/30/000000/group.png",
          }}
          style={styles.icon}
        />
      </TouchableOpacity>
          <Text style={{color: 'red'}}>Sortir <br />maintenant</Text>
          <Text style={{color: 'red'}}>Organiser</Text>
          
          <Image source={{uri: "https://img.icons8.com/ios/50/000000/picture.png"}} style={styles.icon} />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper:{
    marginLeft: '1rem',
    marginright: '1rem',
    marginTop: '1rem',
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  icon: {
    width: '30px',
    height: '30px'
  }
})

export default MiddleComponent;
