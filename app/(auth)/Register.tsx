import React, { useState } from "react";
import { ScrollView, Image, Text } from "react-native";
import tw from "twin.macro";
import { useRouter } from "expo-router";
import { useDispatch } from "react-redux";
import { login } from "@/src/redux/usuarioSlice";

// Gluestack UI
import { View, Input, Button } from "@gluestack-ui/themed";

// Moti
import { MotiView } from "moti";

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
    if (!nome || !email || !senha) return alert("Preencha todos os campos.");
    setLoading(true);

    // Simulação de cadastro
    setTimeout(() => {
      dispatch(login({ nome })); // registra e loga direto
      setLoading(false);
      router.replace("/(main)/index");
    }, 1500);
  };

  return (
    <ScrollView style={tw`flex-1 bg-[#0f0f0f] px-6 pt-10`}>
      <View style={tw`items-center mb-10`}>
        {/* Logo animada */}
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

      <MotiView
        from={{ opacity: 0, translateY: 10 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={tw`space-y-4`}
      >
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
        <Text style={tw`text-[#F8F8F8] text-center mt-2`}>
          Já tem conta?{" "}
          <Text
            style={tw`text-[#5DD26C]`}
            onPress={() => router.push("/(auth)/login")}
          >
            Entrar
          </Text>
        </Text>
      </MotiView>
    </ScrollView>
  );
}
