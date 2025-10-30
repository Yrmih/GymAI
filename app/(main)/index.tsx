import React from "react";
import { ScrollView } from "react-native";
import { useRouter } from "expo-router";
import { useSelector } from "react-redux";
import { RootState } from "@/src/redux/store";
import { View, Text, Button, ButtonText } from "@gluestack-ui/themed";
import HomeCard from "@/src/components/card/HomeCard";
import { MotiView } from "moti";

export default function Home() {
  const router = useRouter();
  const usuario = useSelector((state: RootState) => state.usuario);

  const cards = [
    {
      title: "Exercícios",
      description: "Veja a lista completa de exercícios disponíveis",
      route: "/exercises",
    },
    {
      title: "Progresso",
      description: "Acompanhe sua evolução e gráficos de desempenho",
      route: "/progress",
    },
    {
      title: "Perfil",
      description: "Edite suas informações e preferências",
      route: "/profile",
    },
  ];

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: "#0F0F0F", paddingHorizontal: 24 }}
      contentContainerStyle={{
        flexGrow: 1,            // garante que o ScrollView ocupe a tela inteira
        justifyContent: "center", // centraliza verticalmente
        gap: 16,
        paddingVertical: 40,     // espaço em cima e embaixo
      }}
    >
      {/* Saudações animadas */}
      <MotiView
        from={{ opacity: 0, translateY: 20 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Text color="$white" fontSize="$2xl" fontWeight="$bold" mb="$6">
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
        style={{ marginTop: 32 }} // mais espaço acima do botão
      >
        <Button
          bg="$green500"
          borderRadius="$2xl"
          py="$4"
          px="$6"
          minHeight={50} // garante altura confortável
          onPress={() => console.log("Botão teste Gluestack")}
        >
          <ButtonText color="$black" fontWeight="$bold" fontSize="$md">
            Botão teste
          </ButtonText>
        </Button>
      </MotiView>
    </ScrollView>
  );
}
