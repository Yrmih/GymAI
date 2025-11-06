import React from "react";
import { useRouter } from "expo-router";
import { MotiView } from "moti";
import { CardItem } from "@/src/types/CardItem";
import HomeCard from "@/src/components/card/HomeCard";
import AppIcon from "../icons/AppIcon";


export default function GridSection() {
  const router = useRouter();

  const cards: CardItem[] = [
    {
      title: "Exercícios",
      description: "Veja a lista completa de exercícios disponíveis",
      icon: "barbell-outline",
      route: "/Exercicies",
    },
    {
      title: "Progresso",
      description: "Acompanhe sua evolução e gráficos de desempenho",
      icon: "stats-chart-outline",
      route: "/Progress",
    },
    {
      title: "Perfil",
      description: "Edite suas informações e preferências",
      icon: "person-circle-outline",
      route: "/Profile",
    },
    {
      title: "Configurações",
      description: "Personalize seu treino e preferências do app",
      icon: "settings-outline",
      route: "/Settings",
    },
  ];

  return (
    <MotiView
      from={{ opacity: 0, translateY: 20 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ type: "timing", duration: 600 }}
      style={{
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        gap: 12,
        width: "100%",
        paddingHorizontal: 12,
        marginTop: 10,
      }}
    >
      {cards.map((card, index) => (
        <MotiView
          key={index}
          from={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", delay: index * 100 }}
          style={{ width: "47%" }}
        >
          <HomeCard
            title={card.title}
            description={card.description}
            onPress={() => router.push(card.route)}
            icon={<AppIcon name={card.icon} size={28} color="#fff" />}
          />
        </MotiView>
      ))}
    </MotiView>
  );
}
