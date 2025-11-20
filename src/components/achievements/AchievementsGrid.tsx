import { useSelector } from "react-redux";
import { RootState } from "@/src/data/redux/store";
import { View } from "react-native";
import AchievementBadge from "./AchievementBadge";
import data from "@/src/data/achievements/achievements.json";

interface AchievementsGridProps {
  limit?: number;
}

export default function AchievementsGrid({ limit }: AchievementsGridProps) {
  const earned = useSelector((state: RootState) => state.achievements.earned);

  const all = [...data.unique, ...data.monthly];

  const items = limit ? all.slice(0, limit) : all;

  return (
    <View
      style={{
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        paddingBottom: 10
      }}
    >
      {items.map((item) => (
        <AchievementBadge
          key={item.id}
          item={item}
          earned={earned.includes(item.id)}
        />
      ))}
    </View>
  );
}
