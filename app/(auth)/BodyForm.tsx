import React, { useState } from "react";
import { ScrollView } from "react-native";
import { useDispatch } from "react-redux";
import { updateUserBody } from "@/src/redux/usuarioSlice";
import { useRouter } from "expo-router";
import { MotiView } from "moti";
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
} from "@gluestack-ui/themed";

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
        backgroundColor: "#0F0F0F",
        paddingHorizontal: 24,
        paddingTop: 40,
      }}
      contentContainerStyle={{
        gap: 20, // Ajuste no espaçamento para não esmagar o texto
        paddingBottom: 60,
      }}
    >
      <MotiView
        from={{ opacity: 0, translateY: 20 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.6 }}
        style={{ gap: 20 }} // Maior espaçamento entre os campos
      >
        {/* Altura */}
        <Input
          variant="outline"
          size="md"
          backgroundColor="#202020"
          borderRadius={12} // borderRadius mais leve
          padding="$3"
        >
          <InputField
            value={altura}
            onChangeText={setAltura}
            keyboardType="numeric"
            placeholder="Altura (cm)"
            placeholderTextColor="#888888"
            style={{ paddingVertical: 0 }}
          />
        </Input>

        {/* Peso */}
        <Input
          variant="outline"
          size="md"
          backgroundColor="#202020"
          borderRadius={12} // borderRadius mais leve
          padding="$3"
        >
          <InputField
            value={peso}
            onChangeText={setPeso}
            keyboardType="numeric"
            placeholder="Peso (kg)"
            placeholderTextColor="#888888"
            style={{ paddingVertical: 0 }}
          />
        </Input>

        {/* Biotipo */}
        <Select selectedValue={biotipo} onValueChange={setBiotipo}>
          <SelectTrigger
            backgroundColor="#202020"
            borderRadius={12} // borderRadius mais leve
            padding="$3"
          >
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
          <SelectTrigger
            backgroundColor="#202020"
            borderRadius={12} // borderRadius mais leve
            padding="$3"
          >
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
            size="md"
            backgroundColor="#5DD26C"
            borderRadius={12} // borderRadius mais leve
            paddingVertical={16} // Ajuste no padding para mais espaço
            onPress={handleContinue}
            disabled={loading}
            style={{
              shadowColor: "#5DD26C",
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.3,
              shadowRadius: 6,
            }}
          >
            {loading && <ButtonSpinner color="#0F0F0F" />}
            <ButtonText color="#0F0F0F" fontWeight="bold" fontSize="$lg" marginLeft="$2">
              {loading ? "Carregando..." : "Continuar"}
            </ButtonText>
          </Button>
        </MotiView>
      </MotiView>
    </ScrollView>
  );
}
