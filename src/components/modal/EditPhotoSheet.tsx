import React, { forwardRef, useMemo } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import BottomSheet from "@gorhom/bottom-sheet";
import AppIcon from "@/src/components/icons/AppIcon";

interface EditPhotoSheetProps {
  onTakePhoto: () => void;
  onPickPhoto: () => void;
  onRemovePhoto: () => void;
}

const EditPhotoSheet = forwardRef<BottomSheet, EditPhotoSheetProps>(
  ({ onTakePhoto, onPickPhoto, onRemovePhoto }, ref) => {
    const snapPoints = useMemo(() => ["32%"], []);

    return (
      <BottomSheet
        ref={ref}
        index={-1}
        snapPoints={snapPoints}
        enablePanDownToClose
        backgroundStyle={{ backgroundColor: "#1A1A1A" }}
        handleIndicatorStyle={{ backgroundColor: "#5DD26C" }}
      >
        <View style={styles.container}>
          <TouchableOpacity style={styles.option} onPress={onTakePhoto}>
            <AppIcon name="camera-outline" size={22} color="#5DD26C" />
            <Text style={styles.optionText}>Tirar Foto</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.option} onPress={onPickPhoto}>
            <AppIcon name="image-outline" size={22} color="#5DD26C" />
            <Text style={styles.optionText}>Escolher da Galeria</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.option} onPress={onRemovePhoto}>
            <AppIcon name="trash-outline" size={22} color="#FF4D4F" />
            <Text style={[styles.optionText, { color: "#FF4D4F" }]}>
              Remover Foto
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.cancel}
            onPress={() => {
              if (ref && typeof ref === "object" && "current" in ref) {
                ref.current?.close();
              }
            }}
          >
            <Text style={styles.cancelText}>Cancelar</Text>
          </TouchableOpacity>
        </View>
      </BottomSheet>
    );
  }
);

export default EditPhotoSheet;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    gap: 14,
  },
  option: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    gap: 12,
  },
  optionText: {
    color: "#F8F8F8",
    fontSize: 16,
  },
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
