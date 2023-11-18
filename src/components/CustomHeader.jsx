import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import FONTS from '../utils/FONTS'
import AntIcon from 'react-native-vector-icons/AntDesign'

const CustomHeader = ({ title, style, onPress, right }) => {
          return (
                    <View style={{ ...style, backgroundColor: "tomato", paddingHorizontal: 20, flexDirection: "row", justifyContent: "space-between", height : 50, alignItems : "center" }}  >
                              <AntIcon name="home" size={24} color="#fff" />
                              {right && right()}
                    </View>
          )
}

export default CustomHeader

const styles = StyleSheet.create({})