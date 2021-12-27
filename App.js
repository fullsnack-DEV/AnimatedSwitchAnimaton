import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Easing } from "react-native-reanimated";

import SwitchCom from "./Component/SwitchCom";

export default function App() {
  //state
  const [active, Setactive] = useState(false);

  //transitionvalues for Moti

  const transition = {
    type: "timing",
    duration: 250,
    easing: Easing.inOut(Easing.ease),
  };

  return (
    <View style={styles.container}>
      <SwitchCom
        size={60}
        isActive={active}
        onPress={() => {
          Setactive((active) => !active);
        }}
        transition={transition}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
    alignItems: "center",
    justifyContent: "center",
  },
});

//Moti Animation

//From     //Animate   //transition
