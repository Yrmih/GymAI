import React from "react";
import { ScrollView, Text } from "react-native";
import { MotiView } from "moti";

// Gluestack UI
import { View, Button, Switch, Avatar, Image } from "@gluestack-ui/themed";

export default function ProfileScreen() {
  const [darkMode, setDarkMode] = React.useState(true);
  const [notifications, setNotifications] = React.useState(true);

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "$background" }} contentContainerStyle={{ paddingHorizontal: 24, paddingTop: 48 }}>
      <MotiView
        from={{ opacity: 0, translateY: 20 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ type: "timing", duration: 600 }}
      >
        {/* Avatar e informações do usuário */}
        <View style={{ alignItems: "center", marginBottom: 32 }}>
          <Avatar size="xl">
            <Image
              source={{ uri: "https://i.pravatar.cc/200?img=68" }}
              style={{ width: "100%", height: "100%", borderRadius: 999 }}
            />
          </Avatar>
          <Text style={{ color: "$text", fontSize: 24, fontWeight: "bold", marginTop: 16 }}>
            Ian Gonçalves
          </Text>
          <Text style={{ color: "$gray400", fontSize: 16 }}>@iangymai</Text>
        </View>

        {/* Dados físicos */}
        <View style={{ backgroundColor: "$gray800", padding: 20, borderRadius: "$2xl", marginBottom: 24 }}>
          <Text style={{ color: "$text", fontSize: 18, fontWeight: "600", marginBottom: 12 }}>
            Dados físicos
          </Text>
          <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 8 }}>
            <Text style={{ color: "$gray300" }}>Altura:</Text>
            <Text style={{ color: "$text", fontWeight: "600" }}>1.70 m</Text>
          </View>
          <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 8 }}>
            <Text style={{ color: "$gray300" }}>Peso:</Text>
            <Text style={{ color: "$text", fontWeight: "600" }}>79 kg</Text>
          </View>
          <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <Text style={{ color: "$gray300" }}>Meta:</Text>
            <Text style={{ color: "$text", fontWeight: "600" }}>Hipertrofia</Text>
          </View>
        </View>

        {/* Preferências */}
        <View style={{ backgroundColor: "$gray800", padding: 20, borderRadius: "$2xl", marginBottom: 24 }}>
          <Text style={{ color: "$text", fontSize: 18, fontWeight: "600", marginBottom: 12 }}>
            Preferências
          </Text>

          <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
            <Text style={{ color: "$gray300" }}>Modo escuro</Text>
            <Switch value={darkMode} onValueChange={setDarkMode} />
          </View>

          <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
            <Text style={{ color: "$gray300" }}>Notificações</Text>
            <Switch value={notifications} onValueChange={setNotifications} />
          </View>
        </View>

        {/* Botão de logout */}
        <MotiView
          from={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", delay: 200 }}
        >
          <Button
            size="lg"
            bg="$red600"
            borderRadius="$xl"
            onPress={() => console.log("Logout")}
          >
            <Text style={{ color: "$text", fontSize: 18, fontWeight: "600" }}>Sair</Text>
          </Button>
        </MotiView>
      </MotiView>
    </ScrollView>
  );
}
