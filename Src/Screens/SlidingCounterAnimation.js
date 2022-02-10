import { View, Text, StyleSheet } from "react-native";
import React from "react";
import SlidingcounterCom from "../../Component/Slidingcounter";

export default function SlidingCounter() {
  return (
    <View style={styles.container}>
      <SlidingcounterCom />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
});
