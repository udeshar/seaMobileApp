import { StyleSheet, Text, View, TextInput, Alert } from 'react-native'
import React, { useState } from 'react'
import CustomButton from '../components/CustomButton'
import FONTS from '../utils/FONTS'
import CustomHeader from '../components/CustomHeader'

const Home = ({ navigation, route }) => {

          const number = route.params.count;
          const [counter, setCounter] = useState(0)
          const [showResetBtn, setShowResetBtn] = useState(false)
          console.log(number)

          function handlePress() {
                    setCounter(counter + 1)
                    if ((counter + 1) == number) {
                              setShowResetBtn(true)
                              console.log("show")
                    }
          }

          function returnColor(num) {
                    if (counter == number) {
                              if (num <= counter) {
                                        return "blue"
                              }
                    }
                    else if (num == counter) {
                              return "blue"
                    }
                    return "lightblue"
          }

          return (
                    <View style={{ flex: 1 }} >
                              <CustomHeader
                                        title="Home"
                                        right={() => (
                                                  showResetBtn && (
                                                            <CustomButton
                                                                      title="Reset"
                                                                      onPress={() => {
                                                                                setCounter(0)
                                                                                setShowResetBtn(false)
                                                                                navigation.replace("GetStarted")
                                                                      }}
                                                                      style={{ paddingVertical: 5, paddingHorizontal: 20, borderRadius: 8, backgroundColor: "blue" }}
                                                            />
                                                  ) ||
                                                  <Text style={{ fontFamily: FONTS.MEDIUM }} >{`counter : ${counter}`}</Text>
                                        )}
                              />
                              <View style={{ paddingHorizontal: 20, paddingTop: 40, justifyContent: "space-between", flex: 1 }} >
                                        <View style={{ flex: 1 }} >
                                                  <View style={{ flexDirection: "row", justifyContent: "space-around" }} >
                                                            <View style={{ ...styles.boxes, backgroundColor: returnColor(1) }} >
                                                                      <Text style={{ fontFamily: FONTS.BOLD, fontSize: 18 }} >1</Text>
                                                            </View>
                                                            <View style={{ ...styles.boxes, backgroundColor: returnColor(2) }}>
                                                                      <Text style={{ fontFamily: FONTS.BOLD, fontSize: 18 }} >2</Text>
                                                            </View>
                                                  </View>
                                                  <View style={{ flexDirection: "row", justifyContent: "space-around" }} >
                                                            <View style={{ ...styles.boxes, backgroundColor: returnColor(3) }} >
                                                                      <Text style={{ fontFamily: FONTS.BOLD, fontSize: 18 }} >3</Text>
                                                            </View>
                                                            <View style={{ ...styles.boxes, backgroundColor: returnColor(4) }}>
                                                                      <Text style={{ fontFamily: FONTS.BOLD, fontSize: 18 }} >4</Text>
                                                            </View>
                                                  </View>
                                                  <View style={{ flexDirection: "row", justifyContent: "space-around" }} >
                                                            <View style={{ ...styles.boxes, backgroundColor: returnColor(5) }} >
                                                                      <Text style={{ fontFamily: FONTS.BOLD, fontSize: 18 }} >5</Text>
                                                            </View>
                                                  </View>
                                        </View>
                                        <View>
                                                  {
                                                            counter < number && (
                                                                      <CustomButton
                                                                                title="Change Color"
                                                                                onPress={() => handlePress()}
                                                                                style={{ marginBottom: 60 }}
                                                                      />
                                                            )
                                                  }
                                        </View>
                              </View>
                    </View>
          )
}

export default Home

const styles = StyleSheet.create({
          boxes: {
                    height: 100,
                    width: 100,
                    borderRadius: 10,
                    justifyContent: "center",
                    alignItems: "center",
                    marginVertical: 20
          }
})