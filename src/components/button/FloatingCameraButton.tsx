import React from "react";
import { TouchableOpacity, StyleSheet, View } from "react-native";
import { MotiView } from "moti";
import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function FloatingCameraButton() {
  const router = useRouter();

  return (
    <View style={styles.wrapper}>
      {/* Glow pulsante (menor e deslocado pra cima) */}
      <MotiView
        from={{ opacity: 0.55, scale: 1 }}
        animate={{ opacity: 1, scale: 1.25 }}
        transition={{
          loop: true,
          duration: 2000,
          type: "timing",
        }}
        style={styles.glow}
      />

      {/* Camada de vibração (amplitude reduzida para evitar que o botão "toque" a barra) */}
      <MotiView
        from={{ translateY: 0 }}
        animate={{ translateY: -2 }} // amplitude menor
        transition={{
          loop: true,
          type: "timing",
          duration: 900,
          repeatReverse: true,
        }}
        style={styles.vibrationLayer}
      >
        <TouchableOpacity
          activeOpacity={0.85}
          style={styles.button}
          onPress={() => router.push("/Camera")}
        >
          <Feather name="camera" size={32} color="#0F0F0F" />
        </TouchableOpacity>
      </MotiView>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    alignSelf: "center",
    bottom: 26,           // dá uma folga pra barra inferior do aparelho
    width: 180,
    height: 140,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 9999,         // garante que glow e botão fiquem sobre a barra
  },

  /* Glow redondo, deslocado pra cima via translateY no próprio style */
  glow: {
    position: "absolute",
    width: 130,
    height: 130,
    borderRadius: 65,
    backgroundColor: "#5DD26C44",
    shadowColor: "#5DD26C",
    shadowOpacity: 0.9,
    shadowRadius: 44,
    shadowOffset: { width: 0, height: 0 },
    elevation: 18,
    transform: [{ translateY: -10 }], // desloca o glow pra cima — evita tocar a barra
  },

  vibrationLayer: {
    justifyContent: "center",
    alignItems: "center",
  },

  /* Botão redondo principal — mantive tamanho grande */
  button: {
    backgroundColor: "#5DD26C",
    width: 95,
    height: 95,
    borderRadius: 999,
    justifyContent: "center",
    alignItems: "center",
  },
});
