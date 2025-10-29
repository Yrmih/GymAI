import React from "react";
import { TouchableOpacity, Text, Image } from "react-native";
import tw from "twin.macro";
import { View } from "@gluestack-ui/themed";
import { MotiView } from "moti";
import { ExerciseCardProps } from "@/src/types/type-files";

export default function ExerciseCard({ name, muscle, image, onPress, index = 0 }: ExerciseCardProps) {
  return (
    <MotiView
      from={{ opacity: 0, translateY: 20 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ delay: index * 100, type: "timing", duration: 400 }}
    >
      <TouchableOpacity
        onPress={onPress}
        style={tw`flex-row bg-[#202020] p-4 rounded-lg mb-4 items-center`}
      >
        <Image
          source={{ uri: image }}
          style={tw`w-16 h-16 rounded-lg mr-4`}
        />
        <View style={tw`flex-1`}>
          <Text style={tw`text-[#f8f8f8] text-base font-bold`}>{name}</Text>
          <Text style={tw`text-[#5dd62c] text-sm`}>{muscle}</Text>
        </View>
      </TouchableOpacity>
    </MotiView>
  );
}
