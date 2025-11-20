import React from "react";
import { TouchableOpacity, StyleSheet, View } from "react-native";
import { MotiView } from "moti";
import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function FloatingCameraButton() {
  const router = useRouter();

  return (
    <View style={styles.wrapper}>
      {/* Glow suave e limpo (não mancha mais a barra inferior) */}
      <MotiView
        from={{ opacity: 0.4, scale: 1 }}
        animate={{ opacity: 0.9, scale: 1.20 }}
        transition={{
          loop: true,
          duration: 2000,
          type: "timing",
          repeatReverse: true,
        }}
        style={styles.glow}
      />

      {/* Vibração leve */}
      <MotiView
        from={{ translateY: 0 }}
        animate={{ translateY: -1.5 }}
        transition={{
          loop: true,
          type: "timing",
          duration: 950,
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
    bottom: 26,
    width: 180,
    height: 150,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 9999,
  },

  /* Glow corrigido — cor suave + bordas difusas */
  glow: {
    position: "absolute",
    width: 120,
    height: 120,
    borderRadius: 60,

    // COR SUAVE que NÃO cria manchas
    backgroundColor: "rgba(93, 210, 108, 0.20)", // <— AQUI É A CURA

    shadowColor: "#5DD26C",
    shadowOpacity: 0.35,   // reduzido para parar de manchar
    shadowRadius: 35,
    shadowOffset: { width: 0, height: 0 },

    elevation: 12,
    transform: [{ translateY: -4 }],
  },

  vibrationLayer: {
    justifyContent: "center",
    alignItems: "center",
  },

  button: {
    backgroundColor: "#5DD26C",
    width: 95,
    height: 95,
    borderRadius: 999,
    justifyContent: "center",
    alignItems: "center",
  },
});
