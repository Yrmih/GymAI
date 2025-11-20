import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MotiView } from "moti";
import useXP from "src/hooks/useXP";

export default function XPBar() {
  const { level, currentXP, xpToNext, progress } = useXP();
  const percent = Math.round(progress * 100);

  return (
    <View style={styles.card}>
      <View style={styles.row}>
        <Text style={styles.level}>Nível {level}</Text>
        <Text style={styles.xpText}>
          {currentXP} / {xpToNext} XP
        </Text>
      </View>

      <View style={styles.barBackground}>
        <MotiView
          from={{ width: "0%" }}
          animate={{ width: `${percent}%` }}
          transition={{ type: "timing", duration: 700 }}
          style={[styles.barFill, { width: `${percent}%` }]}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#1A1A1A",
    padding: 12,
    borderRadius: 12,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  level: {
    color: "#F8F8F8",
    fontWeight: "700",
  },
  xpText: {
    color: "#A1A1A1",
    fontSize: 12,
  },
  barBackground: {
    width: "100%",
    height: 10,
    backgroundColor: "#333",
    borderRadius: 10,
    overflow: "hidden",
  },
  barFill: {
    height: "100%",
    backgroundColor: "#5DD26C",
  },
});
