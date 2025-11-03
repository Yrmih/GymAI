import React from "react";
import { View, Text } from "@gluestack-ui/themed";
import { TouchableOpacity } from "react-native";
import { MotiView } from "moti";
import { useRouter } from "expo-router";
import AppIcon from "@/src/components/icons/AppIcon"; // 👈 usa o seu componente de ícones

const items = [
  {
    title: "Exercícios",
    description: "Veja a lista completa de treinos",
    route: "/Exercicies",
    icon: "barbell-outline", // Ionicons
  },
  {
    title: "Progresso",
    description: "Acompanhe sua evolução",
    route: "/Progress",
    icon: "stats-chart-outline",
  },
  {
    title: "Perfil",
    description: "Edite suas informações",
    route: "/Profile",
    icon: "person-circle-outline",
  },
  {
    title: "Configurações",
    description: "Ajuste preferências do app",
    route: "/Settings",
    icon: "settings-outline",
  },
];

export default function GridSection() {
  const router = useRouter();

  return (
    <View
      style={{
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: 16,
        paddingHorizontal: 20,
      }}
    >
      {items.map((item, index) => (
        <MotiView
          key={item.title}
          from={{ opacity: 0, translateY: 20 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
        >
          <TouchableOpacity
            onPress={() => router.push(item.route)}
            style={{
              width: 150,
              height: 150,
              backgroundColor: "#1A1A1A",
              borderRadius: 20,
              padding: 16,
              alignItems: "center",
              justifyContent: "center",
              borderWidth: 1,
              borderColor: "#222",
              shadowColor: "#5DD26C",
              shadowOpacity: 0.15,
              shadowOffset: { width: 0, height: 4 },
              shadowRadius: 6,
            }}
          >
            {/* Ícone centralizado */}
            <AppIcon name={item.icon as any} size={30} color="#5DD26C" />
            <Text
              color="$white"
              fontWeight="$bold"
              fontSize="$lg"
              textAlign="center"
              mt="$2"
            >
              {item.title}
            </Text>
            <Text
              color="$gray400"
              fontSize="$sm"
              textAlign="center"
              mt="$1"
            >
              {item.description}
            </Text>
          </TouchableOpacity>
        </MotiView>
      ))}
    </View>
  );
}
