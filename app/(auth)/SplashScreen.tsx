import React, { useEffect, useState } from "react";
import { useRouter } from "expo-router";
import { Video, ResizeMode, AVPlaybackStatusSuccess } from "expo-av";
import { View } from "@gluestack-ui/themed";
import { MotiView, AnimatePresence } from "moti";
import { useSelector } from "react-redux";
import { RootState } from "@/src/redux/store";

export default function SplashScreen() {
  const router = useRouter();
  const usuarioLogado = useSelector((state: RootState) => state.usuario.logado);

  const [finished, setFinished] = useState(false);

  const handlePlaybackStatusUpdate = (status: AVPlaybackStatusSuccess) => {
    if (status.didJustFinish) {
      setFinished(true);
    }
  };

  useEffect(() => {
    if (finished) {
      const timer = setTimeout(() => {
        if (usuarioLogado) {
          router.replace("/(main)/index");
        } else {
          router.replace("/(auth)/login");
        }
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [finished, usuarioLogado]);

  return (
    <View flex={1} justifyContent="center" alignItems="center" bg="#000">
      <AnimatePresence>
        {!finished && (
          <MotiView
            from={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1000 }} // ← controla fade-in e fade-out (em ms)
            style={{ flex: 1, width: "100%", height: "100%" }}
          >
            <Video
              source={require("@/assets/video/AI_Bodybuilding_Cinematic_Splash_Screen.mp4")}
              style={{ flex: 1 }}
              resizeMode={ResizeMode.COVER}
              shouldPlay
              isLooping={false}
              onPlaybackStatusUpdate={(status) => {
                if (
                  status.isLoaded &&
                  (status as AVPlaybackStatusSuccess).didJustFinish
                ) {
                  setFinished(true);
                }
              }}
            />
          </MotiView>
        )}
      </AnimatePresence>
    </View>
  );
}
