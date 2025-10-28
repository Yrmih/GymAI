
import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator, Image } from "react-native";
import tw from "twin.macro";
import { useRouter } from "expo-router";
import logo from "@/assets/brand/logo.png";

export default function Register() {
  const router = useRouter();

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = () => {
    setLoading(true);

    // Simulação de cadastro
    setTimeout(() => {
      setLoading(false);
      // Redireciona para a próxima etapa: cadastro corporal
      router.push("/(auth)/body-form");
    }, 1500);
  };

  return (
    <View style={tw`flex-1 justify-center items-center bg-[#0f0f0f] px-6`}>
      {/* Logo */}
      <Image
        source={logo}
        style={{ width: 120, height: 120, resizeMode: "contain", marginBottom: 40 }}
      />

      {/* Nome */}
      <TextInput
        placeholder="Nome"
        placeholderTextColor="#f8f8f8"
        value={nome}
        onChangeText={setNome}
        style={tw`w-full mb-4 p-4 rounded bg-[#202020] text-[#f8f8f8]`}
      />

      {/* E-mail */}
      <TextInput
        placeholder="E-mail"
        placeholderTextColor="#f8f8f8"
        value={email}
        onChangeText={setEmail}
        style={tw`w-full mb-4 p-4 rounded bg-[#202020] text-[#f8f8f8]`}
      />

      {/* Senha */}
      <TextInput
        placeholder="Senha"
        placeholderTextColor="#f8f8f8"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
        style={tw`w-full mb-6 p-4 rounded bg-[#202020] text-[#f8f8f8]`}
      />

      {/* Botão de cadastro */}
      <TouchableOpacity
        onPress={handleRegister}
        style={tw`w-full p-4 rounded bg-[#5dd62c] items-center justify-center`}
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator color="#0f0f0f" />
        ) : (
          <Text style={tw`text-black font-bold`}>Cadastrar</Text>
        )}
      </TouchableOpacity>

      {/* Link para login */}
      <TouchableOpacity
        onPress={() => router.push("/(auth)/login")}
        style={tw`mt-4`}
      >
        <Text style={tw`text-[#f8f8f8]`}>
          Já tem conta? <Text style={tw`text-[#5dd62c]`}>Entrar</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
}
