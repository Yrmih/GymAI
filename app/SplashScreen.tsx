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

  const videoRef = useRef<Video>(null);

  const handlePlaybackStatus = async (status: AVPlaybackStatus) => {
    if (!status.isLoaded) return;

    if (status.didJustFinish) {
      await videoRef.current?.pauseAsync();

      if (usuarioLogado) {
        onFinish();
      } else {
        router.replace("/(auth)/Login");
        onFinish();
      }
    }
  };

  return (
    <Video
      ref={videoRef}
      source={require("../assets/video/AI_Bodybuilding_Cinematic_Splash_Screen.mp4")}
      style={StyleSheet.absoluteFill}
      isMuted
      resizeMode={ResizeMode.COVER}
      onPlaybackStatusUpdate={handlePlaybackStatus}
      isLooping={false}
    />
  );
}
