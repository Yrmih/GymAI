import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Svg, { Circle } from "react-native-svg";
import { MotiText } from "moti";

interface DashboardCircleProps {
  progress?: number;
  radius?: number;
  size?: number;
  strokeColor?: string;
  backgroundColor?: string;
  glow?: boolean;
}

export default function DashboardCircle({
  progress = 72,
}: DashboardCircleProps) {
  const size = 180; // Tamanho total do componente
  const center = size / 2; // Centro (90)
  const radius = 70; // Raio
  const strokeWidth = 10;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (circumference * progress) / 100;

  return (
    // Aplicamos o estilo do container para definir o tamanho
    <View style={styles.container}>
      {/* 👇 A CORREÇÃO ESTÁ AQUI 👇
        Adicionamos width e height ao Svg 
      */}
      <Svg width={size} height={size}>
        {/* Círculo de fundo */}
        <Circle
          cx={center}
          cy={center}
          r={radius}
          stroke="#1C1C1C"
          strokeWidth={strokeWidth}
          fill="none"
        />
        {/* Círculo de progresso */}
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

      {/* Texto centralizado */}
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
    width: 180, // Define a largura do container
    height: 180, // Define a altura do container
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
  },
  centerText: {
    position: "absolute", // Põe o texto sobre o Svg
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