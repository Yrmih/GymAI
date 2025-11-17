import React from "react";
import { Modal, TouchableOpacity } from "react-native";
import { View, Text } from "@gluestack-ui/themed";
import AppIcon from "../icons/AppIcon";

interface LanguageModalProps {
  visible: boolean;
  onClose: () => void;
  onSelect: (lang: string) => void;
}

export default function LanguageModal({
  visible,
  onClose,
  onSelect,
}: LanguageModalProps) {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
    >
      {/* Fundo escurecido */}
      <TouchableOpacity
        activeOpacity={1}
        onPress={onClose}
        style={{
          flex: 1,
          backgroundColor: "rgba(0,0,0,0.6)",
          justifyContent: "flex-end",
        }}
      >
        {/* Container do Bottom Sheet */}
        <TouchableOpacity
          activeOpacity={1}
          style={{
            backgroundColor: "#111",
            paddingVertical: 24,
            paddingHorizontal: 24,
            borderTopLeftRadius: 26,
            borderTopRightRadius: 26,
            gap: 22,
          }}
        >
          <Text color="#FFF" fontSize="$lg" fontWeight="$bold" mb={4}>
            Escolher Idioma
          </Text>

          {[
            { label: "Português (BR)", code: "pt" },
            { label: "English (US)", code: "en" },
            { label: "Español (ES)", code: "es" },
          ].map((i) => (
            <TouchableOpacity
              key={i.code}
              onPress={() => {
                onSelect(i.code);
                onClose();
              }}
            >
              <View flexDirection="row" alignItems="center" gap={12}>
                <AppIcon name="language-outline" size={22} color="#5DD26C" />
                <Text color="#FFF" fontSize="$md">{i.label}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </TouchableOpacity>
      </TouchableOpacity>
    </Modal>
  );
}
