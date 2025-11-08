import React, { useState, useEffect, useRef } from "react"; // 1. Importei o useRef
import { Video, ResizeMode, AVPlaybackStatus } from "expo-av";
import { StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { useSelector } from "react-redux";
import { RootState } from "@/src/redux/store";

interface SplashScreenProps {
  onFinish: () => void;
}

export default function SplashScreen({ onFinish }: SplashScreenProps) {
  const router = useRouter();
  const usuarioLogado = useSelector((state: RootState) => state.usuario.logado);
  const [hasFinished, setHasFinished] = useState(false);

  // 2. Criamos uma "referência" para o componente de Vídeo
  const videoRef = useRef<Video>(null);

  const onPlaybackStatusUpdate = (status: AVPlaybackStatus) => {
    // Se não estiver carregado OU se já terminamos, não faça nada.
    if (!status.isLoaded || hasFinished) return;

    if (status.didJustFinish) {
      // 3. ❗️ CORREÇÃO AQUI ❗️
      // Para o vídeo manualmente para quebrar o loop do expo-av
      videoRef.current?.stopAsync(); 
      // Define que terminou (só vai rodar o useEffect uma vez)
      setHasFinished(true);
    }
  };

  // O seu useEffect (que está CORRETO) vai "ouvir" o hasFinished
  // e navegar assim que ele virar true.
  useEffect(() => {
    if (!hasFinished) return;

    if (usuarioLogado) {
      onFinish(); 
    } else {
      router.replace("/(auth)/Login"); 
      onFinish(); 
    }
  }, [hasFinished]); 

  return (
    <Video
      ref={videoRef} // 4. Passamos o ref para o componente
      source={require("../assets/video/AI_Bodybuilding_Cinematic_Splash_Screen.mp4")}
      style={StyleSheet.absoluteFill}
      isMuted
      shouldPlay={!hasFinished} // Isso ainda ajuda
      resizeMode={ResizeMode.COVER}
      onPlaybackStatusUpdate={onPlaybackStatusUpdate}
      isLooping={false} // Mantemos isso por segurança
    />
  );
}