import { useSelector } from "react-redux";
import { RootState } from "@/src/data/redux/store";
import { ScrollView, View } from "react-native";
import AchievementBadge from "./AchievementBadge";
import data from "@/src/data/achievements/achievements.json";

export default function AchievementsGrid() {
  const earned = useSelector((state: RootState) => state.achievements.earned);

  const all = [...data.unique, ...data.monthly];

  return (
    <ScrollView>
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
          paddingTop: 20
        }}
      >
        {all.map((item) => (
          <AchievementBadge
            key={item.id}
            item={item}
            earned={earned.includes(item.id)}
          />
        ))}
      </View>
    </ScrollView>
  );
}
