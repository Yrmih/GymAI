import { Ionicons } from "@expo/vector-icons";

export type CardItem = {
  title: string;
  description: string;
  icon: keyof typeof Ionicons.glyphMap;
  route: string;
};
