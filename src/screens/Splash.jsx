import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import FONTS from '../utils/FONTS'

const Splash = ({navigation}) => {

          useEffect(() => {
                    setTimeout(() => {
                              navigation.replace("GetStarted")
                    }, 2000)
          }, [])

          return (
                    <View style={{flex : 1, alignItems : "center", justifyContent : "center"}} >
                              <Text style={{fontFamily : FONTS.BOLD, color : "#000", fontSize : 20}} >Splash Screen</Text>
                    </View>
          )
}

export default Splash

const styles = StyleSheet.create({})