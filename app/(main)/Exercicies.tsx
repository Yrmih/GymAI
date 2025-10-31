import React from "react";
import { ScrollView } from "react-native";
import { useRouter } from "expo-router";
import { View, Text, Button, ButtonText } from "@gluestack-ui/themed";
import { MotiView } from "moti";

import ExerciseCard from "@/src/components/card/ExerciseCard";
import { exercisesMock } from "@/src/mock/exercisesMock";

export default function Exercises() {
  const router = useRouter();

  return (
    <View flex={1} bg="#0F0F0F">
      {/* Cabeçalho */}
      <View
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        paddingHorizontal="$6"
        paddingTop="$12"
        paddingBottom="$6"
      >
        <Text
          color="$white"
          fontSize="$2xl"
          fontWeight="$bold"
          flexShrink={1}
          flexWrap="wrap"
        >
          Exercícios Disponíveis
        </Text>

        <Button
          size="sm"
          bg="$green500"
          borderRadius="$lg"
          px="$3"
          py="$2"
          onPress={() => router.back()}
        >
          <ButtonText color="$black" fontWeight="$bold">
            Voltar
          </ButtonText>
        </Button>
      </View>

      {/* Lista de Exercícios */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: "center", // centraliza verticalmente
          paddingHorizontal: 24,
          paddingBottom: 60,
          gap: 20,
        }}
      >
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
    </View>
  );
}
