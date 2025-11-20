import React, { useLayoutEffect } from "react";
import { ScrollView, Text, TouchableOpacity } from "react-native";
import { MotiView } from "moti";
import { View, Avatar, Image } from "@gluestack-ui/themed";
import { useRouter, useNavigation } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useSelector } from "react-redux";
import { RootState } from "@/src/data/redux/store";
import AchievementsGrid from "@/src/components/achievements/AchievementsGrid";
import XPBar from "@/src/components/bar/XPBar";
import data from "@/src/data/achievements/achievements.json";

export default function ProfileScreen() {
  const router = useRouter();
  const navigation = useNavigation();

  // XP REAL vindo do Redux
  const { level, xpTotal, nextLevelXP } = useSelector(
    (state: RootState) => state.xp
  );

  // Achievements Redux
  const earned = useSelector((state: RootState) => state.achievements.earned);

  // Total de conquistas disponíveis
  const allAchievementsCount = data.unique.length + data.monthly.length;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: { backgroundColor: "#0F0F0F" },
      headerTintColor: "#FFF",
      headerTitle: "",
      headerRight: () => (
        <TouchableOpacity
          onPress={() => router.push("/EditProfile")}
          style={{ paddingRight: 16 }}
        >
          <Ionicons name="settings-outline" size={26} color="#5DD26C" />
        </TouchableOpacity>
      ),
      headerRightContainerStyle: { paddingRight: 16 },
    });
  }, [navigation]);

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
          {/* Avatar */}
          <View style={{ alignItems: "center", marginBottom: 32 }}>
            <Avatar
              size="xl"
              style={{
                borderWidth: 3,
                borderColor: "#5DD26C",
                shadowColor: "#5DD26C",
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

          <XPBar />

          {/* Coleção de Equipamentos */}
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
                marginBottom: 8,
              }}
            >
              Coleção de Equipamentos
            </Text>

            <Text style={{ color: "#AAAAAA", fontSize: 14 }}>
              12 aparelhos descobertos 🔥
            </Text>
          </View>

          {/* Conquistas */}
          <View
            style={{
              backgroundColor: "#1A1A1A",
              padding: 20,
              borderRadius: 16,
              marginBottom: 24,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: 12,
              }}
            >
              <Text
                style={{
                  color: "#FFFFFF",
                  fontSize: 18,
                  fontWeight: "600",
                }}
              >
                Conquistas
              </Text>

              <Text
                style={{
                  color: "#5DD26C",
                  fontSize: 14,
                  fontWeight: "500",
                }}
              >
                {earned.length} / {allAchievementsCount}
              </Text>
            </View>

            <MotiView
              from={{ opacity: 0, translateY: 10 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{ delay: 150, duration: 500 }}
            >
              <AchievementsGrid limit={6} />
            </MotiView>

            <TouchableOpacity
              onPress={() => router.push("/Achievements")}
              style={{
                marginTop: 16,
                paddingVertical: 10,
                borderRadius: 10,
                backgroundColor: "#5DD26C20",
                alignItems: "center",
              }}
            >
              <Text
                style={{ color: "#5DD26C", fontSize: 14, fontWeight: "600" }}
              >
                Ver todas as conquistas
              </Text>
            </TouchableOpacity>
          </View>

          {/* Logout */}
          <MotiView
            from={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", delay: 200 }}
          >
            <View
              style={{
                backgroundColor: "#E53935",
                padding: 16,
                borderRadius: 12,
                alignItems: "center",
              }}
              onTouchEnd={() => console.log("Logout")}
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
            </View>
          </MotiView>
        </MotiView>
      </ScrollView>
    </View>
  );
}
