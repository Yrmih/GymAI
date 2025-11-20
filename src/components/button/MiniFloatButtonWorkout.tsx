import React from "react";
import { Pressable, Animated, StyleSheet, View } from "react-native";
import { useRouter } from "expo-router";
import AppIcon from "@/src/components/icons/AppIcon";

export default function MiniFloatButtonWorkout() {
  const router = useRouter();

  const scale = new Animated.Value(1);

  const onPressIn = () => {
    Animated.spring(scale, {
      toValue: 0.88,
      useNativeDriver: true,
      speed: 20,
      bounciness: 6,
    }).start();
  };

  const onPressOut = () => {
    Animated.spring(scale, {
      toValue: 1,
      useNativeDriver: true,
      speed: 20,
      bounciness: 6,
    }).start();
  };

  return (
    <View style={styles.wrapper}>
      <Animated.View style={{ transform: [{ scale }] }}>
        <Pressable
          onPress={() => router.push("/WorkoutGallery")}
          onPressIn={onPressIn}
          onPressOut={onPressOut}
          style={styles.button}
        >
          <AppIcon name="barbell" size={24} color="#FFFFFF" />
        </Pressable>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    left: 38,
    bottom: 36,
    zIndex: 999,
  },
  button: {
    width: 62,
    height: 62,
    borderRadius: 31,
    backgroundColor: "#5DD26C",
    alignItems: "center",
    justifyContent: "center",
  },
});
