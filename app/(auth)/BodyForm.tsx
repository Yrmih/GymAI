// app/(auth)/BodyForm.tsx
import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator } from "react-native";
import tw from "twin.macro";
import { useDispatch } from "react-redux";
import { updateUserBody } from "@/src/redux/slices/usuarioSlice";
import { useRouter } from "expo-router";

// Dropdown simples usando Picker do React Native
import { Picker } from "@react-native-picker/picker";

export default function BodyForm() {
  const dispatch = useDispatch();
  const router = useRouter();

  const [altura, setAltura] = useState("");
  const [peso, setPeso] = useState("");
  const [biotipo, setBiotipo] = useState("Ectomorfo");
  const [tempoTreino, setTempoTreino] = useState("0-6 meses");
  const [loading, setLoading] = useState(false);

  const handleContinue = () => {
    setLoading(true);

    // Salva no Redux
    dispatch(updateUserBody({
      altura: Number(altura),
      peso: Number(peso),
      biotipo,
      tempoTreino
    }));

    // Simulação de delay
    setTimeout(() => {
      setLoading(false);
      router.replace("/(main)/index"); // vai para Home
    }, 1000);
  };

  return (
    <View style={tw`flex-1 justify-center items-center bg-[#0f0f0f] px-6`}>
      <TextInput
        placeholder="Altura (cm)"
        placeholderTextColor="#f8f8f8"
        value={altura}
        onChangeText={setAltura}
        keyboardType="numeric"
        style={tw`w-full mb-4 p-4 rounded bg-[#202020] text-[#f8f8f8]`}
      />

      <TextInput
        placeholder="Peso (kg)"
        placeholderTextColor="#f8f8f8"
        value={peso}
        onChangeText={setPeso}
        keyboardType="numeric"
        style={tw`w-full mb-4 p-4 rounded bg-[#202020] text-[#f8f8f8]`}
      />

      <View style={tw`w-full mb-4 bg-[#202020] rounded`}>
        <Picker
          selectedValue={biotipo}
          onValueChange={(itemValue) => setBiotipo(itemValue)}
          style={{ color: "#f8f8f8" }}
        >
          <Picker.Item label="Ectomorfo" value="Ectomorfo" />
          <Picker.Item label="Mesomorfo" value="Mesomorfo" />
          <Picker.Item label="Endomorfo" value="Endomorfo" />
        </Picker>
      </View>

      <View style={tw`w-full mb-6 bg-[#202020] rounded`}>
        <Picker
          selectedValue={tempoTreino}
          onValueChange={(itemValue) => setTempoTreino(itemValue)}
          style={{ color: "#f8f8f8" }}
        >
          <Picker.Item label="0-6 meses" value="0-6 meses" />
          <Picker.Item label="6-12 meses" value="6-12 meses" />
          <Picker.Item label="1-2 anos" value="1-2 anos" />
          <Picker.Item label="+2 anos" value="+2 anos" />
        </Picker>
      </View>

      <TouchableOpacity
        onPress={handleContinue}
        style={tw`w-full p-4 rounded bg-[#5dd62c] items-center justify-center`}
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator color="#0f0f0f" />
        ) : (
          <Text style={tw`text-black font-bold`}>Continuar</Text>
        )}
      </TouchableOpacity>
    </View>
  );
}
