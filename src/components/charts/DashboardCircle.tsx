import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Svg, { Circle } from "react-native-svg";
import { MotiView, MotiText } from "moti";

interface DashboardCircleProps {
  progress?: number;
}

export default function DashboardCircle({progress = 72}:DashboardCircleProps )  {
  const radius = 70;
  const strokeWidth = 10;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (circumference * progress) / 100;

  return (
    <View>
      <MotiView
        from={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", duration: 800 }}
      ></MotiView>
      <Svg>
        <Circle
          cx="90"
          cy="90"
          r={radius}
          stroke="#1C1C1C"
          strokeWidth={strokeWidth}
          fill="none"
        />
        <Circle
          cx="90"
          cy="90"
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
          {progress}%
        </MotiText>
        <Text style={styles.label}>do treino</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
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
