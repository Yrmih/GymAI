import React from "react";
import { ScrollView, Text } from "react-native";
import { View, Card } from "@gluestack-ui/themed";
import { MotiView } from "moti";
import { useSelector } from "react-redux";
import { RootState } from "@/src/redux/store";

import { progressoMock } from "@/src/mock/progressMock";

export default function Progress() {
  const usuario = useSelector((state: RootState) => state.usuario);

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: "$background" }}
      contentContainerStyle={{ paddingHorizontal: 24, paddingTop: 40, paddingBottom: 24 }}
    >
      <Text style={{ color: "$text", fontSize: 24, fontWeight: "bold", marginBottom: 24 }}>
        Progresso de {usuario.nome || "Treinador"}
      </Text>

      <View style={{ gap: 16 }}>
        {progressoMock.map((item, index) => (
          <MotiView
            key={item.id}
            from={{ opacity: 0, translateY: 20 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ delay: index * 100, type: "timing" }}
          >
            <Card
              style={{
                backgroundColor: "$gray800",
                padding: 20,
                borderRadius: "$2xl",
                borderWidth: 1,
                borderColor: "$green700",
              }}
            >
              <Text style={{ color: "$green500", fontSize: 18, fontWeight: "600", marginBottom: 4 }}>
                {item.exercise}
              </Text>

              {/* Mostra detalhes dependendo do tipo */}
              {item.type === "Força" || item.type === "Resistência" ? (
                <Text style={{ color: "$text", fontSize: 16, fontWeight: "bold", marginBottom: 4 }}>
                  {item.weight ? `${item.weight} - ` : ""}{item.reps} reps x {item.series} séries
                </Text>
              ) : item.type === "Cardio" ? (
                <Text style={{ color: "$text", fontSize: 16, fontWeight: "bold", marginBottom: 4 }}>
                  {item.duration}
                </Text>
              ) : null}

              <Text style={{ color: "$text", fontSize: 14 }}>{item.date}</Text>
            </Card>
          </MotiView>
        ))}
      </View>
    </ScrollView>
  );
}
