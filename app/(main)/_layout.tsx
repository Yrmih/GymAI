import { Stack } from "expo-router";

export default function MainLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#0F0F0F",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="exercises" options={{ title: "Exercícios" }} />
      <Stack.Screen name="exercise-details" options={{ title: "Detalhes" }} />
      <Stack.Screen name="Progress" options={{ title: "Progresso" }} />
      <Stack.Screen name="settings" options={{ title: "Configurações" }} />
      <Stack.Screen name="change-password" options={{ title: "Alterar Senha" }} />
      <Stack.Screen name="profile" options={{ title: "Perfil" }} />
    </Stack>
  );
}
