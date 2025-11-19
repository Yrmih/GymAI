import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { MotiView } from "moti";
import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function FloatingCameraButton() {
  const router = useRouter();

  return (
    <MotiView
      from={{ scale: 0.5, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", duration: 600 }}
      style={styles.container}
    >
      <TouchableOpacity
        activeOpacity={0.85}
        style={styles.button}
        onPress={() => router.push("/Camera")}
      >
        <Feather name="camera" size={32} color="#0F0F0F" />
      </TouchableOpacity>
    </MotiView>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 28,
    alignSelf: "center",
    zIndex: 999,
  },
  button: {
    backgroundColor: "#5DD26C",
    width: 88,
    height: 88,
    borderRadius: 44,
    justifyContent: "center",
    alignItems: "center",
  },
});
