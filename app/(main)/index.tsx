import React from "react";
import { ScrollView } from "react-native";
import { useRouter } from "expo-router";
import { useSelector } from "react-redux";
import { RootState } from "@/src/redux/store";
import { View, Text } from "@gluestack-ui/themed";
import { MotiView } from "moti";

import DashboardCircle from "@/src/components/charts/DashboardCircle";
import GridSection from "@/src/components/grid/GridSection";
import FloatingCameraButton from "@/src/components/button/FloatingCameraButton";

export default function Home() {
  const router = useRouter();
  const usuario = useSelector((state: RootState) => state.usuario);

  return (
    <View style={{ flex: 1, backgroundColor: "#0F0F0F" }}>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          alignItems: "center",
          paddingVertical: 40,
          gap: 24,
        }}
        showsVerticalScrollIndicator={false}
      >
        {/* Saudação */}
        <MotiView
          from={{ opacity: 0, translateY: 20 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Text
            color="$white"
            fontSize="$2xl"
            fontWeight="$bold"
            textAlign="center"
            mb="$4"
          >
            Olá, {usuario.nome || "Treinador"}!
          </Text>
        </MotiView>

        {/* Dashboard (anel de progresso) */}
        <MotiView
          from={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <DashboardCircle progress={65} /> {/* 👈 Exemplo com progresso */}
        </MotiView>

        {/* Grid 2x2 */}
        <MotiView
          from={{ opacity: 0, translateY: 15 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <GridSection />
        </MotiView>
      </ScrollView>

      {/* Botão flutuante (câmera) */}
      <FloatingCameraButton />
    </View>
  );
}
