import React, { useState } from "react";
import { Image, StyleSheet } from "react-native";
import { View, Text, Button, ButtonText, Spinner } from "@gluestack-ui/themed";
import * as ImagePicker from "expo-image-picker";
import { useRouter } from "expo-router";
import { analyzeExerciseMock } from "@/src/data/mock/analyzeExerciseMock";
import { MotiView } from "moti";

export default function CameraScreen() {
  const [imageUri, setImageUri] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function openCamera() {
    try {
      const result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.7,
      });

      if (!result.canceled) {
        const uri = result.assets[0].uri;
        setImageUri(uri);
        sendToIA(uri);
      }
    } catch (error) {
      console.error("Erro ao abrir a câmera:", error);
    }
  }

  async function sendToIA(uri: string) {
    setLoading(true);
    try {
      const data = await analyzeExerciseMock(uri);
      router.push({
        pathname: "/exercise-details",
        params: data,
      });
    } catch (error) {
      console.error("Erro ao enviar para IA:", error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <View flex={1} backgroundColor="#0F0F0F" alignItems="center" justifyContent="center" padding="$5">
      {imageUri && (
        <MotiView
          from={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "timing", duration: 500 }}
          style={styles.imageWrapper}
        >
          <Image
            source={{ uri: imageUri }}
            style={styles.image}
          />
          <View style={styles.glowOverlay} />
        </MotiView>
      )}

      {loading && <Spinner size="large" color="#5DD26C" marginBottom="$5" />}

      <MotiView
        from={{ scale: 1 }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ loop: true, duration: 1200, type: "timing" }}
      >
        <Button
          onPress={openCamera}
          disabled={loading}
          backgroundColor="#5DD26C"
          borderRadius={16}
          paddingVertical={18}
          paddingHorizontal={28}
          minHeight={60}
          style={styles.button}
        >
          {loading && <Spinner color="#0F0F0F" mr="$2" />}
          <ButtonText color="#0F0F0F" fontWeight="$bold" fontSize="$lg">
            Tirar Foto
          </ButtonText>
        </Button>
      </MotiView>

      <Text style={styles.instructionText}>
        Aponte a câmera para o equipamento de treino
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  imageWrapper: {
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 260,
    height: 260,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: "#5DD26C",
  },
  glowOverlay: {
    position: "absolute",
    width: 280,
    height: 280,
    borderRadius: 140,
    backgroundColor: "rgba(93, 210, 108, 0.2)",
    shadowColor: "#5DD26C",
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 12,
    elevation: 15,
  },
  button: {
    shadowColor: "#5DD26C",
    shadowOpacity: 0.4,
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 8,
    elevation: 10,
  },
  instructionText: {
    marginTop: 16,
    color: "#D7FFD7",
    fontSize: 14,
    textAlign: "center",
    textShadowColor: "#5DD26C",
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 5,
  },
});
