import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/src/redux/store";
import { useRouter } from "expo-router";
import { View, Spinner } from "@gluestack-ui/themed";
import { Video, ResizeMode } from "expo-av";

export default function SplashScreen() {
  const router = useRouter();
  const usuarioLogado = useSelector((state: RootState) => state.usuario.logado);
  const videoRef = useRef<Video>(null);

  useEffect(() => {
    // Timer de segurança (caso o vídeo trave)
    const timer = setTimeout(() => {
      if (usuarioLogado) router.replace("/(main)/index");
      else router.replace("/(auth)/login");
    }, 6000); // tempo máximo de exibição

    return () => clearTimeout(timer);
  }, [usuarioLogado]);

  return (
    <View
      flex={1}
      justifyContent="center"
      alignItems="center"
      backgroundColor="#000"
    >
      <Video
        ref={videoRef}
        source={require("@/assets/video/AI_Bodybuilding_Cinematic_Splash_Screen.mp4")}
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
        }}
        resizeMode={ResizeMode.COVER}
        shouldPlay
        isLooping={false}
        onPlaybackStatusUpdate={(status) => {
          if (status.isLoaded && status.didJustFinish) {
            if (usuarioLogado) router.replace("/(main)/index");
            else router.replace("/(auth)/login");
          }
        }}
      />

      {/* Spinner opcional */}
      <View position="absolute" bottom="$10">
        <Spinner size="large" color="#5DD26C" />
      </View>
    </View>
  );
}
