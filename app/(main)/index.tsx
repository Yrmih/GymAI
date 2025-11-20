import React from "react";
import {
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  View as RNView,
} from "react-native";
import { useRouter } from "expo-router";
import { useSelector } from "react-redux";
import { RootState } from "@/src/data/redux/store";

import { View, Text, Avatar } from "@gluestack-ui/themed";
import { MotiView } from "moti";

import DashboardCircle from "@/src/components/charts/DashboardCircle";
import AppIcon from "@/src/components/icons/AppIcon";
import FloatingCameraButton from "@/src/components/button/FloatingCameraButton";

const { width: SCREEN_W } = Dimensions.get("window");

export default function Home() {
  const router = useRouter();
  const usuario = useSelector((state: RootState) => state.perfil?.usuario);

  const avatarUri =
    usuario?.avatar ||
    usuario?.foto ||
    "https://i.pravatar.cc/100?img=68";

  return (
    <View flex={1} bg="#121212">
      
      {/* Cabeçalho */}
      <View style={styles.headerContainer}>
        <TouchableOpacity
          style={styles.headerLeft}
          onPress={() => router.push("/Profile")}
          activeOpacity={0.8}
        >
          <Avatar size="sm">
            <Image
              source={{ uri: avatarUri }}
              style={{ width: "100%", height: "100%", borderRadius: 999 }}
            />
          </Avatar>

          <Text color="$white" fontWeight="$bold" fontSize="$lg" style={{ marginLeft: 10 }}>
            Olá, {usuario?.nome || "Atleta"}!
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push("/Settings")} activeOpacity={0.8}>
          <AppIcon name="cog-outline" size={24} color="#CCCCCC" />
        </TouchableOpacity>
      </View>

      {/* Conteúdo */}
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <MotiView
          from={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 500 }}
          style={{ alignItems: "center" }}
        >
          <DashboardCircle progress={66} />

          <Text color="$white" fontSize="$xl" fontWeight="$bold" marginTop={12}>
            2 de 3
          </Text>

          <Text color="#AAAAAA" fontSize="$sm">
            Dias na Semana
          </Text>

          <Text color="$white" fontSize="$md" marginTop={8}>
            Sua Meta Semanal
          </Text>
        </MotiView>
      </ScrollView>

      {/* Bottom bar sem glow */}
      <RNView style={styles.bottomWrapper}>
        <RNView style={styles.bottomBar}>
          <TouchableOpacity
            onPress={() => router.push("/Profile")}
            activeOpacity={0.85}
            style={styles.sideButton}
          >
            <AppIcon name="person-circle-outline" size={28} color="#FFFFFF" />
          </TouchableOpacity>

          <RNView style={{ width: 84 }} />

          <TouchableOpacity
            onPress={() => router.push("/WorkoutGallery")}
            activeOpacity={0.85}
            style={styles.sideButton}
          >
            <AppIcon name="barbell" size={28} color="#FFFFFF" />
          </TouchableOpacity>
        </RNView>

        {/* FAB (glow removido da home!) */}
        <RNView style={styles.fabLayer}>
          <FloatingCameraButton />
        </RNView>

      </RNView>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 24,
    paddingTop: 48,
  },
  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 24,
    paddingVertical: 40,
  },

  /* --- Bottom Bar --- */
  bottomWrapper: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 12,
    alignItems: "center",
    zIndex: 999,
  },

  bottomBar: {
    width: SCREEN_W - 24,
    height: 74,
    borderRadius: 18,
    backgroundColor: "rgba(0,0,0,0.85)",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 32,
    alignItems: "center",
  },

  sideButton: {
    alignItems: "center",
    transform: [{ translateY: -6 }],
  },

  /* FAB */
  fabLayer: {
    position: "absolute",
    bottom: 3,
    alignSelf: "center",
    alignItems: "center",
  },
});
