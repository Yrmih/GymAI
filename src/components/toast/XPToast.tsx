import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { MotiView } from "moti";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/src/data/redux/store";
import { hideXPToast } from "@/src/data/redux/slices/uiSlice";

export default function XPToast() {
  const dispatch = useDispatch();
  const toast = useSelector((s: RootState) => s.ui?.xpToast);

  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => dispatch(hideXPToast()), 1200);
    return () => clearTimeout(t);
  }, [toast, dispatch]);

  if (!toast) return null;

  // key = toast.id -> força re-mount / reinício da animação quando id muda
  return (
    <View style={styles.wrapper} pointerEvents="none">
      <MotiView
        key={toast.id}
        from={{ opacity: 0, translateY: 8, scale: 0.95 }}
        animate={{ opacity: 1, translateY: -28, scale: 1 }}
        exit={{ opacity: 0, translateY: -6, scale: 0.95 }}
        transition={{ type: "timing", duration: 700 }}
        style={styles.container}
      >
        <Text style={styles.text}>+{toast.amount} XP</Text>
      </MotiView>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    top: 82, // ajuste conforme seu header
    right: 20, // posição no canto superior direito
    zIndex: 9999,
    alignItems: "center",
  },
  container: {
    backgroundColor: "#5DD26C",
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 999,
    shadowColor: "#5DD26C",
    shadowOpacity: 0.55,
    shadowRadius: 10,
    elevation: 6,
  },
  text: {
    color: "#0F0F0F",
    fontWeight: "800",
    fontSize: 15,
  },
});
