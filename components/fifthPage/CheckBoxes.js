import React, { useEffect, useState } from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
//import BouncyCheckbox from "react-native-bouncy-checkbox";
//import CheckBox from '@react-native-community/checkbox';
import { CheckBox } from "react-native-elements";



const CheckBoxes = () => {
    return (
        <>
        <View>
            <Pressable style={{marginBottom: '1rem'}}>
                <Text>Retour</Text>
            </Pressable>
            <Text style={styles.question}>Pourquoi signalez vous cette annonce ? </Text>
        </View>
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
        <View style={styles.pressable}>
            <Pressable>
                <Text>Suivant</Text>
            </Pressable>
        </View>
        </>
    )

}

const styles = StyleSheet.create({
    pressable:{
        width: '100%',
        marginTop: '10rem',
        textAlign:'center',
        borderColor: 'blue',
        borderWidth: 2,
        padding: '.5rem',
        borderRadius: '10px'
    },
    question:{
        fontSize: '1.5rem',
        marginBottom: '2rem'
    }
})

export default CheckBoxes;