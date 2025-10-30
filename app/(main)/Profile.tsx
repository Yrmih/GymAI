import React from "react";
import { ScrollView, Text } from "react-native";
import { View, Button, Switch, Avatar } from "@gluestack-ui/themed";
import { MotiView } from "moti";

export default function ProfileScreen() {
  const [darkMode, setDarkMode] = React.useState(true);
  const [notifications, setNotifications] = React.useState(true);

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: "#0F0F0F", paddingHorizontal: 24, paddingTop: 48 }}
      contentContainerStyle={{ gap: 16 }}
    >
      <MotiView
        from={{ opacity: 0, translateY: 20 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ type: "timing", duration: 600 }}
      >
        {/* Avatar e informações */}
        <View alignItems="center" mb="$8">
          <Avatar
            size="xl"
            source={{ uri: "https://i.pravatar.cc/200?img=68" }}
          />
          <Text style={{ color: "#FFF", fontSize: 24, fontWeight: "bold", marginTop: 16 }}>
            Ian Gonçalves
          </Text>
          <Text style={{ color: "#B0B0B0", fontSize: 16 }}>@iangymai</Text>
        </View>

        {/* Dados físicos */}
        <View bg="$gray900" p="$5" borderRadius="$2xl" mb="$6">
          <Text style={{ color: "#FFF", fontSize: 18, fontWeight: "600", marginBottom: 12 }}>
            Dados físicos
          </Text>
          <View flexDirection="row" justifyContent="space-between" mb="$2">
            <Text style={{ color: "#B0B0B0" }}>Altura:</Text>
            <Text style={{ color: "#FFF", fontWeight: "600" }}>1.70 m</Text>
          </View>
          <View flexDirection="row" justifyContent="space-between" mb="$2">
            <Text style={{ color: "#B0B0B0" }}>Peso:</Text>
            <Text style={{ color: "#FFF", fontWeight: "600" }}>79 kg</Text>
          </View>
          <View flexDirection="row" justifyContent="space-between">
            <Text style={{ color: "#B0B0B0" }}>Meta:</Text>
            <Text style={{ color: "#FFF", fontWeight: "600" }}>Hipertrofia</Text>
          </View>
        </View>

        {/* Preferências */}
        <View bg="$gray900" p="$5" borderRadius="$2xl" mb="$6">
          <Text style={{ color: "#FFF", fontSize: 18, fontWeight: "600", marginBottom: 12 }}>
            Preferências
          </Text>

          <View flexDirection="row" justifyContent="space-between" alignItems="center" mb="$3">
            <Text style={{ color: "#B0B0B0" }}>Modo escuro</Text>
            <Switch value={darkMode} onValueChange={setDarkMode} />
          </View>

          <View flexDirection="row" justifyContent="space-between" alignItems="center">
            <Text style={{ color: "#B0B0B0" }}>Notificações</Text>
            <Switch value={notifications} onValueChange={setNotifications} />
          </View>
        </View>

        {/* Botão Sair */}
        <MotiView
          from={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", delay: 200 }}
        >
          <Button
            size="lg"
            bg="$red600"
            borderRadius="$xl"
            py="$4"
            onPress={() => console.log("Logout")}
          >
            <Text style={{ color: "#FFF", fontSize: 18, fontWeight: "600" }}>Sair</Text>
          </Button>
        </MotiView>
      </MotiView>
    </ScrollView>
  );
}
