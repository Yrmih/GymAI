import React, { useState } from "react";
import { ScrollView } from "react-native";
import { useDispatch } from "react-redux";
import { updateUserBody } from "@/src/redux/usuarioSlice";
import { useRouter } from "expo-router";
import { MotiView } from "moti";

// Gluestack Components
import {
  View,
  Input,
  InputField,
  Button,
  ButtonText,
  ButtonSpinner,
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectIcon,
  SelectPortal,
  SelectBackdrop,
} from "@/src/ui"; // ⬅️ ajusta o caminho conforme tua estrutura (geralmente "@/components/ui/...")

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

    dispatch(
      updateUserBody({
        altura: Number(altura),
        peso: Number(peso),
        biotipo,
        tempoTreino,
      })
    );

    setTimeout(() => {
      setLoading(false);
      router.replace("/(main)/index");
    }, 1000);
  };

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: "#0f0f0f",
        paddingHorizontal: 24,
        paddingTop: 40,
      }}
      contentContainerStyle={{ paddingBottom: 60 }}
    >
      <MotiView
        from={{ opacity: 0, translateY: 20 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.6 }}
        style={{ gap: 16 }}
      >
        {/* Altura */}
        <Input variant="outline" size="md" className="bg-[#202020] rounded-xl px-4 py-3">
          <InputField
            value={altura}
            onChangeText={setAltura}
            keyboardType="numeric"
            placeholder="Altura (cm)"
            placeholderTextColor="#888888"
          />
        </Input>

        {/* Peso */}
        <Input variant="outline" size="md" className="bg-[#202020] rounded-xl px-4 py-3">
          <InputField
            value={peso}
            onChangeText={setPeso}
            keyboardType="numeric"
            placeholder="Peso (kg)"
            placeholderTextColor="#888888"
          />
        </Input>

        {/* Biotipo */}
        <Select selectedValue={biotipo} onValueChange={setBiotipo}>
          <SelectTrigger className="bg-[#202020] rounded-xl px-4 py-3">
            <SelectIcon />
          </SelectTrigger>
          <SelectPortal>
            <SelectBackdrop />
            <SelectContent>
              <SelectItem label="Ectomorfo" value="Ectomorfo" />
              <SelectItem label="Mesomorfo" value="Mesomorfo" />
              <SelectItem label="Endomorfo" value="Endomorfo" />
            </SelectContent>
          </SelectPortal>
        </Select>

        {/* Tempo de treino */}
        <Select selectedValue={tempoTreino} onValueChange={setTempoTreino}>
          <SelectTrigger className="bg-[#202020] rounded-xl px-4 py-3">
            <SelectIcon />
          </SelectTrigger>
          <SelectPortal>
            <SelectBackdrop />
            <SelectContent>
              <SelectItem label="0-6 meses" value="0-6 meses" />
              <SelectItem label="6-12 meses" value="6-12 meses" />
              <SelectItem label="1-2 anos" value="1-2 anos" />
              <SelectItem label="+2 anos" value="+2 anos" />
            </SelectContent>
          </SelectPortal>
        </Select>

        {/* Botão Continuar */}
        <MotiView
          from={{ opacity: 0, translateY: 10 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Button
            variant="solid"
            action="primary"
            size="md"
            className="bg-[#5DD26C] rounded-full py-4"
            onPress={handleContinue}
            disabled={loading}
          >
            {loading && <ButtonSpinner color="#0F0F0F" />}
            <ButtonText className="text-[#0F0F0F] font-bold text-lg ml-2">
              {loading ? "Carregando..." : "Continuar"}
            </ButtonText>
          </Button>
        </MotiView>
      </MotiView>
    </ScrollView>
  );
}
