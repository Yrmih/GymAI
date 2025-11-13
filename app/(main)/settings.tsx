import React from "react";
import { ScrollView, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "@/src/redux/store";

import { View, Text, Divider } from "@gluestack-ui/themed";
import AppIcon from "@/src/components/icons/AppIcon";
import { PerfilUsuario } from "@/src/types/perfil";

export default function Settings() {
  // ✅ obtém os dados do usuário do slice 'usuario'
  const perfil = useSelector((state: RootState) => state.usuario) as PerfilUsuario;

  return (
    <View flex={1} bg="#0F0F0F" padding={24}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        {/* Cabeçalho */}
        <View alignItems="center" mb={32}>
          <AppIcon name="settings-outline" size={48} color="#5DD26C" />
          <Text color="#FFF" fontSize="$2xl" fontWeight="$bold" mt={12}>
            Configurações
          </Text>
          <Text color="#9B9B9B" fontSize="$sm">
            {perfil.email || "usuario@email.com"}
          </Text>
        </View>

        {/* Seções */}
        <View mb={24}>
          <Text color="#5DD26C" fontSize="$md" fontWeight="$bold" mb={12}>
            Conta
          </Text>

          <TouchableOpacity style={{ flexDirection: "row", alignItems: "center", marginBottom: 16 }}>
            <AppIcon name="person-outline" size={24} />
            <Text color="#FFF" fontSize="$md" ml={12}>
              Editar Perfil
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={{ flexDirection: "row", alignItems: "center" }}>
            <AppIcon name="lock-closed-outline" size={24} />
            <Text color="#FFF" fontSize="$md" ml={12}>
              Alterar Senha
            </Text>
          </TouchableOpacity>
        </View>

        <Divider bg="#1E1E1E" my={16} />

        <View mb={24}>
          <Text color="#5DD26C" fontSize="$md" fontWeight="$bold" mb={12}>
            Preferências
          </Text>

          <TouchableOpacity style={{ flexDirection: "row", alignItems: "center", marginBottom: 16 }}>
            <AppIcon name="moon-outline" size={24} />
            <Text color="#FFF" fontSize="$md" ml={12}>
              Modo Escuro
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={{ flexDirection: "row", alignItems: "center" }}>
            <AppIcon name="notifications-outline" size={24} />
            <Text color="#FFF" fontSize="$md" ml={12}>
              Alertas de Treino
            </Text>
          </TouchableOpacity>
        </View>

        <Divider bg="#1E1E1E" my={16} />

        <View>
          <Text color="#5DD26C" fontSize="$md" fontWeight="$bold" mb={12}>
            Sistema
          </Text>

          <TouchableOpacity style={{ flexDirection: "row", alignItems: "center", marginBottom: 16 }}>
            <AppIcon name="language-outline" size={24} />
            <Text color="#FFF" fontSize="$md" ml={12}>
              Idioma
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={{ flexDirection: "row", alignItems: "center" }}>
            <AppIcon name="information-circle-outline" size={24} />
            <Text color="#FFF" fontSize="$md" ml={12}>
              Sobre o App
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
