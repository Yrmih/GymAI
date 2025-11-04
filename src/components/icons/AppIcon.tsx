import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { View } from "react-native";

interface AppIconProps {
  name: keyof typeof Ionicons.glyphMap;
  size?: number;
  color?: string;
  shadow?: boolean;
}

export default function AppIcon({
  name,
  size = 28,
  color = "#5DD26C",
  shadow = true,
}: AppIconProps) {
  return (
    <View
      style={{
        shadowColor: color,
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: shadow ? 0.4 : 0,
        shadowRadius: 6,
        elevation: shadow ? 5 : 0,
      }}
    >
      <Ionicons name={name} size={size} color={color} />
    </View>
  );
}
