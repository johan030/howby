import { View, Text, Image,StyleSheet } from "react-native";
import React from "react";

const Hours = () => {
  return (
    <>
      <View style={styles.wrapper}>
        <Text style={{ color: "red" }}>Horaires</Text>
        <Image
          source={{
            uri: "https://img.icons8.com/windows/32/000000/clock--v1.png",
          }}
          style={styles.icon}
        />
      </View>
      <View>
          <Text style={{marginBottom: '10px'}}>De juin à Septembre tous les jours de <br />
          06:00 à 20:00</Text>
          <Text>Périodes d'ouverture confirmées - déconfinement COVID19</Text>
      </View>
    </>
  );
};


const styles = StyleSheet.create ({
    wrapper: {
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

})
export default Hours;
