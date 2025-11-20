import React, { useMemo, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Modal,
  StyleSheet,
  Dimensions,
} from "react-native";
import { MotiView, MotiText } from "moti";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useSelector } from "react-redux";
import { RootState } from "@/src/data/redux/store";
import data from "@/src/data/achievements/achievements.json";
import AchievementBadge from "@/src/components/achievements/AchievementBadge";
import { useRouter } from "expo-router";

const { width } = Dimensions.get("window");

type Category = "all" | "unique" | "monthly";

export default function AchievementsScreen() {
  const router = useRouter();
  const earned = useSelector((s: RootState) => s.achievements.earned);
  const [filter, setFilter] = useState<Category>("all");
  const [detail, setDetail] = useState<null | (typeof data.unique)[0]>(null);

  // Flattened list with category label
  const allItems = useMemo(() => {
    return [
      ...data.unique.map((i) => ({ ...i, __category: "unique" as const })),
      ...data.monthly.map((i) => ({ ...i, __category: "monthly" as const })),
    ];
  }, []);

  const filtered = useMemo(() => {
    if (filter === "all") return allItems;
    return allItems.filter((i) => i.__category === filter);
  }, [filter, allItems]);

  const unlockedCount = useMemo(() => earned.length, [earned]);
  const totalCount = allItems.length;

  return (
    <View style={styles.page}>
      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.headerLeft}>
          <Ionicons name="chevron-back" size={28} color="#F8F8F8" />
        </TouchableOpacity>

        <View style={styles.headerCenter}>
          <MotiText
            from={{ opacity: 0, translateY: -6 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 400 }}
            style={styles.title}
          >
            Conquistas
          </MotiText>
          <Text style={styles.subtitle}>
            {unlockedCount} de {totalCount} desbloqueadas
          </Text>
        </View>

        <View style={styles.headerRight}>
          <Ionicons name="trophy" size={20} color="#5DD26C" />
        </View>
      </View>

      {/* FILTERS */}
      <View style={styles.filtersRow}>
        {(
          [
            { key: "all", label: "Todas" },
            { key: "unique", label: "Únicas" },
            { key: "monthly", label: "Mensais" },
          ] as { key: Category; label: string }[]
        ).map((f) => {
          const active = filter === f.key;
          return (
            <TouchableOpacity
              key={f.key}
              onPress={() => setFilter(f.key)}
              style={[
                styles.filterButton,
                active && { backgroundColor: "#5DD26C10", borderColor: "#5DD26C" },
              ]}
            >
              <Text style={[styles.filterText, active && { color: "#5DD26C" }]}>
                {f.label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>

      {/* GRID */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.grid}>
          {filtered.map((item, idx) => {
            const isEarned = earned.includes(item.id);
            return (
              <MotiView
                key={item.id}
                from={{ opacity: 0, translateY: 12, scale: 0.98 }}
                animate={{ opacity: 1, translateY: 0, scale: 1 }}
                transition={{ delay: idx * 40, type: "timing" }}
                style={{ margin: 8 }}
              >
                <TouchableOpacity
                  activeOpacity={0.9}
                  onPress={() => setDetail(item)}
                >
                  <AchievementBadge item={item} earned={isEarned} />
                </TouchableOpacity>
              </MotiView>
            );
          })}
        </View>

        {/* Footer spacing */}
        <View style={{ height: 40 }} />
      </ScrollView>

      {/* DETAIL MODAL */}
      <Modal
        visible={!!detail}
        animationType="slide"
        transparent
        onRequestClose={() => setDetail(null)}
      >
        <View style={styles.modalOverlay}>
          <MotiView
            from={{ translateY: 300, opacity: 0 }}
            animate={{ translateY: 0, opacity: 1 }}
            transition={{ type: "spring", damping: 18, stiffness: 120 }}
            style={styles.modalCard}
          >
            {detail && (
              <>
                <View style={styles.modalHeader}>
                  <Text style={styles.modalIcon}>{detail.icon}</Text>
                  <Text style={styles.modalTitle}>{detail.name}</Text>
                </View>

                <Text style={styles.modalDesc}>{detail.description}</Text>

                <View style={styles.modalFooter}>
                  <TouchableOpacity
                    onPress={() => setDetail(null)}
                    style={styles.modalButton}
                  >
                    <Text style={{ color: "#0F0F0F", fontWeight: "700" }}>
                      Fechar
                    </Text>
                  </TouchableOpacity>
                </View>
              </>
            )}
          </MotiView>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "#0F0F0F",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 18,
    paddingTop: 18,
    paddingBottom: 8,
    borderBottomWidth: 0,
    backgroundColor: "transparent",
  },
  headerLeft: {
    width: 48,
    alignItems: "flex-start",
    justifyContent: "center",
  },
  headerCenter: {
    flex: 1,
    alignItems: "center",
  },
  headerRight: {
    width: 48,
    alignItems: "flex-end",
    justifyContent: "center",
  },
  title: {
    color: "#F8F8F8",
    fontSize: 20,
    fontWeight: "800",
  },
  subtitle: {
    color: "#A1A1A1",
    fontSize: 12,
    marginTop: 4,
  },
  filtersRow: {
    flexDirection: "row",
    paddingHorizontal: 18,
    paddingTop: 12,
    paddingBottom: 8,
    gap: 8,
  },
  filterButton: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: "transparent",
    backgroundColor: "transparent",
  },
  filterText: {
    color: "#CFCFCF",
    fontSize: 13,
    fontWeight: "600",
  },
  scrollContent: {
    paddingHorizontal: 12,
    paddingTop: 12,
    paddingBottom: 40,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    width: width - 24,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.55)",
    justifyContent: "flex-end",
  },
  modalCard: {
    backgroundColor: "#111111",
    padding: 20,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  modalHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginBottom: 8,
  },
  modalIcon: {
    fontSize: 34,
  },
  modalTitle: {
    color: "#F8F8F8",
    fontSize: 18,
    fontWeight: "800",
  },
  modalDesc: {
    color: "#CFCFCF",
    fontSize: 14,
    marginTop: 8,
    lineHeight: 20,
  },
  modalFooter: {
    marginTop: 16,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  modalButton: {
    backgroundColor: "#5DD26C",
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 10,
  },
});
