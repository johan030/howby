import React, { useState } from "react";
import { CheckBox, Text, StyleSheet, View } from "react-native";
//import BouncyCheckbox from "react-native-bouncy-checkbox";


const CheckBoxes = () => {
    const [isSelected, setSelection] = useState(false);

    return (
        <View style={StyleSheet.container}>
            <View style={StyleSheet.checkboxContainer}>
                <CheckBox
                    Value={isSelected}
                    onValueChange={setSelection}
                    style={StyleSheet.checkbox}
                />

                <Text style={styles.label}>Elle est inexacte ou incorrecte</Text>
            </View>
            <Text>Is CheckBox selected: {isSelected ? "👍" : "👎"}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    checkboxContainer: {
      flexDirection: "row",
      marginBottom: 20,
    },
    checkbox: {
      alignSelf: "center",
    },
    label: {
      margin: 8,
    },
  });

export default CheckBoxes;