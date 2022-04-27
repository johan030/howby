import { View, Text } from 'react-native'
import React from 'react'
import ProgressBar from 'react-native-animated-progress'

const Bar = () => {
    return (
       
         <>
          <View>
            <Text style={{ marginBottom: 5 }}>Ressenti sur Howby</Text>
            <ProgressBar
              progress={94}
              height={7}
              backgroundColor="#4a0072"
              animated={false}
            />
          </View>
        </>
      );
}

export default Bar