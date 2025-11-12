import React from "react";
import { Image, Text } from "react-native";
import { View, Button } from "@gluestack-ui/themed";
import { MotiView } from "moti";
import { ExerciseCardProps } from "@/src/types/type-files";

export default function ExerciseCard({
  name,
  muscle,
  image,
  onPress,
  index = 0,
}: ExerciseCardProps) {
  return (
    <MotiView
      from={{ opacity: 0, translateY: 20 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ delay: index * 0.1, type: "timing", duration: 400 }}
    >
      <Button
        onPress={onPress}
        bg="#151515"
        borderRadius={14}
        py="$4"
        px="$4"
        flexDirection="row"
        alignItems="center"
        justifyContent="flex-start"
        style={{
          shadowColor: "#5DD26C",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.25,
          shadowRadius: 8,
        }}
      >
        <Image
          source={{ uri: image }}
          style={{
            width: 70,
            height: 70,
            borderRadius: 14,
            marginRight: 16,
            borderWidth: 2,
            borderColor: "#5DD26C",
          }}
        />

        <View style={{ flex: 1 }}>
          <Text
            style={{
              color: "#FFFFFF",
              fontSize: 17,
              fontWeight: "700",
              marginBottom: 4,
            }}
            numberOfLines={1}
          >
            {name}
          </Text>
          <Text
            style={{
              color: "#5DD26C",
              fontSize: 15,
              fontWeight: "600",
            }}
          >
            {muscle}
          </Text>
        </View>
      </Button>
    </MotiView>
  );
}
