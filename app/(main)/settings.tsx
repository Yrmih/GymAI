import React from "react";
import { ScrollView, TouchableOpacity } from "react-native";
import { View, Text } from "@gluestack-ui/themed";
import { useSelector } from "react-redux";
import { RootState } from "@/src/redux/store";
import { useRouter } from "expo-router";
import AppIcon from "@/src/components/icons/AppIcon";

export default function Settings() {
  const router = useRouter();
  const usuario = useSelector((state: RootState) => state.usuario);

  const settingsOptions = [
    { id: 1, title: "Perfil", icon: "person-circle-outline" },
    { id: 2, title: "Inteligência Artificial", icon: "hardware-chip-outline" },
    { id: 3, title: "Treino e Performance", icon: "barbell-outline" },
    { id: 4, title: "Notificações", icon: "notifications-outline" },
    { id: 5, title: "Privacidade e Segurança", icon: "shield-checkmark-outline" },
    { id: 6, title: "Suporte", icon: "help-circle-outline" },
  ];

  return (
    <View flex={1} bg="#0F0F0F">
      <ScrollView
        contentContainerStyle={{
          paddingVertical: 60,
          paddingHorizontal: 24,
          gap: 20,
        }}
        showsVerticalScrollIndicator={false}
      >
        {/* 🔧 Título */}
        <Text
          color="#5DD26C"
          fontSize="$2xl"
          fontWeight="$bold"
          textAlign="center"
          marginBottom={24}
        >
          Configurações
        </Text>

        {/* 🧑 Perfil */}
        <View
          bg="#1A1A1A"
          borderRadius={16}
          padding={20}
          alignItems="center"
          style={{
            borderWidth: 1,
            borderColor: "#5DD26C",
            shadowColor: "#5DD26C",
            shadowOpacity: 0.3,
            shadowRadius: 8,
            shadowOffset: { width: 0, height: 2 },
          }}
        >
          <AppIcon name="person-circle-outline" size={64} />
          <Text
            color="white"
            fontSize="$lg"
            fontWeight="$bold"
            marginTop={12}
          >
            {usuario.nome || "Usuário"}
          </Text>
          <Text color="#9B9B9B" fontSize="$sm">
            {usuario.email || "user.email@example.com"}
          </Text>
        </View>

        {/* ⚙️ Opções */}
        <View marginTop={20} gap={16}>
          {settingsOptions.map((item) => (
            <TouchableOpacity
              key={item.id}
              activeOpacity={0.8}
              style={{
                backgroundColor: "#1A1A1A",
                borderRadius: 14,
                paddingVertical: 14,
                paddingHorizontal: 20,
                flexDirection: "row",
                alignItems: "center",
                borderWidth: 1,
                borderColor: "#2C2C2C",
                shadowColor: "#5DD26C",
                shadowOpacity: 0.15,
                shadowOffset: { width: 0, height: 2 },
              }}
              onPress={() => console.log(`Abrindo ${item.title}`)}
            >
              <AppIcon name={item.icon as any} size={24} />
              <Text
                color="#F8F8F8"
                fontSize="$md"
                fontWeight="$medium"
                marginLeft={12}
              >
                {item.title}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
