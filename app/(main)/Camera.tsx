import React, { useState } from "react";
import { Image, ActivityIndicator } from "react-native";
import { View, Text, Button } from "@gluestack-ui/themed";
import * as ImagePicker from "expo-image-picker";
import { useRouter } from "expo-router";
import { analyzeExerciseMock } from "../../mocks/analyzeExerciseMock";

export default function CameraScreen() {
  const [imageUri, setImageUri] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // Abrir câmera
  async function openCamera() {
    try {
      const result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.7,
      });

      if (!result.canceled) {
        const uri = result.assets[0].uri;
        setImageUri(uri);

        // Simula envio para IA/N8N
        sendToIA(uri);
      }
    } catch (error) {
      console.error("Erro ao abrir a câmera:", error);
    }
  }

  // Simula envio da imagem para IA
  async function sendToIA(uri: string) {
    setLoading(true);
    try {
      const data = await analyzeExerciseMock(uri);

      // Navega para detalhes do exercício
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
    <View className="flex-1 bg-black items-center justify-center p-5">
      {imageUri && (
        <Image
          source={{ uri: imageUri }}
          style={{
            width: 250,
            height: 250,
            borderRadius: 12,
            borderWidth: 2,
            borderColor: "#5DD26C",
            marginBottom: 20,
          }}
        />
      )}

      {loading && <ActivityIndicator size="large" color="#5DD26C" style={{ marginBottom: 20 }} />}

      <Button
        onPress={openCamera}
        disabled={loading}
        _text={{ color: "#0F0F0F", fontWeight: "bold", fontSize: 18 }}
        bg="#5DD26C"
        py={4}
        px={10}
        borderRadius={30}
        _disabled={{ opacity: 0.6 }}
      >
        Tirar Foto
      </Button>
    </View>
  );
}
