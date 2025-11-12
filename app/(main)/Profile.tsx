import React from "react";
import { ScrollView, Text } from "react-native";
import { MotiView } from "moti";
import { View, Button, Switch, Avatar, Image } from "@gluestack-ui/themed";

export default function ProfileScreen() {
  const [darkMode, setDarkMode] = React.useState(true);
  const [notifications, setNotifications] = React.useState(true);

  return (
    <View flex={1} bg="#0F0F0F">
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 24,
          paddingTop: 48,
          paddingBottom: 40,
        }}
        showsVerticalScrollIndicator={false}
      >
        <MotiView
          from={{ opacity: 0, translateY: 20 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ type: "timing", duration: 600 }}
        >
          {/* 🧠 Avatar e informações do usuário */}
          <View style={{ alignItems: "center", marginBottom: 32 }}>
            <Avatar
              size="xl"
              style={{
                borderWidth: 3,
                borderColor: "#5DD26C",
                shadowColor: "#5DD26C",
                shadowOffset: { width: 0, height: 0 },
                shadowOpacity: 0.8,
                shadowRadius: 10,
              }}
            >
              <Image
                source={{ uri: "https://i.pravatar.cc/200?img=68" }}
                style={{ width: "100%", height: "100%", borderRadius: 999 }}
              />
            </Avatar>

            <Text
              style={{
                color: "#FFFFFF",
                fontSize: 24,
                fontWeight: "bold",
                marginTop: 16,
              }}
            >
              Ian Gonçalves
            </Text>
            <Text style={{ color: "#AAAAAA", fontSize: 16 }}>@iangymai</Text>
          </View>

          {/* 💪 Dados físicos */}
          <View
            style={{
              backgroundColor: "#1A1A1A",
              padding: 20,
              borderRadius: 16,
              marginBottom: 24,
            }}
          >
            <Text
              style={{
                color: "#FFFFFF",
                fontSize: 18,
                fontWeight: "600",
                marginBottom: 12,
              }}
            >
              Dados físicos
            </Text>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: 8,
              }}
            >
              <Text style={{ color: "#B0B0B0" }}>Altura:</Text>
              <Text style={{ color: "#FFFFFF", fontWeight: "600" }}>1.70 m</Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: 8,
              }}
            >
              <Text style={{ color: "#B0B0B0" }}>Peso:</Text>
              <Text style={{ color: "#FFFFFF", fontWeight: "600" }}>79 kg</Text>
            </View>

            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
              <Text style={{ color: "#B0B0B0" }}>Meta:</Text>
              <Text style={{ color: "#FFFFFF", fontWeight: "600" }}>Hipertrofia</Text>
            </View>
          </View>

          {/* ⚙️ Preferências */}
          <View
            style={{
              backgroundColor: "#1A1A1A",
              padding: 20,
              borderRadius: 16,
              marginBottom: 24,
            }}
          >
            <Text
              style={{
                color: "#FFFFFF",
                fontSize: 18,
                fontWeight: "600",
                marginBottom: 12,
              }}
            >
              Preferências
            </Text>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 12,
              }}
            >
              <Text style={{ color: "#B0B0B0" }}>Modo escuro</Text>
              <Switch
                value={darkMode}
                onValueChange={setDarkMode}
                trackColor={{ true: "#5DD26C", false: "#333" }}
                thumbColor={darkMode ? "#0F0F0F" : "#999"}
              />
            </View>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text style={{ color: "#B0B0B0" }}>Notificações</Text>
              <Switch
                value={notifications}
                onValueChange={setNotifications}
                trackColor={{ true: "#5DD26C", false: "#333" }}
                thumbColor={notifications ? "#0F0F0F" : "#999"}
              />
            </View>
          </View>

          {/* 🚪 Botão de logout */}
          <MotiView
            from={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", delay: 200 }}
          >
            <Button
              size="lg"
              bg="#E53935"
              borderRadius={12}
              onPress={() => console.log("Logout")}
              style={{
                shadowColor: "#E53935",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.5,
                shadowRadius: 6,
              }}
            >
              <Text
                style={{
                  color: "#FFFFFF",
                  fontSize: 18,
                  fontWeight: "600",
                }}
              >
                Sair
              </Text>
            </Button>
          </MotiView>
        </MotiView>
      </ScrollView>
    </View>
  );
}
