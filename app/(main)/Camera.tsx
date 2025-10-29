import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, ActivityIndicator, StyleSheet } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useRouter } from "expo-router";

export default function CameraScreen() {
  const [imageUri, setImageUri] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // Abrir a câmera
  async function openCamera() {
    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 0.7,
    });

    if (!result.canceled) {
      const uri = result.assets[0].uri;
      setImageUri(uri);
      sendToIA(uri);
    }
  }

  // Enviar imagem para N8N + IA
  async function sendToIA(uri: string) {
    setLoading(true);
    try {
      const response = await fetch("https://seu-n8n-endpoint/analyze-exercise", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ image: await toBase64(uri) }),
      });

      const data = await response.json();

      // Navegar para ExerciseDetails passando os dados retornados
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

  // Helper para converter URI para Base64
  async function toBase64(uri: string) {
    const response = await fetch(uri);
    const blob = await response.blob();
    return await new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result as string);
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  }

  return (
    <View style={styles.container}>
      {imageUri && <Image source={{ uri: imageUri }} style={styles.preview} />}
      {loading && <ActivityIndicator size="large" color="#5DD26C" style={{ marginBottom: 20 }} />}
      
      <TouchableOpacity
        style={[styles.button, loading && styles.buttonDisabled]}
        onPress={openCamera}
        disabled={loading}
      >
        <Text style={styles.buttonText}>Tirar Foto</Text>
      </TouchableOpacity>
    </View>
  );
}

// 🎨 Estilos com base na paleta GymAI
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F0F0F",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  preview: {
    width: 250,
    height: 250,
    marginBottom: 20,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#5DD26C",
  },
  button: {
    backgroundColor: "#5DD26C",
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 30,
  },
  buttonDisabled: {
    opacity: 0.6,
  },
  buttonText: {
    color: "#0F0F0F",
    fontWeight: "bold",
    fontSize: 18,
  },
});
