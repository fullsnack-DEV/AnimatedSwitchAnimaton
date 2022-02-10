import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import Animated, {
  interpolate,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { PanGestureHandler } from "react-native-gesture-handler";

const clamp = (value, min, max) => {
  "worklet";
  return Math.min(Math.max(value, min), max);
};
const BUTTON_W = 170;
const ICON_SIZE = 20;

export default function SlidingcounterCom() {
  //creating the Shared Value
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  const MAX_SLIDE_OFFSET = BUTTON_W * 0.3;

  const onpangeaturEvent = useAnimatedGestureHandler({
    //onActive callback handling

    onActive: (event) => {
      //hamdling this translateX value

      translateX.value = clamp(
        event.translationX,
        -MAX_SLIDE_OFFSET,
        MAX_SLIDE_OFFSET
      );

      translateY.value = clamp(event.translationY, 0, MAX_SLIDE_OFFSET);
    },
    onEnd: (event) => {
      translateX.value = withSpring(0);
      translateY.value = withSpring(0);
    },
  });

  //creating a reanimatedstyle

  const rstyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: translateX.value },
        { translateY: translateY.value },
      ],
    };
  });

  //creatig animated style for the Signs
  const rMinusPlusStyle = useAnimatedStyle(() => {
    const opacityX = interpolate(
      translateX.value,
      [-MAX_SLIDE_OFFSET, 0, MAX_SLIDE_OFFSET],
      [0.4, 0.8, 0]
    );

    const opacityY = interpolate(
      translateY.value,
      [0, MAX_SLIDE_OFFSET],
      [1, 0]
    );
    return {
      opacity: opacityX * opacityY,
    };
  }, []);

  const rCloseStyle = useAnimatedStyle(() => {
    const opacity = interpolate(
      translateY.value,
      [0, MAX_SLIDE_OFFSET],
      [0, 0.8]
    );
    return {
      opacity,
    };
  }, []);

  return (
    <View style={styles.Slidewrapper}>
      <Animated.View style={rMinusPlusStyle}>
        <AntDesign name="minus" color={"white"} size={ICON_SIZE} />
      </Animated.View>

      <Animated.View style={rCloseStyle}>
        <AntDesign name="close" color={"white"} size={ICON_SIZE} />
      </Animated.View>

      <Animated.View style={rMinusPlusStyle}>
        <AntDesign name="plus" color={"white"} size={ICON_SIZE} />
      </Animated.View>

      <View
        style={{
          ...StyleSheet.absoluteFillObject,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <PanGestureHandler onGestureEvent={onpangeaturEvent}>
          <Animated.View style={[styles.circle, rstyle]} />
        </PanGestureHandler>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Slidewrapper: {
    height: 70,
    width: BUTTON_W,
    backgroundColor: "#111111",
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "row",
  },
  circle: {
    height: 50,
    width: 50,
    backgroundColor: "#232323",
    borderRadius: 25,
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
  },
});
