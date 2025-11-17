import React from "react";
import { ScrollView } from "react-native";
import { useRouter } from "expo-router";
import { useSelector } from "react-redux";
import { RootState } from "@/src/data/redux/store";

import { View, Text } from "@gluestack-ui/themed";
import { MotiView } from "moti";

import DashboardCircle from "@/src/components/charts/DashboardCircle";
import GridSection from "@/src/components/grid/GridSection";
import FloatingCameraButton from "@/src/components/button/FloatingCameraButton";

export default function Home() {
  const router = useRouter();
  const usuario = useSelector((state: RootState) => state.usuario);

  return (
    <View flex={1} bg="#0F0F0F">
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          paddingVertical: 40,
          gap: 32,
        }}
        showsVerticalScrollIndicator={false}
      >
        {/* 👋 Saudação: Centralizamos aqui no estilo inline do Moti */}
        <MotiView
          from={{ opacity: 0, translateY: 20 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.6 }}
          style={{ width: "100%", alignItems: "center" }}
        >
          <Text
            color="$white"
            fontSize="$2xl"
            fontWeight="$bold"
            textAlign="center"
          >
            Olá, {usuario.nome || "Treinador"}!
          </Text>
        </MotiView>

        {/* 🔵 Dashboard: Também centralizado individualmente */}
        <MotiView
          from={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{ width: "100%", alignItems: "center" }}
        >
          <DashboardCircle progress={65} />
        </MotiView>

        {/* 🧩 Grid: Ocupa 100% e NÃO centraliza os itens (deixa o GridSection gerenciar) */}
        <MotiView
          from={{ opacity: 0, translateY: 15 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{ width: "100%", paddingHorizontal: 24 }}
        >
          <GridSection />
        </MotiView>
      </ScrollView>

      {/* 📸 Botão flutuante */}
      <FloatingCameraButton />
    </View>
  );
}
