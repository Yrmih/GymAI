import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { MotiView } from "moti";
import Icon from "react-native-vector-icons/Feather"; // garante que tenha o pacote instalado
import { useRouter } from "expo-router";

export default function FloatingCameraButton() {
  const router = useRouter();

  return (
    <MotiView
      from={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", duration: 600 }}
      style={styles.container}
    >
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.button}
        onPress={() => router.push("/Camera")} // ajusta depois pra sua rota real
      >
        <Icon name="camera" size={26} color="#0F0F0F" />
      </TouchableOpacity>
    </MotiView>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 24,
    right: 24,
    zIndex: 999,
  },
  button: {
    backgroundColor: "#5DD26C",
    width: 64,
    height: 64,
    borderRadius: 32,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#5DD26C",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.4,
    shadowRadius: 6,
    elevation: 5, // sombra no Android
  },
});
