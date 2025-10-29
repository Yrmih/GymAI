import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { useSelector, UseSelector } from "react-redux";
import { RootState } from "@/src/redux/store";
import { useRouter } from "expo-router";
import { MotiView } from "moti";
import tw from "twin.macro";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const usuarioLogado = useSelector((state: RootState) => state.usuario.logado);

  useEffect(() => {
    if (usuarioLogado) {
      router.replace("/(main)/index");
    }
  }, [usuarioLogado]);
  return (
    <MotiView
      from={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={tw`flex-1 bg-[#0f0f0f]`}
    >
      {children}
    </MotiView>
  );
}
