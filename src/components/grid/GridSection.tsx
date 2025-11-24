import React from "react";
import { useRouter } from "expo-router";
import { MotiView } from "moti";

import HomeCard from "@/src/components/card/HomeCard";
import AppIcon from "@/src/components/icons/AppIcon";
import { CardItem } from "@/src/types/CardItem";

export default function GridSection() {
  const router = useRouter();

  const cards: CardItem[] = [
    {
      title: "Minha Coleção",
      description: "Seus exercícios salvos e favoritos.",
      icon: "heart-outline",
      route: "/Exercicies",
    },
    {
      title: "GymAI Chat",
      description: "Tire dúvidas de treino com a IA.",
      icon: "chatbubble-ellipses-outline",
      route: "/GymAIChat",
    },
    {
      title: "Meu Progresso",
      description: "Sua consistência e estatísticas.",
      icon: "stats-chart-outline",
      route: "/Progress",
    },
    {
      title: "Histórico",
      description: "Últimos aparelhos identificados.",
      icon: "time-outline",
      route: "/History",
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
          from={{
            opacity: 0,
            translateY: 20,
            scale: 0.9,
          }}
          animate={{
            opacity: 1,
            translateY: 0,
            scale: 1,
          }}
          transition={{
            type: "spring",
            damping: 12,
            delay: index * 120,
          }}
          style={{ width: "47%" }}
        >
          <HomeCard
            title={card.title}
            description={card.description}
            onPress={() => router.push(card.route)}
            icon={<AppIcon name={card.icon} size={28} color="#5DD26C" />}
          />
        </MotiView>
      ))}
    </MotiView>
  );
}
