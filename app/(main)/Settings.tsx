import React, { useState } from "react";
import { ScrollView, TouchableOpacity } from "react-native";
import { View, Text, Switch } from "@gluestack-ui/themed";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/src/data/redux/store";

import AppIcon from "@/src/components/icons/AppIcon";
import { logoutUsuario } from "@/src/data/redux/slices/perfilSlice";

import LanguageModal from "@/src/components/modal/LanguageModal";
import LogoutModal from "@/src/components/modal/LogoutModal";

import { router } from "expo-router";

export default function Settings() {
  const usuario = useSelector((state: RootState) => state.usuario);
  const dispatch = useDispatch();

  // Estados internos
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);

  const [languageModal, setLanguageModal] = useState(false);
  const [logoutModal, setLogoutModal] = useState(false);

  const handleLogout = () => {
    dispatch(logoutUsuario());
    setLogoutModal(false);
    // futuro: router.replace("/auth/login");
  };

  return (
    <View flex={1} bg="#0F0F0F">
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 24,
          paddingVertical: 32,
          gap: 32,
        }}
        showsVerticalScrollIndicator={false}
      >
        {/* 🧑 Perfil */}
        <View alignItems="center">
          <View
            w={96}
            h={96}
            borderRadius={48}
            bg="#1A1A1A"
            alignItems="center"
            justifyContent="center"
            mb={12}
          >
            <AppIcon name="person-circle-outline" size={72} color="#5DD26C" />
          </View>

          <Text color="#FFF" fontSize="$lg" fontWeight="$bold">
            {usuario.nome || "Treinador"}
          </Text>
          <Text color="#9B9B9B" fontSize="$sm">
            {usuario.email || "usuario@email.com"}
          </Text>
        </View>

        {/* ⚙️ Conta */}
        <View gap={20}>
          <Text color="#5DD26C" fontSize="$md" fontWeight="$bold">
            Conta
          </Text>

          {/* Editar Perfil */}
          <TouchableOpacity>
            <View flexDirection="row" alignItems="center" gap={12}>
              <AppIcon name="create-outline" size={22} />
              <Text color="#FFF" fontSize="$sm">
                Editar Perfil
              </Text>
            </View>
          </TouchableOpacity>

          {/* Alterar Senha */}
          <TouchableOpacity onPress={() => router.push("/Change-password")}>
            <View flexDirection="row" alignItems="center" gap={12}>
              <AppIcon name="key-outline" size={22} />
              <Text color="#FFF" fontSize="$sm">
                Alterar Senha
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* 📱 Preferências */}
        <View gap={20}>
          <Text color="#5DD26C" fontSize="$md" fontWeight="$bold">
            Preferências
          </Text>

          {/* MODO ESCURO */}
          <View
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <View flexDirection="row" alignItems="center" gap={12}>
              <AppIcon name="moon-outline" size={22} />
              <Text color="#FFF" fontSize="$sm">
                Modo Escuro
              </Text>
            </View>
            <Switch
              value={darkMode}
              onValueChange={setDarkMode}
              size="lg"
              trackColor={{ true: "#5DD26C" }}
            />
          </View>

          {/* NOTIFICAÇÕES */}
          <View
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <View flexDirection="row" alignItems="center" gap={12}>
              <AppIcon name="notifications-outline" size={22} />
              <Text color="#FFF" fontSize="$sm">
                Notificações
              </Text>
            </View>
            <Switch
              value={notifications}
              onValueChange={setNotifications}
              size="lg"
              trackColor={{ true: "#5DD26C" }}
            />
          </View>

          {/* IDIOMA */}
          <TouchableOpacity onPress={() => setLanguageModal(true)}>
            <View flexDirection="row" alignItems="center" gap={12}>
              <AppIcon name="language-outline" size={22} />
              <Text color="#FFF" fontSize="$sm">
                Idioma
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* 🧾 Sistema */}
        <View gap={20}>
          <Text color="#5DD26C" fontSize="$md" fontWeight="$bold">
            Sistema
          </Text>

          <TouchableOpacity>
            <View flexDirection="row" alignItems="center" gap={12}>
              <AppIcon name="information-circle-outline" size={22} />
              <Text color="#FFF" fontSize="$sm">
                Sobre o App
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* 🚪 Logout */}
        <TouchableOpacity
          onPress={() => setLogoutModal(true)}
          style={{
            marginTop: 40,
            alignSelf: "center",
            backgroundColor: "#181818",
            paddingVertical: 14,
            paddingHorizontal: 32,
            borderRadius: 12,
          }}
        >
          <Text color="#FF5C5C" fontSize="$sm" fontWeight="$bold">
            Sair da Conta
          </Text>
        </TouchableOpacity>
      </ScrollView>

      {/* ====== MODAIS INTEGRADOS ====== */}
      <LanguageModal
        visible={languageModal}
        onClose={() => setLanguageModal(false)}
        onSelect={(lang) => console.log("Idioma escolhido:", lang)}
      />

      <LogoutModal
        visible={logoutModal}
        onClose={() => setLogoutModal(false)}
        onConfirm={handleLogout}
      />
    </View>
  );
}
