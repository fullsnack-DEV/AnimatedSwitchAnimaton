import React, { useMemo } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { MotiView } from "moti";

export default function SwitchCom({ size, onPress, isActive, transition }) {
  //Track width and HEight  will be the chagging one
  //use Memoized var

  //Colors

  const colors = {
    active: "#2c2c2c",
    inactive: "#dcdcdc",
  };

  const trackWidth = useMemo(() => {
    return size * 1.5;
  }, [size]);
  const trackHeight = useMemo(() => {
    return size * 0.4;
  }, [size]);
  const Knobsize = useMemo(() => {
    return size * 0.6;
  }, [size]);

  return (
    <Pressable onPress={onPress}>
      <View style={styles.container}>
        {/* track */}
        <MotiView
          transition={transition}
          from={{
            backgroundColor: isActive ? colors.active : colors.inactive,
          }}
          animate={{
            backgroundColor: isActive ? colors.inactive : colors.active,
          }}
          style={{
            position: "absolute",
            width: trackWidth,
            height: trackHeight,
            borderRadius: trackHeight / 2,
            backgroundColor: colors.active,
          }}
        />
        {/* knob Container */}
        <MotiView
          transition={transition}
          animate={{
            translateX: isActive ? trackWidth / 4 : -trackWidth / 4,
          }}
          style={{
            width: size,
            height: size,
            borderRadius: size / 2,
            backgroundColor: "#fff",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* knob */}

          <MotiView
            transition={transition}
            animate={{
              width: isActive ? 0 : Knobsize,
            }}
            style={{
              width: Knobsize,
              height: Knobsize,
              borderRadius: Knobsize / 2,
              borderWidth: size * 0.1,
              borderColor: colors.active,
            }}
          />
        </MotiView>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
});
