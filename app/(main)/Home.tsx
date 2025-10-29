import React from "react";
import { ScrollView } from "react-native";
import tw from "twin.macro";
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

  return (
    <ScrollView style={tw`flex-1 bg-[#0f0f0f] px-6 pt-10`}>
      {/* Saudações animadas */}
      <MotiView
        from={{ opacity: 0, translateY: 20 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Text style={tw`text-[#f8f8f8] text-2xl font-bold mb-6`}>
          Olá, {usuario.nome || "Treinador"}!
        </Text>
      </MotiView>

      <View style={tw`space-y-4`}>
        {/* Cards animados com delay para efeito cascata */}
        {[
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
        ].map((item, index) => (
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

      {/* Botão extra animado */}
      <MotiView
        from={{ opacity: 0, translateY: 10 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
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
      </MotiView>
    </ScrollView>
  );
}
