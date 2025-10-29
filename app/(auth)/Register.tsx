import React, { useState } from "react";
import { Image, ScrollView } from "react-native";
import tw from "twin.macro";
import { useRouter } from "expo-router";
import { useDispatch } from "react-redux";
import { login } from "@/src/redux/usuarioSlice";


import { View, Text, Button, Input } from "@gluestack-ui/themed";

// Logo
import logo from "@/assets/brand/logo.png";

export default function Register() {
  const dispatch = useDispatch();
  const router = useRouter();

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = () => {
    setLoading(true);

    // Simulação de cadastro
    setTimeout(() => {
      dispatch(login({ nome })); // registra e loga direto
      setLoading(false);
      router.replace("/(main)/index"); // redireciona para Home
    }, 1500);
  };

  return (
    <ScrollView style={tw`flex-1 bg-[#0f0f0f] px-6 pt-10`}>
      {/* Logo */}
      <Image
        source={logo}
        style={{ width: 120, height: 120, resizeMode: "contain", marginBottom: 40 }}
      />

      <View style={tw`space-y-4`}>
        {/* Nome */}
        <Input
          placeholder="Nome"
          value={nome}
          onChangeText={setNome}
          _input={{ color: "#F8F8F8" }}
          bg="#202020"
          borderRadius={12}
          px={4}
          py={3}
          placeholderTextColor="#F8F8F8"
        />

        {/* Email */}
        <Input
          placeholder="E-mail"
          value={email}
          onChangeText={setEmail}
          _input={{ color: "#F8F8F8" }}
          bg="#202020"
          borderRadius={12}
          px={4}
          py={3}
          placeholderTextColor="#F8F8F8"
          keyboardType="email-address"
          autoCapitalize="none"
        />

        {/* Senha */}
        <Input
          placeholder="Senha"
          value={senha}
          onChangeText={setSenha}
          secureTextEntry
          _input={{ color: "#F8F8F8" }}
          bg="#202020"
          borderRadius={12}
          px={4}
          py={3}
          placeholderTextColor="#F8F8F8"
        />

        {/* Botão de Registro */}
        <Button
          onPress={handleRegister}
          isLoading={loading}
          bg="#5DD26C"
          borderRadius={30}
          py={4}
          _text={{ color: "#0F0F0F", fontWeight: "bold", fontSize: 18 }}
          _loading={{ color: "#0F0F0F" }}
        >
          Cadastrar
        </Button>

        {/* Link para login */}
        <Text style={{ color: "#F8F8F8", textAlign: "center", marginTop: 10 }}>
          Já tem conta?{" "}
          <Text
            style={{ color: "#5DD26C" }}
            onPress={() => router.push("/(auth)/login")}
          >
            Entrar
          </Text>
        </Text>
      </View>
    </ScrollView>
  );
}
