import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Svg, { Circle } from "react-native-svg";
import { MotiView, MotiText } from "moti";

interface DashboardCircleProps {
  progress?: number; // 0 a 100
}

export default function DashboardCircle(progress = 72): DashboardCircleProps {
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

      <View>
        <MotiText
          from={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 300, duration: 500 }}
          
        >
          {progress}%
        </MotiText>
        <Text>do treino</Text>
      </View>
    </View>
  );
}
