import React, { useEffect } from "react";
import { Image } from "react-native";
import tw from "twin.macro";
import { useSelector } from "react-redux";
import { RootState } from "@/src/redux/store";
import { useRouter } from "expo-router";

// Gluestack UI
import { View, Text, Spinner } from "@gluestack-ui/themed";

// Moti
import { MotiView } from "moti";

// Logo
import logo from "@/assets/brand/logo.png";

export default function SplashScreen() {
  const router = useRouter();
  const usuarioLogado = useSelector(
    (state: RootState) => state.usuario.logado
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      if (usuarioLogado) {
        router.replace("/(main)/index");
      } else {
        router.replace("/(auth)/login");
      }
    }, 2000);
    return () => clearTimeout(timer);
  }, [usuarioLogado]);

  return (
    <View style={tw`flex-1 justify-center items-center bg-[#0f0f0f]`}>
      
      {/* Logo animado com Moti */}
      <MotiView
        from={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 120 }}
      >
        <Image
          source={logo}
          style={{ width: 150, height: 150, resizeMode: "contain" }}
        />
      </MotiView>

      {/* Spinner do Gluestack */}
      <Spinner
        size="lg"
        color="#5DD26C"
        style={tw`mt-6`}
      />

      {/* Texto animado */}
      <MotiView
        from={{ opacity: 0, translateY: 10 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <Text style={tw`text-base mt-4 text-[#f8f8f8]`}>
          Seu treino, seu progresso
        </Text>
      </MotiView>

    </View>
  );
}
