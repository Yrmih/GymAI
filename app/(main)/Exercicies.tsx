import React from "react";
import { ScrollView, Text } from "react-native";
import tw from "twin.macro";
import { MotiView } from "moti";

import ExerciseCard from "@/src/components/card/ExerciseCard";
import { exercisesMock } from "@/src/mock/exercisesMock";

export default function Exercises() {
  return (
    <ScrollView style={tw`flex-1 bg-[#0f0f0f] px-6 pt-10`}>
      <Text style={tw`text-[#f8f8f8] text-2xl font-bold mb-6`}>
        Exercícios Disponíveis
      </Text>

      {exercisesMock.map((item, index) => (
        <MotiView
          key={item.id}
          from={{ opacity: 0, translateY: 20 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ delay: index * 100, type: "timing", duration: 400 }}
        >
          <ExerciseCard
            name={item.name}
            muscle={item.muscle}
            image={item.image}
            onPress={() => console.log(`Abrindo ${item.name}`)}
          />
        </MotiView>
      ))}
    </ScrollView>
  );
}
