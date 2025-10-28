import React from "react";
import { TouchableOpacity, Text } from "react-native";
import tw from "twin.macro";

interface HomeCardProps {
  title: string;
  description: string;
  onPress: () => void;
}

export default function HomeCard({ title, description, onPress }: HomeCardProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={tw`bg-[#202020] p-6 rounded-lg mb-4 w-full shadow-lg`}
    >
      <Text style={tw`text-[#5dd62c] text-lg font-bold mb-2`}>{title}</Text>
      <Text style={tw`text-[#f8f8f8] text-sm`}>{description}</Text>
    </TouchableOpacity>
  );
}
