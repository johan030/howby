import { View, Text, TouchableOpacity, Pressable } from 'react-native'
import React from 'react'

const BottomIntroduction = () => {
  return (
    <View>
      <Text style={{fontSize: '30px', marginTop: 20}}>Les gorges</Text>
      <Text style={{color: '#343638' }}>du Verdon sont un ensemble de gorges creusé
          par la rivière Verdon séparant les Préalpes de Castellane et les Préalpes de Digne, en France ...
      </Text>
      <TouchableOpacity>
          <Pressable>
              <Text>En savoir plus</Text>
          </Pressable>
      </TouchableOpacity>
    </View>
  )
}


export default BottomIntroduction