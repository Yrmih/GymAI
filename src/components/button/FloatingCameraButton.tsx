import React from "react";
import { TouchableOpacity, StyleSheet, View } from "react-native";
import { MotiView } from "moti";
import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/src/data/redux/store";

// Função que registra treino, soma XP e desbloqueia conquistas
import { registerTrainingSession } from "@/src/data/redux/frequencyThunks";

export default function FloatingCameraButton() {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();

  const { weeklySessions, weeklyGoal } = useSelector(
    (state: RootState) => state.frequency
  );

  const handlePress = () => {
    if (weeklySessions >= weeklyGoal) {
      console.log("Você já completou sua meta semanal!");
      return;
    }

    // Marca treino, soma XP, atualiza conquistas
    dispatch(registerTrainingSession());

    // Vai pra câmera
    router.push("/Camera");
  };

  return (
    <View style={styles.wrapper}>
      {/* Glow animado */}
      <MotiView
        from={{ opacity: 0.4, scale: 1 }}
        animate={{ opacity: 0.9, scale: 1.2 }}
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
          onPress={handlePress}
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

  glow: {
    position: "absolute",
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: "rgba(93, 210, 108, 0.20)",
    shadowColor: "#5DD26C",
    shadowOpacity: 0.35,
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
