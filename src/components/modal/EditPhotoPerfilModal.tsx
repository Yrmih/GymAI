// app/components/modal/EditPhotoPerfilModal.tsx
import React from "react";
import { Modal, View, TouchableOpacity, Text, StyleSheet } from "react-native";
import AppIcon from "@/src/components/icons/AppIcon";

interface EditPhotoPerfilModalProps {
  visible: boolean;
  onClose: () => void;
  onTakePhoto: () => void;
  onPickPhoto: () => void;
  onRemovePhoto: () => void;
}

export default function EditPhotoPerfilModal({
  visible,
  onClose,
  onTakePhoto,
  onPickPhoto,
  onRemovePhoto,
}: EditPhotoPerfilModalProps) {
  return (
    <Modal animationType="slide" transparent visible={visible} onRequestClose={onClose}>
      <View style={styles.overlay}>
        <View style={styles.container}>
          <TouchableOpacity style={styles.option} onPress={() => { onTakePhoto(); onClose(); }}>
            <AppIcon name="camera-outline" size={22} color="#5DD26C" />
            <Text style={styles.optionText}>Tirar Foto</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.option} onPress={() => { onPickPhoto(); onClose(); }}>
            <AppIcon name="image-outline" size={22} color="#5DD26C" />
            <Text style={styles.optionText}>Escolher da Galeria</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.option} onPress={() => { onRemovePhoto(); onClose(); }}>
            <AppIcon name="trash-outline" size={22} color="#FF4D4F" />
            <Text style={[styles.optionText, { color: "#FF4D4F" }]}>Remover Foto</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.cancel} onPress={onClose}>
            <Text style={styles.cancelText}>Cancelar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "flex-end",
  },
  container: {
    backgroundColor: "#1A1A1A",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    gap: 14,
  },
  option: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    gap: 12,
  },
  optionText: { color: "#F8F8F8", fontSize: 16 },
  cancel: {
    marginTop: 6,
    paddingVertical: 12,
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "#2A2A2A",
  },
  cancelText: {
    color: "#5DD26C",
    fontSize: 16,
    fontWeight: "600",
  },
});
