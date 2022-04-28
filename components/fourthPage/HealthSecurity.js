import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import React from "react";

const HealthSecurity = () => {
  return (
    <>
      <View style={styles.wrapper}>
        <Text style={{ color: "red" }}>Informations complémentaires</Text>
        <Image
          source={{
            uri: "https://img.icons8.com/ios/50/000000/book.png",
          }}
          style={styles.icon}
        />
      </View>
      <View>
        <Text>Mesure sanitaire du covid - 19</Text>
      </View>
      <View style={styles.signaler}>
        <Pressable style={{ paddingTop: "2rem" }}>
          <Text>Signaler cette annonce</Text>
        </Pressable>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginTop: "20px",
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomColor: "gray",
    borderBottomWidth: 2,
    marginBottom: 20,
  },
  icon: {
    width: "24px",
    height: "24px",
    marginTop: "-10px",
  },

  signaler: {
    marginTop: "20px",
    borderTopColor: "gray",
    borderTopWidth: 2,
  },
});

export default HealthSecurity;
