import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

const HickingInformation = () => {
  return (
    <>
      <View style={styles.wrap}>
        <Text style={{ color: "red" }}>Type de parcours</Text>
        <Image
          source={{
            uri: "https://img.icons8.com/material-outlined/24/000000/itinerary.png",
          }}
          style={styles.icon}
        />
      </View>
      <View style={styles.text}>
          <Text>Distance du <br /> parcours</Text>
          <Text>Dénivelé</Text>
          <Text>Durée du <br /> parcours</Text>
      </View>
      <View style={styles.text}>
          <Text style={styles.content}>1,2Km</Text>
          <Text style={styles.content}> + 350</Text>
          <Text style={styles.content}>1:30</Text>
      </View>

    </>
  );
};

const styles = StyleSheet.create({
  wrap: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomColor: "gray",
    borderBottomWidth: 2,
    marginBottom: 20,
  },
  icon: {
    width: "30px",
    height: "30px",
  },
  text:{
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      marginBottom: '20px'
  },
  content:{
      padding: '.8rem',
      backgroundColor: '#FAF7F4',
      borderRadius: '10px',
      fontSize:  '1rem',
      letterSpacing: '2px'
  }

});
export default HickingInformation;
