import React, { useEffect, useState } from "react";
import { Text, StyleSheet, View } from "react-native";
//import BouncyCheckbox from "react-native-bouncy-checkbox";
//import CheckBox from '@react-native-community/checkbox';
import { CheckBox } from "react-native-elements";



const CheckBoxes = () => {
    return (
        <View>
            <CheckBox
                title="Elle est inexacte ou incorrect"
                checked={true}
                checkedColor="blue"
                checkedIcon='dot-circle-o'
                uncheckedIcon='circle-o'

            />
            <CheckBox
                title="Ce n'est pa un véritable itinéraire"
                checked={false}
                checkedColor="blue"
                checkedIcon='dot-circle-o'
                uncheckedIcon='circle-o'

            />
            <CheckBox
                title="c'est une arnaque"
                checked={false}
                checkedColor="blue"
                checkedIcon='dot-circle-o'
                uncheckedIcon='circle-o'

            />
            <CheckBox
                title="Il s'agit d'autre chose"
                checked={false}
                checkedColor="blue"
                checkedIcon='dot-circle-o'
                uncheckedIcon='circle-o'

            />
            <CheckBox
                title="Le contenu est choquant"
                checked={false}
                checkedColor="blue"
                checkedIcon='dot-circle-o'
                uncheckedIcon='circle-o'

            />
        </View>

    )

}



export default CheckBoxes;