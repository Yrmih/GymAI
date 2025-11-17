import React from "react";
import { Modal, TouchableOpacity } from "react-native";
import { View, Text } from "@gluestack-ui/themed";
import AppIcon from "../icons/AppIcon";

export default function LogoutModal({ visible, onClose, onConfirm }: any) {
  return (
    <Modal transparent visible={visible} animationType="fade">
      {/* Fundo escuro */}
      <TouchableOpacity
        activeOpacity={1}
        onPress={onClose}
        style={{
          flex: 1,
          backgroundColor: "rgba(0,0,0,0.6)",
          justifyContent: "center",
          alignItems: "center",
          padding: 24,
        }}
      >
        {/* Caixa do modal */}
        <View
          style={{
            backgroundColor: "#111",
            padding: 24,
            borderRadius: 20,
            width: "100%",
            gap: 18,
            alignItems: "center",
          }}
        >
          <AppIcon name="warning-outline" size={52} color="#FF5C5C" />

          <Text color="#FFF" fontSize="$lg" fontWeight="$bold" textAlign="center">
            Deseja sair da conta?
          </Text>

          <Text color="#999" fontSize="$sm" mb={12} textAlign="center">
            Você poderá entrar novamente a qualquer momento.
          </Text>

          <TouchableOpacity
            onPress={onConfirm}
            style={{
              backgroundColor: "#FF5C5C",
              paddingVertical: 12,
              borderRadius: 12,
              width: "100%",
            }}
          >
            <Text
              color="#000"
              fontWeight="$bold"
              fontSize="$md"
              textAlign="center"
            >
              Sair
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={onClose}
            style={{
              paddingVertical: 12,
              borderRadius: 12,
              width: "100%",
              borderWidth: 1,
              borderColor: "#333",
            }}
          >
            <Text color="#FFF" fontSize="$md" textAlign="center">
              Cancelar
            </Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </Modal>
  );
}
