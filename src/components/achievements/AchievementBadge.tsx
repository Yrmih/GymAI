import { View, Text } from "react-native";

interface AchievementBadgeProps {
  item: {
    id: string;
    name: string;
    description: string;
    icon: string;
  };
  earned: boolean;
}

export default function AchievementBadge({ item, earned }: AchievementBadgeProps) {
  return (
    <View
      style={{
        width: 90,
        height: 90,
        margin: 10,
        borderRadius: 12,
        backgroundColor: earned ? "#2ecc71" : "#333",
        alignItems: "center",
        justifyContent: "center",
        padding: 8,
      }}
    >
      <Text style={{ fontSize: 28 }}>{item.icon}</Text>

      <Text style={{ color: "white", fontSize: 12, textAlign: "center" }}>
        {item.name}
      </Text>
    </View>
  );
}
