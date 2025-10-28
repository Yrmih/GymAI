import React, { useEffect } from "react";
import { View, Text, Image, ActivityIndicator } from "react-native";
import tw from "twin.macro";
import { useSelector } from "react-redux";
import { RootState } from "@/src/redux/store";
import { useRouter } from "expo-router";


import logo from "@/assets/brand/logo.png";

export default function SplashScreen() {
  const router = useRouter();

  // eu ajusto  aqui conforme meu slice
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
      <Image
        source={logo}
        style={{ width: 150, height: 150, resizeMode: "contain" }}
      />

      <ActivityIndicator size="large" color="#5dd62c" style={tw`mt-6`} />

      <Text style={tw`text-base mt-4 text-[#f8f8f8]`}>
        Seu treino, seu progresso
      </Text>
    </View>
  );
}
