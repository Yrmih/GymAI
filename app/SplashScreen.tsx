import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { VideoView, useVideoPlayer } from "expo-video";
import { MotiView, AnimatePresence } from "moti";
import { useRouter } from "expo-router";
import { useSelector } from "react-redux";
import { RootState } from "@/src/redux/store";

interface SplashScreenProps {
  onFinish: () => void;
}

export default function SplashScreen({ onFinish }: SplashScreenProps) {
  const router = useRouter();
  const usuarioLogado = useSelector((state: RootState) => state.usuario.logado);
  const [fadeOut, setFadeOut] = useState(false);

  // ✅ useVideoPlayer precisa estar fora de qualquer if
  const player = useVideoPlayer(
    require("../assets/video/AI_Bodybuilding_Cinematic_Splash_Screen.mp4"),
    (player) => {
      player.loop = false;
      player.play();
    }
  );

  // 🎯 Timeout baseado no tempo do vídeo (8 segundos)
  useEffect(() => {
    const timeout = setTimeout(() => {
      console.log("🎬 Vídeo terminou (timeout de 8s)");
      setFadeOut(true);
    }, 8000);

    return () => clearTimeout(timeout);
  }, []);

  // 🌫️ Fade + navegação
  useEffect(() => {
    if (!fadeOut) return;

    const timeout = setTimeout(() => {
      console.log("➡️ Indo para próxima tela...");
      if (usuarioLogado) {
        router.replace("/(home)");
      } else {
        router.replace("/(auth)/Login");
      }
      onFinish();
    }, 1000);

    return () => clearTimeout(timeout);
  }, [fadeOut]);

  return (
    <AnimatePresence>
      {!fadeOut && (
        <MotiView
          style={[
            StyleSheet.absoluteFill,
            { zIndex: 9999, backgroundColor: "black" },
          ]}
          from={{ opacity: 1 }}
          animate={{ opacity: fadeOut ? 0 : 1 }}
          transition={{ type: "timing", duration: 1000 }}
        >
          <VideoView
            player={player}
            style={StyleSheet.absoluteFill}
            contentFit="cover"
            fullscreenOptions={{ enable: false }}
            allowsPictureInPicture={false}
          />
        </MotiView>
      )}
    </AnimatePresence>
  );
}
