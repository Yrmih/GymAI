import React, { useLayoutEffect } from "react";
import { ScrollView, Text, TouchableOpacity } from "react-native";
import { MotiView } from "moti";
import { View, Avatar, Image } from "@gluestack-ui/themed";
import { useRouter, useNavigation } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function ProfileScreen() {
  const router = useRouter();
  const navigation = useNavigation();

  // Mock (depois conecta com Firebase)
  const nivel = 5;
  const xpAtual = 300;
  const xpProximo = 500;
  const progressoXP = xpAtual / xpProximo;
  const aparelhosDescobertos = 12;

  // === HEADER CONFIG ===
  useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: { backgroundColor: "#0F0F0F" },
      headerTintColor: "#FFF",
      headerTitle: "",
      headerRight: () => (
        <TouchableOpacity
          onPress={() => router.push("/main/settings")}
          style={{ paddingRight: 16 }}
        >
          <Ionicons
            name="settings-outline"
            size={26}
            color="#5DD26C"
          />
        </TouchableOpacity>
      ),
      headerRightContainerStyle: {
        paddingRight: 16,
      },
    });
  }, [navigation]);

  return (
    <View flex={1} bg="#0F0F0F">
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 24,
          paddingTop: 48,
          paddingBottom: 40,
        }}
        showsVerticalScrollIndicator={false}
      >
        <MotiView
          from={{ opacity: 0, translateY: 20 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ type: "timing", duration: 600 }}
        >
          {/* Avatar e Identidade */}
          <View style={{ alignItems: "center", marginBottom: 32 }}>
            <Avatar
              size="xl"
              style={{
                borderWidth: 3,
                borderColor: "#5DD26C",
                shadowColor: "#5DD26C",
                shadowOffset: { width: 0, height: 0 },
                shadowOpacity: 0.8,
                shadowRadius: 10,
              }}
            >
              <Image
                source={{ uri: "https://i.pravatar.cc/200?img=68" }}
                style={{ width: "100%", height: "100%", borderRadius: 999 }}
              />
            </Avatar>

            <Text
              style={{
                color: "#FFFFFF",
                fontSize: 24,
                fontWeight: "bold",
                marginTop: 16,
              }}
            >
              Ian Gonçalves
            </Text>

            <Text style={{ color: "#AAAAAA", fontSize: 16 }}>@iangymai</Text>
          </View>

          {/* Barra de Nível / XP */}
          <View
            style={{
              backgroundColor: "#1A1A1A",
              padding: 20,
              borderRadius: 16,
              marginBottom: 24,
            }}
          >
            <Text
              style={{
                color: "#FFFFFF",
                fontSize: 18,
                fontWeight: "600",
                marginBottom: 12,
              }}
            >
              Nível {nivel} — Explorador
            </Text>

            <View
              style={{
                width: "100%",
                height: 10,
                backgroundColor: "#333",
                borderRadius: 10,
                overflow: "hidden",
              }}
            >
              <View
                style={{
                  width: `${progressoXP * 100}%`,
                  height: "100%",
                  backgroundColor: "#5DD26C",
                }}
              />
            </View>

            <Text
              style={{
                color: "#AAAAAA",
                fontSize: 12,
                marginTop: 8,
                textAlign: "right",
              }}
            >
              {xpAtual} / {xpProximo} XP
            </Text>
          </View>

          {/* Card Minha Jornada */}
          <View
            style={{
              backgroundColor: "#1A1A1A",
              padding: 24,
              borderRadius: 16,
              marginBottom: 24,
            }}
            onTouchEnd={() => router.push("/main/Progress")}
          >
            <View style={{ alignItems: "center", marginBottom: 16 }}>
              <View
                style={{
                  width: 70,
                  height: 70,
                  borderRadius: 16,
                  backgroundColor: "#5DD26C20",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Ionicons name="stats-chart" size={40} color="#5DD26C" />
              </View>
            </View>

            <Text
              style={{
                color: "#FFFFFF",
                fontSize: 20,
                fontWeight: "600",
                textAlign: "center",
                marginBottom: 6,
              }}
            >
              Minha Jornada
            </Text>

            <Text
              style={{
                color: "#AAAAAA",
                textAlign: "center",
                fontSize: 14,
              }}
            >
              Seu progresso, aparelhos usados e evolução geral
            </Text>
          </View>

          {/* Resumo da Coleção */}
          <View
            style={{
              backgroundColor: "#1A1A1A",
              padding: 20,
              borderRadius: 16,
              marginBottom: 24,
            }}
          >
            <Text
              style={{
                color: "#FFFFFF",
                fontSize: 18,
                fontWeight: "600",
                marginBottom: 8,
              }}
            >
              Coleção de Equipamentos
            </Text>

            <Text style={{ color: "#AAAAAA", fontSize: 14 }}>
              {aparelhosDescobertos} aparelhos descobertos até agora 🔥
            </Text>
          </View>

          {/* Botão de Logout */}
          <MotiView
            from={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", delay: 200 }}
          >
            <View
              style={{
                backgroundColor: "#E53935",
                padding: 16,
                borderRadius: 12,
                alignItems: "center",
                shadowColor: "#E53935",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.5,
                shadowRadius: 6,
              }}
              onTouchEnd={() => console.log("Logout")}
            >
              <Text
                style={{
                  color: "#FFFFFF",
                  fontSize: 18,
                  fontWeight: "600",
                }}
              >
                Sair
              </Text>
            </View>
          </MotiView>
        </MotiView>
      </ScrollView>
    </View>
  );
}
