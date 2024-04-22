import { View, Text, Image } from 'react-native'
import React from 'react'
import { style } from '../styleHome'

export default function ToolBar() {
    const sourceImage  = require('./../../../assets/icons/menu_bar.png')
    const sourceImageanhdaidien  = require('./../../../assets/Images/anh_dai_dien.jpg')
  return (
    <View style = {style.container}>
    <View style = {style.flex_ngang}>
    <Image source={sourceImage} style = {style.imagemenu}/>
    <Image source={sourceImageanhdaidien} style ={style.imageAvt}/>
    </View>
    <View style = {style.pdt_10}>
    <Text style={style.texthello}>Hello Tien dep troai</Text>
    <Text style = {style.textFind}>Find your perfect job</Text>
    </View>
</View>
  )
}