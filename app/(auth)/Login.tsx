import React, { useState } from "react";
import { ScrollView, Image, Text } from "react-native";
import tw from "twin.macro";
import { useDispatch } from "react-redux";
import { login } from "@/src/redux/usuarioSlice";
import { useRouter } from "expo-router";

// Gluestack UI
import { View, Input, Button, Spinner } from "@gluestack-ui/themed";

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

    // Simulação de autenticação
    setTimeout(() => {
      dispatch(login({ nome: email.split("@")[0] })); // só para teste
      setLoading(false);
      router.replace("/(main)/index");
    }, 1500);
  };

  return (
    <ScrollView style={tw`flex-1 bg-[#0f0f0f] px-6 pt-10`}>
      <View style={tw`items-center mb-10`}>
        {/* Logo animado */}
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
        placeholder="E-mail"
        value={email}
        onChangeText={setEmail}
        bg="#202020"
        borderRadius={12}
        px={4}
        py={3}
        _input={{ color: "#F8F8F8" }}
        placeholderTextColor="#F8F8F8"
        mb={4}
      />

      {/* Senha */}
      <Input
        placeholder="Senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
        bg="#202020"
        borderRadius={12}
        px={4}
        py={3}
        _input={{ color: "#F8F8F8" }}
        placeholderTextColor="#F8F8F8"
        mb={6}
      />

      {/* Botão Entrar */}
      <Button
        onPress={handleLogin}
        isLoading={loading}
        bg="#5DD26C"
        borderRadius={30}
        py={4}
        _text={{ color: "#0F0F0F", fontWeight: "bold", fontSize: 18 }}
        _loading={{ color: "#0F0F0F" }}
        mb={4}
      >
        Entrar
      </Button>

      {/* Link para cadastro */}
      <Text style={tw`text-[#F8F8F8] text-center`}>
        Não tem conta?{" "}
        <Text
          style={tw`text-[#5DD26C]`}
          onPress={() => router.push("/(auth)/register")}
        >
          Cadastre-se
        </Text>
      </Text>
    </ScrollView>
  );
}
