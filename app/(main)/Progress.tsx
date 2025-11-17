import React from "react";
import { ScrollView, Dimensions } from "react-native";
import { View, Text, Button, ButtonText } from "@gluestack-ui/themed";
import { MotiView } from "moti";
import { useSelector } from "react-redux";
import { RootState } from "@/src/data/redux/store";
import { LineChart } from "react-native-chart-kit";
import { useRouter } from "expo-router";

import {
  progressSummaryMock,
  weeklyFrequencyMock,
  machinesCollectionMock,
  recentActivitiesMock,
} from "@/src/data/mock/progressMock";

export default function Progress() {
  const usuario = useSelector((state: RootState) => state.usuario);
  const router = useRouter();
  const screenWidth = Dimensions.get("window").width;

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: "#0F0F0F" }}
      contentContainerStyle={{ padding: 24, paddingBottom: 60 }}
    >
      {/* Cabeçalho */}
      <View
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        marginBottom={24}
      >
        <View>
          <Text
            style={{
              color: "#fff",
              fontSize: 24,
              fontWeight: "bold",
              marginBottom: 4,
            }}
          >
            Progresso de {usuario.nome || "Atleta"}
          </Text>

          <Text style={{ color: "#B5B5B5", fontSize: 14 }}>
            Sua jornada até agora
          </Text>
        </View>

        <Button
          backgroundColor="#5DD26C"
          borderRadius={12}
          paddingVertical={10}
          paddingHorizontal={14}
          onPress={() => router.back()}
        >
          <ButtonText color="#0F0F0F" fontWeight="$bold">
            Voltar
          </ButtonText>
        </Button>
      </View>

      {/* Indicadores principais */}
      <View
        flexDirection="row"
        justifyContent="space-between"
        marginBottom={30}
      >
        {[
          { label: "Treinos Concluídos", value: progressSummaryMock.treinosConcluidos },
          { label: "Aparelhos Usados", value: progressSummaryMock.aparelhosUnicos },
          { label: "Consistência", value: `${progressSummaryMock.consistencia}%` },
        ].map((item, i) => (
          <MotiView
            key={i}
            from={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 200, type: "timing" }}
          >
            <View alignItems="center">
              <View
                style={{
                  width: 90,
                  height: 90,
                  borderRadius: 45,
                  borderWidth: 3,
                  borderColor: "#5DD26C",
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: 8,
                }}
              >
                <Text
                  style={{ color: "#fff", fontSize: 18, fontWeight: "bold" }}
                >
                  {item.value}
                </Text>
              </View>

              <Text
                style={{
                  color: "#B5B5B5",
                  fontSize: 12,
                  textAlign: "center",
                  width: 80,
                }}
              >
                {item.label}
              </Text>
            </View>
          </MotiView>
        ))}
      </View>

      {/* Gráfico de evolução semanal */}
      <Text
        style={{
          color: "#fff",
          fontSize: 18,
          fontWeight: "bold",
          marginBottom: 12,
        }}
      >
        Evolução Semanal
      </Text>

      <LineChart
        data={{
          labels: weeklyFrequencyMock.map((d) => d.label),
          datasets: [
            {
              data: weeklyFrequencyMock.map((d) => d.value),
            },
          ],
        }}
        width={screenWidth - 48}
        height={180}
        chartConfig={{
          backgroundColor: "#0F0F0F",
          backgroundGradientFrom: "#0F0F0F",
          backgroundGradientTo: "#0F0F0F",
          color: (opacity = 1) => `rgba(93, 210, 108, ${opacity})`,
          labelColor: () => "#B5B5B5",
          propsForDots: {
            r: "4",
            strokeWidth: "2",
            stroke: "#5DD26C",
          },
        }}
        bezier
        style={{
          borderRadius: 12,
          marginBottom: 30,
        }}
      />

      {/* Coleção de Equipamentos */}
      <Text
        style={{
          color: "#fff",
          fontSize: 18,
          fontWeight: "bold",
          marginBottom: 16,
        }}
      >
        Coleção de Equipamentos
      </Text>

      <View
        flexDirection="row"
        flexWrap="wrap"
        justifyContent="space-between"
        marginBottom={32}
      >
        {machinesCollectionMock.map((machine, index) => (
          <MotiView
            key={machine.id}
            from={{ opacity: 0, translateY: 20 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ delay: index * 120 }}
          >
            <View
              style={{
                width: (screenWidth - 72) / 2,
                backgroundColor: "#1A1A1A",
                padding: 14,
                borderRadius: 14,
                marginBottom: 12,
                borderWidth: 1,
                borderColor: machine.used ? "#5DD26C" : "#333",
              }}
            >
              <Text
                style={{
                  color: machine.used ? "#5DD26C" : "#777",
                  fontSize: 16,
                  fontWeight: "600",
                  marginBottom: 4,
                }}
              >
                {machine.name}
              </Text>

              {machine.used && (
                <Text style={{ color: "#999", fontSize: 12 }}>
                  Último uso: {machine.lastUsed}
                </Text>
              )}
            </View>
          </MotiView>
        ))}
      </View>

      {/* Atividades Recentes */}
      <Text
        style={{
          color: "#fff",
          fontSize: 18,
          fontWeight: "bold",
          marginBottom: 16,
        }}
      >
        Atividades Recentes
      </Text>

      {recentActivitiesMock.map((item, index) => (
        <MotiView
          key={item.id}
          from={{ opacity: 0, translateY: 15 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ delay: index * 100 }}
        >
          <View
            style={{
              backgroundColor: "#1A1A1A",
              borderRadius: 16,
              padding: 16,
              marginBottom: 12,
              borderWidth: 1,
              borderColor: "#222",
            }}
          >
            <Text
              style={{
                color: "#5DD26C",
                fontSize: 16,
                fontWeight: "600",
                marginBottom: 4,
              }}
            >
              {item.machine}
            </Text>

            <Text style={{ color: "#EAEAEA", fontSize: 14 }}>
              {item.status}
            </Text>

            <Text style={{ color: "#888", fontSize: 12, marginTop: 4 }}>
              {item.date}
            </Text>
          </View>
        </MotiView>
      ))}
    </ScrollView>
  );
}
