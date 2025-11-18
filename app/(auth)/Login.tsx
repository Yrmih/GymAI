import React, { useState } from "react";
import {
  ScrollView,
  Image,
  Text,
  View,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useDispatch } from "react-redux";
import { login } from "@/src/data/redux/slices/usuarioBodySlice";
import { useRouter } from "expo-router";
import {
  Input,
  InputField,
  Button,
  ButtonText,
  ButtonSpinner,
} from "@gluestack-ui/themed";
import { MotiView } from "moti";
import logo from "@/assets/brand/logo.png";

export default function Login() {
  const dispatch = useDispatch();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    if (!email || !senha) return alert("Preencha e-mail e senha.");
    setLoading(true);

    // Simula login (placeholder)
    setTimeout(() => {
      dispatch(login({ nome: email.split("@")[0] }));
      setLoading(false);
      router.replace("/(main)"); // 👈 após login, envia para a home
    }, 1500);
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: "#0F0F0F" }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: "center",
          paddingHorizontal: 24,
          paddingVertical: 40,
          gap: 20,
        }}
        keyboardShouldPersistTaps="handled"
      >
        {/* Logo animado */}
        <View style={{ alignItems: "center", marginBottom: 40 }}>
          <MotiView
            from={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 120 }}
          >
            <Image
              source={logo}
              style={{ width: 120, height: 120, resizeMode: "contain" }}
            />
          </MotiView>
        </View>

        {/* Campo: E-mail */}
        <Input
          backgroundColor="#202020"
          borderRadius={12}
          paddingVertical={14}
          paddingHorizontal={12}
          marginBottom={16}
          minHeight={50}
        >
          <InputField
            value={email}
            onChangeText={setEmail}
            placeholder="E-mail"
            placeholderTextColor="#F8F8F8"
            color="#F8F8F8"
          />
        </Input>

        {/* Campo: Senha */}
        <Input
          backgroundColor="#202020"
          borderRadius={12}
          paddingVertical={14}
          paddingHorizontal={12}
          marginBottom={24}
          minHeight={50}
        >
          <InputField
            value={senha}
            onChangeText={setSenha}
            placeholder="Senha"
            placeholderTextColor="#F8F8F8"
            color="#F8F8F8"
            secureTextEntry
          />
        </Input>

        {/* Botão: Entrar */}
        <Button
          backgroundColor="$green500"
          borderRadius={12}
          paddingVertical={16}
          paddingHorizontal={12}
          minHeight={50}
          onPress={handleLogin}
        >
          {loading && <ButtonSpinner color="$black" />}
          <ButtonText>{loading ? "Carregando..." : "Entrar"}</ButtonText>
        </Button>

        {/* Link: Ir para cadastro */}
        <Text style={{ color: "#F8F8F8", textAlign: "center", marginTop: 12 }}>
          Não tem conta?{" "}
          <Text
            style={{ color: "#5DD26C", fontWeight: "bold" }}
            onPress={() => router.push("/Register")}
          >
            Cadastre-se
          </Text>
        </Text>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
