import React from "react";
import { ScrollView } from "react-native";
import { useRouter } from "expo-router";
import { View, Text } from "@gluestack-ui/themed";
import { MotiView } from "moti";

import GridSection from "@/src/components/grid/GridSection";

export default function WorkoutGallery() {
  const router = useRouter();

  return (
    <View flex={1} bg="#121212">
      <View paddingHorizontal={24} paddingTop={48} paddingBottom={24}>
        <Text color="$white" fontSize="$2xl" fontWeight="$bold">
          Guia de Treino
        </Text>
      </View>

      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          paddingHorizontal: 24,
          gap: 32,
        }}
        showsVerticalScrollIndicator={false}
      >
        <MotiView
          from={{ opacity: 0, translateY: 15 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.6 }}
          style={{ width: "100%" }}
        >
          <GridSection />
        </MotiView>
      </ScrollView>
    </View>
  );
}
