import React from "react";
import { TouchableOpacity, StyleSheet, View } from "react-native";
import { useRouter } from "expo-router";
import AppIcon from "@/src/components/icons/AppIcon";

export default function MiniFloatButtonLeft() {
  const router = useRouter();

  return (
    <View style={styles.wrapper}>
      <TouchableOpacity
        activeOpacity={0.85}
        style={styles.button}
        onPress={() => router.push("/WorkoutGallery")}
      >
        <AppIcon name="barbell" size={24} color="#FFFFFF" />
      </TouchableOpacity>
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
