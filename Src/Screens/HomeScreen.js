import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Pressable,
  TouchableOpacity,
} from "react-native";

import React from "react";

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.Mainheading}>
          <Text style={styles.Mainheadingtxt}> Learing Reanimated 2 </Text>
        </View>
        <View style={styles.headings}>
          <Text
            onPress={() => navigation.navigate("SwitchScreen")}
            style={styles.headingtxt}
          >
            {" "}
            AnimatedSwitch
          </Text>

          <Text
            onPress={() => navigation.navigate("SlidingScreen")}
            style={styles.headingtxt}
          >
            Sliding Animation
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    marginVertical: "20%",
  },
  Mainheadingtxt: {
    fontWeight: "bold",
    fontSize: 30,
    letterSpacing: 0.6,
    color: "#8A39E1",
  },
  headingtxt: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 10,
  },
  headings: {
    marginVertical: 30,
  },
});
