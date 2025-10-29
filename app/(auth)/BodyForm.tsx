import React, { useState } from "react";
import { ScrollView } from "react-native";
import tw from "twin.macro";
import { useDispatch } from "react-redux";
import { updateUserBody } from "@/src/redux/usuarioSlice";
import { useRouter } from "expo-router";

// Gluestack UI
import { View, Text, Input, Button, Select, Spinner } from "@gluestack-ui/themed";

export default function BodyForm() {
  const dispatch = useDispatch();
  const router = useRouter();

  const [altura, setAltura] = useState("");
  const [peso, setPeso] = useState("");
  const [biotipo, setBiotipo] = useState("Ectomorfo");
  const [tempoTreino, setTempoTreino] = useState("0-6 meses");
  const [loading, setLoading] = useState(false);

  const handleContinue = () => {
    if (!altura || !peso) {
      alert("Por favor, preencha altura e peso.");
      return;
    }

    setLoading(true);

    // Salva no Redux
    dispatch(updateUserBody({
      altura: Number(altura),
      peso: Number(peso),
      biotipo,
      tempoTreino
    }));

    // Simula delay e vai para Home
    setTimeout(() => {
      setLoading(false);
      router.replace("/(main)/index");
    }, 1000);
  };

  return (
    <ScrollView style={tw`flex-1 bg-[#0f0f0f] px-6 pt-10`}>
      <View style={tw`space-y-4`}>

        {/* Altura */}
        <Input
          placeholder="Altura (cm)"
          value={altura}
          onChangeText={setAltura}
          keyboardType="numeric"
          bg="#202020"
          borderRadius={12}
          px={4}
          py={3}
          _input={{ color: "#F8F8F8" }}
          placeholderTextColor="#F8F8F8"
        />

        {/* Peso */}
        <Input
          placeholder="Peso (kg)"
          value={peso}
          onChangeText={setPeso}
          keyboardType="numeric"
          bg="#202020"
          borderRadius={12}
          px={4}
          py={3}
          _input={{ color: "#F8F8F8" }}
          placeholderTextColor="#F8F8F8"
        />

        {/* Biotipo */}
        <Select
          selectedValue={biotipo}
          onValueChange={setBiotipo}
          bg="#202020"
          borderRadius={12}
          px={4}
          py={3}
          _text={{ color: "#F8F8F8" }}
        >
          <Select.Item label="Ectomorfo" value="Ectomorfo" />
          <Select.Item label="Mesomorfo" value="Mesomorfo" />
          <Select.Item label="Endomorfo" value="Endomorfo" />
        </Select>

        {/* Tempo de treino */}
        <Select
          selectedValue={tempoTreino}
          onValueChange={setTempoTreino}
          bg="#202020"
          borderRadius={12}
          px={4}
          py={3}
          _text={{ color: "#F8F8F8" }}
        >
          <Select.Item label="0-6 meses" value="0-6 meses" />
          <Select.Item label="6-12 meses" value="6-12 meses" />
          <Select.Item label="1-2 anos" value="1-2 anos" />
          <Select.Item label="+2 anos" value="+2 anos" />
        </Select>

        {/* Botão Continuar */}
        <Button
          onPress={handleContinue}
          isLoading={loading}
          bg="#5DD26C"
          borderRadius={30}
          py={4}
          _text={{ color: "#0F0F0F", fontWeight: "bold", fontSize: 18 }}
          _loading={{ color: "#0F0F0F" }}
        >
          Continuar
        </Button>

      </View>
    </ScrollView>
  );
}
