import React, { useRef } from "react";
import { Video, ResizeMode, AVPlaybackStatus } from "expo-av";
import { StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { useSelector } from "react-redux";
import { RootState } from "@/src/redux/store";
import { MotiView, AnimatePresence } from "moti";

export default function SplashScreen({ onFinish }: { onFinish: () => void }) {
  const router = useRouter();
  const usuarioLogado = useSelector((state: RootState) => state.usuario.logado);
  const videoRef = useRef<Video>(null);
  const [showSplash, setShowSplash] = React.useState(true);

  const handlePlaybackStatus = async (status: AVPlaybackStatus) => {
    if (!status.isLoaded) return;

    if (status.didJustFinish) {
      // Pausa o vídeo
      await videoRef.current?.pauseAsync();
      // Inicia a animação de fade out
      setShowSplash(false);
    }
  };

  const handleAnimationComplete = () => {
    // Navega quando a animação termina
    if (usuarioLogado) {
      onFinish();
    } else {
      router.replace("/(auth)/Login");
      onFinish();
    }
  };

  return (
    <AnimatePresence>
      {showSplash && (
        <MotiView
          style={StyleSheet.absoluteFill}
          from={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ type: "timing", duration: 800 }}
          onDidAnimate={handleAnimationComplete}
        >
          <Video
            ref={videoRef}
            source={require("../assets/video/AI_Bodybuilding_Cinematic_Splash_Screen.mp4")}
            style={StyleSheet.absoluteFill}
            isMuted
            resizeMode={ResizeMode.COVER}
            onPlaybackStatusUpdate={handlePlaybackStatus}
            shouldPlay
            isLooping={false}
          />
        </MotiView>
      )}
    </AnimatePresence>
  );
}
