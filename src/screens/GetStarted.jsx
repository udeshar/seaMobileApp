import { StyleSheet, Text, View, TextInput, Alert } from 'react-native'
import React, { useState } from 'react'
import CustomButton from '../components/CustomButton'
import FONTS from '../utils/FONTS'

const GetStarted = ({ navigation }) => {
          const [number, setNumber] = useState("")

          function handleGetStarted() {
                    if (number > 5) {
                              // show alert
                              Alert.alert("Error", "Number is greater than 5")
                    }
                    else if (number == "") {
                              Alert.alert("Error", "Number is empty")
                    }
                    else if (number <= 0) {
                              Alert.alert("Error", "Number is less than 1")
                    }
                    else {
                              setTimeout(() => {
                                        navigation.replace("Home", { count: number })
                              } , 5000)
                    }
          }

          return (
                    <View style={{ flex: 1, justifyContent: "center", paddingHorizontal: 20 }} >
                              <TextInput
                                        placeholder="Enter a number"
                                        value={number}
                                        onChangeText={(text) => setNumber(text)}
                                        style={{ color: "#000", borderWidth: 0.5, borderColor: "grey", padding: 10, borderRadius: 10, fontFamily: FONTS.MEDIUM }}
                                        placeholderTextColor={"#000"}
                                        keyboardType='numeric'
                              />
                              <CustomButton
                                        title="Get Started"
                                        onPress={() => handleGetStarted()}
                                        style={{ marginTop: 40 }}
                              />
                    </View>
          )
}

export default GetStarted

const styles = StyleSheet.create({})