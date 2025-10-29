import React from "react";
import { ScrollView, Text, View } from "react-native";
import tw from "twin.macro";
import { MotiView } from "moti";
import { useSelector } from "react-redux";
import { RootState } from "@/src/redux/store";

// Gluestack UI
import { Card } from "@gluestack-ui/themed";

// Importa mock
import { progressoMock } from "@/src/mock/progressMock";

export default function Progress() {
  const usuario = useSelector((state: RootState) => state.usuario);

  return (
    <ScrollView style={tw`flex-1 bg-[#0f0f0f] px-6 pt-10`}>
      <Text style={tw`text-[#f8f8f8] text-2xl font-bold mb-6`}>
        Progresso de {usuario.nome || "Treinador"}
      </Text>

      <View style={tw`space-y-4`}>
        {progressoMock.map((item, index) => (
          <MotiView
            key={item.id}
            from={{ opacity: 0, translateY: 20 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ delay: index * 100, type: "timing" }}
          >
            <Card style={tw`bg-[#202020] p-5 rounded-2xl border border-[#337418]`}>
              <Text style={tw`text-[#5dd26c] font-semibold text-lg mb-2`}>
                {item.exercise}
              </Text>
              <Text style={tw`text-[#f8f8f8] text-xl font-bold mb-1`}>
                {item.exercise}
              </Text>
              <Text style={tw`text-[#f8f8f8] text-sm`}>{item.date}</Text>
            </Card>
          </MotiView>
        ))}
      </View>
    </ScrollView>
  );
}
