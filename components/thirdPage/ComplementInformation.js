import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

const ComplementInformation = () => {
    return(
    <>
        <View style={styles.complementinfo}>
            <Text style={{ color: "red" }}>Informations complémentaires</Text>
            <Image
                source={{
                    uri: "https://img.icons8.com/ios/50/000000/book.png",
                }}
                style={styles.icon}
            />
        </View>

        <View>
            <Text>Appartient à</Text>
            <Text>A comme clientèle cible</Text>
            <Text>Langue disponible</Text>
        </View>

    </>
    );
}



const styles = StyleSheet.create({
    complementinfo: {
        marginTop: '20px',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomColor: 'gray',
        borderBottomWidth: 2,
        marginBottom: 20,
    },
    icon: {
        width: '24px',
        height: '24px',
        marginTop: '-10px'
    },

})


export default ComplementInformation;