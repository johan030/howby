import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

const ComplementInformation = () => {
    return(
    <>
        <View style={styles.wrapper}>
            <Text style={{ color: "red" }}>Informations complémentaires</Text>
            <Image
                source={{
                    uri: "https://img.icons8.com/material-outlined/24/000000/star--v2.png",
                }}
                style={styles.icon}
            />
        </View>

    </>
    );
}



const styles = StyleSheet.create({
    wrapper: {
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