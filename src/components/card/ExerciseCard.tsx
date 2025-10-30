import React from "react";
import { Image, Text } from "react-native";
import { View, Button } from "@gluestack-ui/themed";
import { MotiView } from "moti";
import { ExerciseCardProps } from "@/src/types/type-files";

export default function ExerciseCard({ name, muscle, image, onPress, index = 0 }: ExerciseCardProps) {
  return (
    <MotiView
      from={{ opacity: 0, translateY: 20 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ delay: index * 0.1, type: "timing", duration: 400 }}
    >
      <Button
        onPress={onPress}
        bg="$gray800"
        borderRadius="lg"
        py="$3"
        px="$4"
        mb="$4"
        flexDirection="row"
        alignItems="center"
        style={{ shadowColor: "#5DD26C", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.2, shadowRadius: 6 }}
      >
        <Image
          source={{ uri: image }}
          style={{ width: 64, height: 64, borderRadius: 12, marginRight: 12 }}
        />
        <View flex={1}>
          <Text style={{ color: "#F8F8F8", fontSize: 16, fontWeight: "bold" }}>{name}</Text>
          <Text style={{ color: "$green500", fontSize: 14 }}>{muscle}</Text>
        </View>
      </Button>
    </MotiView>
  );
}
