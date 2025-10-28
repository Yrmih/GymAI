
import React, { useState } from "react";
import { View, Text, Image, TextInput, TouchableOpacity, ActivityIndicator } from "react-native";
import tw from "twin.macro";
import { useDispatch } from "react-redux";
import { login } from "@/src/redux/usuarioSlice";
import { useRouter } from "expo-router";

// Logo
import logo from "@/assets/brand/logo.png";

export default function Login() {
  const dispatch = useDispatch();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    setLoading(true);

    // Simulação de autenticação
    setTimeout(() => {
      dispatch(login({ nome: email.split("@")[0] })); // só para teste
      setLoading(false);
      router.replace("/(main)/index"); // redireciona para Home
    }, 1500);
  };

  return (
    <View style={tw`flex-1 justify-center items-center bg-[#0f0f0f] px-6`}>
      {/* Logo */}
      <Image
        source={logo}
        style={{ width: 120, height: 120, resizeMode: "contain", marginBottom: 40 }}
      />

      {/* Email */}
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

      {/* Botão de Login */}
      <TouchableOpacity
        onPress={handleLogin}
        style={tw`w-full p-4 rounded bg-[#5dd62c] items-center justify-center`}
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator color="#0f0f0f" />
        ) : (
          <Text style={tw`text-black font-bold`}>Entrar</Text>
        )}
      </TouchableOpacity>

      {/* Link para cadastro */}
      <TouchableOpacity
        onPress={() => router.push("/(auth)/register")}
        style={tw`mt-4`}
      >
        <Text style={tw`text-[#f8f8f8]`}>
          Não tem conta? <Text style={tw`text-[#5dd62c]`}>Cadastre-se</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
}
