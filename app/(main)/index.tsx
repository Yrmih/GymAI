import React from "react";
import { ScrollView } from "react-native";
import { useRouter } from "expo-router";
import { useSelector } from "react-redux";
import { RootState } from "@/src/redux/store";

// Gluestack UI
import { View, Text, Button } from "@gluestack-ui/themed";
import HomeCard from "@/src/components/card/HomeCard";

// Moti
import { MotiView } from "moti";

export default function Home() {
  const router = useRouter();
  const usuario = useSelector((state: RootState) => state.usuario);

  const cards = [
    {
      title: "Exercícios",
      description: "Veja a lista completa de exercícios disponíveis",
      route: "/(main)/exercises",
    },
    {
      title: "Progresso",
      description: "Acompanhe sua evolução e gráficos de desempenho",
      route: "/(main)/progress",
    },
    {
      title: "Perfil",
      description: "Edite suas informações e preferências",
      route: "/(main)/profile",
    },
  ];

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: "#0F0F0F", paddingHorizontal: 24, paddingTop: 40 }}
      contentContainerStyle={{ gap: 16 }}
    >
      {/* Saudações animadas */}
      <MotiView
        from={{ opacity: 0, translateY: 20 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Text style={{ color: "#F8F8F8", fontSize: 24, fontWeight: "bold", marginBottom: 24 }}>
          Olá, {usuario.nome || "Treinador"}!
        </Text>
      </MotiView>

      <View style={{ gap: 16 }}>
        {cards.map((item, index) => (
          <MotiView
            key={item.title}
            from={{ opacity: 0, translateY: 15 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.5, delay: 0.2 * index }}
          >
            <HomeCard
              title={item.title}
              description={item.description}
              onPress={() => router.push(item.route)}
            />
          </MotiView>
        ))}
      </View>

      {/* Botão extra */}
      <MotiView
        from={{ opacity: 0, translateY: 10 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        style={{ marginTop: 24 }}
      >
        <Button
          bg="$green500"
          borderRadius="2xl"
          py="$4"
          px="$6"
          onPress={() => console.log("Botão teste Gluestack")}
        >
          <Text style={{ color: "#0F0F0F", fontWeight: "bold", fontSize: 16 }}>
            Botão teste
          </Text>
        </Button>
      </MotiView>
    </ScrollView>
  );
}
