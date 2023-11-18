import { StyleSheet, Text, View, TextInput, Alert, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import CustomButton from '../components/CustomButton'
import FONTS from '../utils/FONTS'

const GetStarted = ({ navigation }) => {
          const [number, setNumber] = useState("")
          const [loading, setLoading] = useState(false)

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
                              setLoading(true)
                              setTimeout(() => {
                                        setLoading(false)
                                        navigation.push("Home", { count: number })
                              }, 5000)
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
                              {
                                        loading && (
                                                  <View style={{ position: "absolute", bottom: 40, right: 0, left: 0, flexDirection : "row", alignItems : "center", justifyContent : "center" }} >
                                                            <ActivityIndicator size="small" color="tomato" style={{marginRight : 5, marginBottom : 2}} />
                                                            <Text style={{ fontFamily: FONTS.MEDIUM, textAlign: "center", color: "#000" }} >{`Loading in 5 seconds`}</Text>
                                                  </View>
                                        )
                              }
                    </View>
          )
}

export default GetStarted

const styles = StyleSheet.create({})