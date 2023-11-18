import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import FONTS from '../utils/FONTS'

const CustomButton = ({title, style, onPress}) => {
          return (
                    <TouchableOpacity style={{ backgroundColor : "tomato", paddingVertical : 8, borderRadius : 8, ...style}} onPress={onPress}  >
                              <Text style={{textAlign : "center", fontFamily : FONTS.BOLD}} >{title}</Text>
                    </TouchableOpacity>
          )
}

export default CustomButton

const styles = StyleSheet.create({})