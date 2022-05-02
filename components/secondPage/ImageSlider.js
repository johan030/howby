import { View, Text } from 'react-native'
import React from 'react'
import  {ImageSlider, ImageCarousel, Icon}  from "react-native-image-slider-banner";

<ImageCarousel 
    data={[
        {img: 'https://images.unsplash.com/photo-1580521698737-7f56d868b1a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dmVyZG9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'},
        {img: 'https://images.unsplash.com/photo-1594582613932-f74c151f9217?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8dmVyZG9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'},
        {img: 'https://images.unsplash.com/photo-1567889929639-ddef66218960?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHZlcmRvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'}
    ]}
    showHeader
    headerLeftComponent={<Icon name="arrow-back" color="#fff" size={34} onPress={() => Alert.alert("alert")}/>}
    headerCenterComponent={<Text style={{color: '#fff', fontSize: 24, fontWeight: 'bold'}}>Header</Text>}
    headerStyle={{padding: 10, backgroundColor: 'rgba(0,0,0, 0.6)',}}
    onItemChanged={(item) => console.log("item", item)}
    onClick={(item, index) => {alert('hello'+index)}}
    caroselImageStyle={{height: 210}}
    indicatorContainerStyle={{top: 50}}
    />

export default ImageSlider