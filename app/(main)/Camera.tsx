import React, { useState } from "react";
import { Image } from "react-native";
import { View, Text, Button, ButtonText, Spinner } from "@gluestack-ui/themed";
import * as ImagePicker from "expo-image-picker";
import { useRouter } from "expo-router";
import { analyzeExerciseMock } from "@/src/mock/analyzeExerciseMock";
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
    <View
      flex={1}
      backgroundColor="#0F0F0F"
      alignItems="center"
      justifyContent="center"
      padding="$5"
    >
      {imageUri && (
        <MotiView
          from={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "timing", duration: 400 }}
        >
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
        </MotiView>
      )}

      {loading && <Spinner size="large" color="#5DD26C" marginBottom="$5" />}

      <Button
        onPress={openCamera}
        disabled={loading}
        backgroundColor="#5DD26C"
        borderRadius="full"
        padding="$3"
        marginBottom="$3"
        opacity={loading ? 0.6 : 1}
      >
        {/* Spinner inline (opcional) + texto via ButtonText */}
        {loading && <Spinner color="#0F0F0F" mr="$2" />}
        <ButtonText color="#0F0F0F" fontWeight="$bold" fontSize="$lg">
          Tirar Foto
        </ButtonText>
      </Button>

      <Text marginTop="$4" color="#F8F8F8" fontSize="$sm" textAlign="center">
        Aponte a câmera para o equipamento de treino
      </Text>
    </View>
  );
}
