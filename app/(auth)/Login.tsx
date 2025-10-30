import React, { useState } from "react";
import { ScrollView, Image, Text } from "react-native";
import { useDispatch } from "react-redux";
import { login } from "@/src/redux/usuarioSlice";
import { useRouter } from "expo-router";

// Gluestack UI
import {
  View,
  Input,
  InputField,
  Button,
  ButtonText,
  ButtonSpinner,
} from "@gluestack-ui/themed";

// Moti
import { MotiView } from "moti";

// Logo
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

    setTimeout(() => {
      dispatch(login({ nome: email.split("@")[0] }));
      setLoading(false);
      router.replace("/(main)/index");
    }, 1500);
  };

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: "#0F0F0F",
        paddingHorizontal: 24,
        paddingTop: 40,
      }}
      contentContainerStyle={{ gap: 16 }}
    >
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

      {/* Email */}
      <Input
        backgroundColor="#202020"
        borderRadius="xl"
        padding="$3"
        marginBottom="$4"
      >
        <InputField
          value={email}
          onChangeText={setEmail}
          placeholder="E-mail"
          placeholderTextColor="#F8F8F8"
          color="#F8F8F8"
        />
      </Input>

      {/* Senha */}
      <Input
        backgroundColor="#202020"
        borderRadius="xl"
        padding="$3"
        marginBottom="$6"
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

      {/* Botão Entrar */}
      <Button
        backgroundColor="$green500"
        borderRadius="full"
        padding="$4"
        onPress={handleLogin}
      >
        {loading && <ButtonSpinner color="$black" />}
        <ButtonText>{loading ? "Carregando..." : "Entrar"}</ButtonText>
      </Button>

      {/* Link para cadastro */}
      <Text style={{ color: "#F8F8F8", textAlign: "center" }}>
        Não tem conta?{" "}
        <Text
          style={{ color: "#5DD26C" }}
          onPress={() => router.push("/(auth)/register")}
        >
          Cadastre-se
        </Text>
      </Text>
    </ScrollView>
  );
}
