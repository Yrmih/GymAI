import React from "react";
import { ScrollView } from "react-native";
import { View, Text } from "@gluestack-ui/themed";
import { MotiView } from "moti";

import ExerciseCard from "@/src/components/card/ExerciseCard";
import { exercisesMock } from "@/src/mock/exercisesMock";

export default function Exercises() {
  return (
    <View flex={1} backgroundColor="#0F0F0F" paddingHorizontal="$6" paddingTop="$10">
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text
          color="#F8F8F8"
          fontSize="$2xl"
          fontWeight="$bold"
          marginBottom="$6"
        >
          Exercícios Disponíveis
        </Text>

        {exercisesMock.map((item, index) => (
          <MotiView
            key={item.id}
            from={{ opacity: 0, translateY: 20 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ delay: index * 100, type: "timing", duration: 400 }}
            style={{ marginBottom: 16 }}
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
    </View>
  );
}
