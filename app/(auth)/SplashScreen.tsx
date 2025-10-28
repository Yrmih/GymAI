// app/(auth)/SplashScreen.tsx
import React, { useEffect } from "react";
import { View, Text, Image, ActivityIndicator } from "react-native";
import tw from "twin.macro";
import { useSelector } from "react-redux";
import { RootState } from "@/src/redux/store";
import { useRouter } from "expo-router";

// Importando a logo
import logo from "@/assets/brand/logo.png"


export default function SplashScreen() {
  const router = useRouter();

  // Ajuste aqui conforme seu slice
  const usuarioLogado = useSelector((state: RootState) => state.usuario.usuario);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (usuarioLogado) {
        router.replace("/(main)/index"); // Vai para Home se logado
      } else {
        router.replace("/(auth)/login"); // Senão vai para Login
      }
    }, 2000); // 2 segundos de splash
    return () => clearTimeout(timer);
  }, [usuarioLogado]);

  return (
    <View style={tw`flex-1 justify-center items-center bg-[#0f0f0f]`}>
      {/* Logo */}
      <Image
        source={logo}
        style={{ width: 150, height: 150, resizeMode: "contain" }}
      />

      {/* Loader */}
      <ActivityIndicator
        size="large"
        color="#5dd62c"
        style={tw`mt-6`}
      />

      {/* Slogan opcional */}
      <Text style={tw`text-base mt-4 text-[#f8f8f8]`}>
        Seu treino, seu progresso
      </Text>
    </View>
  );
}
