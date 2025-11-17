import React from "react";
import { ScrollView, Dimensions } from "react-native";
import { View, Text, Button, ButtonText } from "@gluestack-ui/themed";
import { MotiView } from "moti";
import { useSelector } from "react-redux";
import { RootState } from "@/src/data/redux/store";
import { LineChart } from "react-native-chart-kit";

import { progressoMock } from "@/src/mock/progressMock";
import { useRouter } from "expo-router";

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
            Progresso de {usuario.nome || "Treinador"}
          </Text>
          <Text style={{ color: "#B5B5B5", fontSize: 14 }}>
            Acompanhe seu desempenho e evolução
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
        alignItems="center"
        marginBottom={30}
      >
        {[
          { label: "Treinos Concluídos", value: "15" },
          { label: "Peso Médio", value: "85 kg" },
          { label: "Consistência", value: "90%" },
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

      {/* Gráfico de evolução */}
      <Text
        style={{
          color: "#fff",
          fontSize: 18,
          fontWeight: "bold",
          marginBottom: 12,
        }}
      >
        Evolução de Peso
      </Text>

      <LineChart
        data={{
          labels: ["JAN", "FEV", "MAR", "ABR", "MAI", "JUN"],
          datasets: [
            {
              data: [70, 72, 74, 78, 82, 85],
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

      {/* Histórico de treinos */}
      <Text
        style={{
          color: "#fff",
          fontSize: 18,
          fontWeight: "bold",
          marginBottom: 16,
        }}
      >
        Histórico de Treino
      </Text>

      {progressoMock.map((item, index) => (
        <MotiView
          key={item.id}
          from={{ opacity: 0, translateY: 20 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ delay: index * 100, type: "timing" }}
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
                marginBottom: 6,
              }}
            >
              {item.exercise}
            </Text>

            <Text
              style={{
                color: "#EAEAEA",
                fontSize: 14,
                marginBottom: 4,
              }}
            >
              {item.weight
                ? `${item.weight} - ${item.reps} reps x ${item.series} séries`
                : item.duration}
            </Text>

            <Text style={{ color: "#888", fontSize: 12 }}>{item.date}</Text>
          </View>
        </MotiView>
      ))}
    </ScrollView>
  );
}
