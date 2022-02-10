import { View, StyleSheet, StatusBar } from "react-native";
import React, { useState } from "react";
import SwitchCom from "../../Component/SwitchCom";
import { Easing } from "react-native-reanimated";
export default function SwitchAnimation() {
  //state
  const [active, Setactive] = useState(false);

  //transition for Moti

  const transition = {
    type: "timing",
    duration: 250,
    easing: Easing.inOut(Easing.ease),
  };

  return (
    <View style={[styles.container]}>
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
