import React, { useState } from "react";
import { Modal, ScrollView, TouchableOpacity } from "react-native";
import { View, Text } from "@gluestack-ui/themed";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/src/data/redux/store";
import { updateUserBody } from "@/src/data/redux/slices/usuarioBodySlice";

const FREQUENCY_OPTIONS = [
  "3x por semana",
  "4x por semana",
  "5x por semana",
  "6x por semana",
  "7x por semana",
];

interface FrequencyModalProps {
  visible: boolean;
  onClose: () => void;
}

export default function FrequencyModal({ visible, onClose }: FrequencyModalProps) {
  const dispatch = useDispatch();
  const usuario = useSelector((state: RootState) => state.perfil.usuario);

  const [selectedFrequency, setSelectedFrequency] = useState(
    usuario?.frequenciaSemanal || "3x por semana"
  );

  const handleSave = () => {
    dispatch(
      updateUserBody({
        ...usuario,
        frequenciaSemanal: selectedFrequency,
      })
    );
    onClose();
  };

  return (
    <Modal visible={visible} transparent animationType="slide">
      <View flex={1} justifyContent="flex-end" bg="rgba(0,0,0,0.6)">
        <View bg="#121212" borderTopRadius={20} padding={24} maxHeight="60%">
          <Text color="#5DD26C" fontSize={18} fontWeight="bold" mb={12}>
            Ajuste sua Frequência Semanal
          </Text>
          <Text color="#AAA" fontSize={14} mb={20}>
            Você pode escolher a quantidade de dias que deseja treinar por semana.
            Essa configuração ajuda a ajustar sua meta semanal no app e no dashboard.
          </Text>

          <ScrollView style={{ gap: 12 }}>
            {FREQUENCY_OPTIONS.map((f) => (
              <TouchableOpacity
                key={f}
                onPress={() => setSelectedFrequency(f)}
                style={{
                  paddingVertical: 12,
                  paddingHorizontal: 16,
                  borderRadius: 12,
                  backgroundColor: selectedFrequency === f ? "#5DD26C" : "#202020",
                }}
              >
                <Text style={{ color: selectedFrequency === f ? "#0F0F0F" : "#FFF", fontSize: 16 }}>
                  {f}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>

          <TouchableOpacity
            onPress={handleSave}
            style={{
              marginTop: 24,
              backgroundColor: "#5DD26C",
              paddingVertical: 14,
              borderRadius: 14,
              alignItems: "center",
            }}
          >
            <Text style={{ color: "#0F0F0F", fontWeight: "bold", fontSize: 16 }}>
              Salvar
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={onClose}
            style={{ marginTop: 12, alignItems: "center" }}
          >
            <Text style={{ color: "#AAA", fontSize: 14 }}>Cancelar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}
