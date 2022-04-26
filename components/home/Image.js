import { View, Image } from "react-native";
import React from "react";

const Image = () => {
  return (
    <View>
      <Image style = {styles.Image}
        source={require("https://images.unsplash.com/photo-1508181441164-3c8e9bd4575a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80")}
      />
    </View>
  )
}
const style = StyleSheet.create({
  Image:{
    width: '300px',
    height: '300px'
  }
})
export default Image;
