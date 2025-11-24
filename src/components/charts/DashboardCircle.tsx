import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Svg, { Circle } from "react-native-svg";
import { MotiText } from "moti";
import { useSelector } from "react-redux";
import { RootState } from "@/src/data/redux/store";


export default function DashboardCircle() {
  const { weeklySessions, weeklyGoal } = useSelector(
    (state: RootState) => state.frequency
  );

  const progressPercentage = Math.min(
    (weeklySessions / weeklyGoal) * 100,
    100
  );

  const size = 180;
  const center = size / 2;
  const radius = 70;
  const strokeWidth = 10;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset =
    circumference - (circumference * progressPercentage) / 100;

  return (
    <View style={styles.container}>
      <Svg width={size} height={size}>
        <Circle
          cx={center}
          cy={center}
          r={radius}
          stroke="#1C1C1C"
          strokeWidth={strokeWidth}
          fill="none"
        />
        <Circle
          cx={center}
          cy={center}
          r={radius}
          stroke="#5DD26C"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          fill="none"
        />
      </Svg>

      <View style={styles.centerText}>
        <MotiText
          from={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 300, duration: 500 }}
          style={styles.progressText}
        >
          {Math.round(progressPercentage)}%
        </MotiText>
        <Text style={styles.label}>do treino</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 180,
    height: 180,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
  },
  centerText: {
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
  },
  progressText: {
    color: "#5DD26C",
    fontSize: 28,
    fontWeight: "bold",
  },
  label: {
    color: "#F8F8F8",
    fontSize: 14,
    marginTop: 2,
  },
});
