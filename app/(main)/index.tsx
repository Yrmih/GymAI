import React from "react";
import { ScrollView, Image, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { useSelector } from "react-redux";
import { RootState } from "@/src/data/redux/store";

import { View, Text, Avatar } from "@gluestack-ui/themed";
import { MotiView } from "moti";

import DashboardCircle from "@/src/components/charts/DashboardCircle";
import FloatingCameraButton from "@/src/components/button/FloatingCameraButton";
import AppIcon from "@/src/components/icons/AppIcon";

export default function Home() {
  const router = useRouter();

  // Agora realmente refletindo o store:
  const usuario = useSelector((state: RootState) => state.perfil.usuario);

  const avatarUri =
    usuario?.avatar ||
    usuario?.foto ||
    "https://i.pravatar.cc/100?img=68";

  return (
    <View flex={1} bg="#121212">
      {/* Cabeçalho */}
      <View
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        paddingHorizontal={24}
        paddingTop={48}
      >
        <TouchableOpacity
          style={{ flexDirection: "row", alignItems: "center", gap: 12 }}
          onPress={() => router.push("/Profile")}
        >
          <Avatar size="sm">
            <Image
              source={{ uri: avatarUri }}
              style={{ width: "100%", height: "100%", borderRadius: 999 }}
            />
          </Avatar>

          <Text color="$white" fontWeight="$bold" fontSize="$lg">
            Olá, {usuario?.nome || "Treinador"}!
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push("/Settings")}>
          <AppIcon name="cog-outline" size={24} color="#CCCCCC" />
        </TouchableOpacity>
      </View>

      {/* Conteúdo */}
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: "center",
          alignItems: "center",
          gap: 24,
          paddingVertical: 40,
        }}
      >
        <MotiView
          from={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <DashboardCircle
            progress={66}
            radius={100} 
            strokeColor="#5DD26C"
            backgroundColor="#1A1A1A"
            glow
          />

          <Text color="$white" fontSize="$xl" fontWeight="$bold" marginTop={12}>
            2 de 3
          </Text>

          <Text color="#AAAAAA" fontSize="$sm">Dias na Semana</Text>

          <Text color="$white" fontSize="$md" marginTop={8}>
            Sua Meta Semanal
          </Text>
        </MotiView>
      </ScrollView>

      {/* Barra Inferior */}
      <View
        position="absolute"
        bottom={0}
        left={0}
        right={0}
        height={80}
        flexDirection="row"
        justifyContent="space-around"
        alignItems="center"
        bg="#000000"
        paddingHorizontal={24}
      >
        <TouchableOpacity>
          <AppIcon name="home-outline" size={28} color="#5DD26C" />
        </TouchableOpacity>

        <FloatingCameraButton />

        <TouchableOpacity onPress={() => router.push("/Treinos")}>
          <AppIcon name="barbell" size={28} color="#CCCCCC" /> 
        </TouchableOpacity>
      </View>
    </View>
  );
}
