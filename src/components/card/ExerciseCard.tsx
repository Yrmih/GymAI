import React from "react";
import { Image, Text, Pressable } from "react-native";
import { View } from "@gluestack-ui/themed";
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
      <Pressable
        onPress={onPress}
        style={{
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "#151515",
          borderRadius: 16,
          paddingVertical: 14,
          paddingHorizontal: 16,
          marginBottom: 12,
          shadowColor: "#5DD26C",
          shadowOffset: { width: 0, height: 3 },
          shadowOpacity: 0.25,
          shadowRadius: 8,
          elevation: 5, // android
        }}
      >
        <Image
          source={{ uri: image }}
          style={{
            width: 80,
            height: 80,
            borderRadius: 16,
            marginRight: 16,
            borderWidth: 2,
            borderColor: "#5DD26C",
          }}
          resizeMode="cover"
        />

        <View style={{ flex: 1 }}>
          <Text
            style={{
              color: "#FFFFFF",
              fontSize: 18,
              fontWeight: "700",
              marginBottom: 6,
              flexShrink: 1,
              flexWrap: "wrap",
            }}
          >
            {name}
          </Text>

          <Text
            style={{
              color: "#5DD26C",
              fontSize: 16,
              fontWeight: "600",
              flexShrink: 1,
              flexWrap: "wrap",
            }}
          >
            {muscle}
          </Text>
        </View>
      </Pressable>
    </MotiView>
  );
}
