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
      <View style={styles.wrapper}>
        
          <View>
            <Text>Distance du parcous</Text>
            <Text>1,2 Km</Text>
          </View>
        
        
          <View>
            <Text>Dénivelé</Text>
            <Text>+ 350 m</Text>
          </View>
        
        
          <View>
            <Text>Durée du parcous</Text>
            <Text>1:30</Text>
          </View>
        
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
    marginBottom: 10,
  },
  wrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  icon: {
    width: "30px",
    height: "30px",
  },
});
export default HickingInformation;
