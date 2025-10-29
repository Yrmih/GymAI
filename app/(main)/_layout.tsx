// app/(main)/layout.tsx
import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "@/src/redux/store";
import { useRouter } from "expo-router";
import { MotiView } from "moti";
import tw from "twin.macro";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const usuarioLogado = useSelector((state: RootState) => state.usuario.logado);

  useEffect(() => {
    if (!usuarioLogado) {
      router.replace("/(auth)/login");
    }
  }, [usuarioLogado]);

  return (
    <MotiView
      from={{ translateY: 20, opacity: 0 }}
      animate={{ translateY: 0, opacity: 1 }}
      exit={{ translateY: 20, opacity: 0 }}
      style={tw`flex-1 bg-[#0f0f0f]`}
    >
      {children}
    </MotiView>
  );
}
