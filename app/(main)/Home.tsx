import React from "react";
import { ScrollView } from "react-native";
import tw from "twin.macro";
import { useRouter } from "expo-router";
import { useSelector } from "react-redux";
import { RootState } from "@/src/redux/store";

import { View, Text, Button } from "@gluestack-ui/themed";
import HomeCard from "@/src/components/card/HomeCard";

export default function Home() {
  const router = useRouter();
  const usuario = useSelector((state: RootState) => state.usuario);

  return (
    <ScrollView style={tw`flex-1 bg-[#0f0f0f] px-6 pt-10`}>
      <Text style={tw`text-[#f8f8f8] text-2xl font-bold mb-6`}>
        Olá, {usuario.nome || "Treinador"}!
      </Text>

      <View style={tw`space-y-4`}>
        {/* Card Exercícios */}
        <HomeCard
          title="Exercícios"
          description="Veja a lista completa de exercícios disponíveis"
          onPress={() => router.push("/(main)/exercises")}
        />

        {/* Card Progresso */}
        <HomeCard
          title="Progresso"
          description="Acompanhe sua evolução e gráficos de desempenho"
          onPress={() => router.push("/(main)/progress")}
        />

        {/* Card Perfil */}
        <HomeCard
          title="Perfil"
          description="Edite suas informações e preferências"
          onPress={() => router.push("/(main)/profile")}
        />
      </View>

      {/* Botão extra exemplo com Gluestack UI */}
      <Button
        bg="#5DD26C"
        py={4}
        px={6}
        borderRadius={20}
        mt={6}
        _text={{ color: "#0F0F0F", fontWeight: "bold", fontSize: 16 }}
        onPress={() => console.log("Botão teste Gluestack")}
      >
        Botão teste
      </Button>
    </ScrollView>
  );
}
