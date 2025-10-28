import React from "react";
import { ScrollView, Text } from "react-native";
import tw from "twin.macro";
import { useRouter } from "expo-router";
import { useSelector } from "react-redux";
import { RootState } from "@/src/redux/store";

import HomeCard from "@/src/components/card/HomeCard";

export default function Home() {
  const router = useRouter();
  const usuario = useSelector((state: RootState) => state.usuario);

  return (
    <ScrollView style={tw`flex-1 bg-[#0f0f0f] px-6 pt-10`}>
      <Text style={tw`text-[#f8f8f8] text-2xl font-bold mb-6`}>
        Olá, {usuario.nome || "Treinador"}!
      </Text>

      <HomeCard
        title="Exercícios"
        description="Veja a lista completa de exercícios disponíveis"
        onPress={() => router.push("/(main)/exercises")}
      />

      <HomeCard
        title="Progresso"
        description="Acompanhe sua evolução e gráficos de desempenho"
        onPress={() => router.push("/(main)/progress")}
      />

      <HomeCard
        title="Perfil"
        description="Edite suas informações e preferências"
        onPress={() => router.push("/(main)/profile")}
      />
    </ScrollView>
  );
}
