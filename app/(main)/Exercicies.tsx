import React from "react";
import { ScrollView, Text, View } from "react-native";
import tw from "twin.macro";
import ExerciseCard from "@/src/components/card/ExerciseCard";

// Mock temporário de exercícios (futuramente vem da IA ou do Firebase)
const exercises = [
  {
    id: 1,
    name: "Supino Reto com Barra",
    muscle: "Peitoral",
    image: "https://static.strengthlevel.com/images/illustrations/bench-press-1000x1000.jpg",
  },
  {
    id: 2,
    name: "Agachamento Livre",
    muscle: "Pernas / Glúteos",
    image: "https://static.strengthlevel.com/images/illustrations/squat-1000x1000.jpg",
  },
  {
    id: 3,
    name: "Remada Curvada",
    muscle: "Costas",
    image: "https://static.strengthlevel.com/images/illustrations/bent-over-row-1000x1000.jpg",
  },
  {
    id: 4,
    name: "Desenvolvimento com Halteres",
    muscle: "Ombros",
    image: "https://static.strengthlevel.com/images/illustrations/dumbbell-shoulder-press-1000x1000.jpg",
  },
];

export default function Exercises() {
  return (
    <ScrollView style={tw`flex-1 bg-[#0f0f0f] px-6 pt-10`}>
      <Text style={tw`text-[#f8f8f8] text-2xl font-bold mb-6`}>
        Exercícios Disponíveis
      </Text>

      <View>
        {exercises.map((item) => (
          <ExerciseCard
            key={item.id}
            name={item.name}
            muscle={item.muscle}
            image={item.image}
            onPress={() => console.log(`Abrindo ${item.name}`)}
          />
        ))}
      </View>
    </ScrollView>
  );
}
