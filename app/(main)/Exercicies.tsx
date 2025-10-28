import React from "react";
import { ScrollView, Text, View } from "react-native";
import tw from "twin.macro";
import ExerciseCard from "@/src/components/card/ExerciseCard";
import { exercisesMock } from "@/src/mock/exercisesMock";

export default function Exercises() {
  return (
    <ScrollView style={tw`flex-1 bg-[#0f0f0f] px-6 pt-10`}>
      <Text style={tw`text-[#f8f8f8] text-2xl font-bold mb-6`}>
        Exercícios Disponíveis
      </Text>

      <View>
        {exercisesMock.map((item) => (
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
