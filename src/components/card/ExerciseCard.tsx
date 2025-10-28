import React from "react";
import { TouchableOpacity, Text, View, Image } from "react-native";
import tw from "twin.macro";

interface ExerciseCardProps {
  name: string;
  muscle: string;
  image: string;
  onPress?: () => void;
}

export default function ExerciseCard({ name, muscle, image, onPress }: ExerciseCardProps) {
  return (
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
  );
}
