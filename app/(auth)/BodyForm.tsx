import React, { useState } from "react";
import { ScrollView, View, Text } from "react-native";
import { useDispatch } from "react-redux";
import { updateUserBody } from "@/src/redux/usuarioSlice";
import { useRouter } from "expo-router";
import { MotiView } from "moti";
import {
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
} from "@gluestack-ui/themed";

export default function BodyForm() {
  const dispatch = useDispatch();
  const router = useRouter();

  const [altura, setAltura] = useState("");
  const [peso, setPeso] = useState("");
  const [biotipo, setBiotipo] = useState("Ectomorfo");
  const [tempoTreino, setTempoTreino] = useState("0-6 meses");
  const [frequenciaSemanal, setFrequenciaSemanal] = useState("3x por semana");
  const [gruposPrioritarios, setGruposPrioritarios] = useState("");
  const [lesoes, setLesoes] = useState("");
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
        frequenciaSemanal,
        gruposPrioritarios,
        lesoes,
      })
    );

    setTimeout(() => {
      setLoading(false);
      router.replace("/(main)/index");
    }, 1000);
  };

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: "#0F0F0F" }}
      contentContainerStyle={{
        paddingHorizontal: 24,
        paddingTop: 70,
        paddingBottom: 100,
        gap: 32,
      }}
    >
      <MotiView
        from={{ opacity: 0, translateY: 25 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.6 }}
        style={{ gap: 32 }}
      >
        {/* Cabeçalho */}
        <View style={{ alignItems: "center", marginBottom: 8 }}>
          <Text
            style={{
              color: "#5DD26C",
              fontSize: 24,
              fontWeight: "bold",
            }}
          >
            Dados Corporais
          </Text>
          <Text
            style={{
              color: "#A1A1A1",
              fontSize: 14,
              marginTop: 6,
              textAlign: "center",
              maxWidth: 300,
            }}
          >
            Ajude a GymAI a montar treinos sob medida para você 💪
          </Text>
        </View>

        {/* ===== DADOS FÍSICOS ===== */}
        <View style={{ gap: 22 }}>
          <Input backgroundColor="#202020" borderRadius={12} height={56} px={16}>
            <InputField
              value={altura}
              onChangeText={setAltura}
              keyboardType="numeric"
              placeholder="Altura (cm)"
              placeholderTextColor="#A1A1A1"
              color="#F8F8F8"
            />
          </Input>

          <Input backgroundColor="#202020" borderRadius={12} height={56} px={16}>
            <InputField
              value={peso}
              onChangeText={setPeso}
              keyboardType="numeric"
              placeholder="Peso (kg)"
              placeholderTextColor="#A1A1A1"
              color="#F8F8F8"
            />
          </Input>

          <View style={{ gap: 8 }}>
            <Text style={{ color: "#F8F8F8", fontSize: 14 }}>Biotipo corporal</Text>
            <Select selectedValue={biotipo} onValueChange={setBiotipo}>
              <SelectTrigger backgroundColor="#202020" borderRadius={12} height={56} px={16}>
                <Text style={{ color: "#F8F8F8" }}>{biotipo}</Text>
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
          </View>

          <View style={{ gap: 8 }}>
            <Text style={{ color: "#F8F8F8", fontSize: 14 }}>Tempo de treino</Text>
            <Select selectedValue={tempoTreino} onValueChange={setTempoTreino}>
              <SelectTrigger backgroundColor="#202020" borderRadius={12} height={56} px={16}>
                <Text style={{ color: "#F8F8F8" }}>{tempoTreino}</Text>
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
          </View>
        </View>

        {/* ===== DADOS DE TREINO ===== */}
        <View style={{ gap: 22 }}>
          <Text
            style={{
              color: "#F8F8F8",
              fontSize: 18,
              fontWeight: "bold",
              marginBottom: -6,
            }}
          >
            Preferências de treino
          </Text>

          <View style={{ gap: 8 }}>
            <Text style={{ color: "#F8F8F8", fontSize: 14 }}>Frequência semanal</Text>
            <Select selectedValue={frequenciaSemanal} onValueChange={setFrequenciaSemanal}>
              <SelectTrigger backgroundColor="#202020" borderRadius={12} height={56} px={16}>
                <Text style={{ color: "#F8F8F8" }}>{frequenciaSemanal}</Text>
                <SelectIcon />
              </SelectTrigger>
              <SelectPortal>
                <SelectBackdrop />
                <SelectContent>
                  <SelectItem label="3x por semana" value="3x por semana" />
                  <SelectItem label="4x por semana" value="4x por semana" />
                  <SelectItem label="5x por semana" value="5x por semana" />
                  <SelectItem label="6x por semana" value="6x por semana" />
                  <SelectItem label="Todos os dias" value="Todos os dias" />
                </SelectContent>
              </SelectPortal>
            </Select>
          </View>

          <Input backgroundColor="#202020" borderRadius={12} height={56} px={16}>
            <InputField
              value={gruposPrioritarios}
              onChangeText={setGruposPrioritarios}
              placeholder="Grupos musculares prioritários (ex: costas e pernas)"
              placeholderTextColor="#A1A1A1"
              color="#F8F8F8"
            />
          </Input>

          <Input backgroundColor="#202020" borderRadius={12} height={56} px={16}>
            <InputField
              value={lesoes}
              onChangeText={setLesoes}
              placeholder="Possui alguma lesão ou limitação física?"
              placeholderTextColor="#A1A1A1"
              color="#F8F8F8"
            />
          </Input>
        </View>

        {/* Botão Continuar */}
        <MotiView
          from={{ opacity: 0, translateY: 10 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Button
            backgroundColor="#5DD26C"
            borderRadius={12}
            height={56}
            onPress={handleContinue}
            disabled={loading}
          >
            {loading && <ButtonSpinner color="#0F0F0F" />}
            <ButtonText color="#0F0F0F" fontWeight="$bold" fontSize="$lg">
              {loading ? "Carregando..." : "Concluir cadastro corporal"}
            </ButtonText>
          </Button>
        </MotiView>
      </MotiView>
    </ScrollView>
  );
}
