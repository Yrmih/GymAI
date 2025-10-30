import React, { useState } from "react";
import { ScrollView, Image, Text } from "react-native";
import { useRouter } from "expo-router";
import { useDispatch } from "react-redux";
import { login } from "@/src/redux/usuarioSlice";

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

    setTimeout(() => {
      dispatch(login({ nome }));
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

      {/* Nome */}
      <Input
        backgroundColor="#202020"
        borderRadius="xl"
        padding="$3"
        marginBottom="$3"
      >
        <InputField
          placeholder="Nome"
          value={nome}
          onChangeText={setNome}
          color="#F8F8F8"
          placeholderTextColor="#A3A3A3"
        />
      </Input>

      {/* Email */}
      <Input
        backgroundColor="#202020"
        borderRadius="xl"
        padding="$3"
        marginBottom="$3"
      >
        <InputField
          placeholder="E-mail"
          value={email}
          onChangeText={setEmail}
          color="#F8F8F8"
          placeholderTextColor="#A3A3A3"
          keyboardType="email-address"
          autoCapitalize="none"
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
          placeholder="Senha"
          value={senha}
          onChangeText={setSenha}
          secureTextEntry
          color="#F8F8F8"
          placeholderTextColor="#A3A3A3"
        />
      </Input>

      {/* Botão Cadastrar */}
      <Button
        onPress={handleRegister}
        backgroundColor="#5DD26C"
        borderRadius="full"
        padding="$4"
        marginBottom="$4"
      >
        {loading && <ButtonSpinner color="$black" />}
        <ButtonText color="#0F0F0F" fontWeight="$bold" fontSize="$lg">
          {loading ? "Carregando..." : "Cadastrar"}
        </ButtonText>
      </Button>

      {/* Link para login */}
      <Text style={{ color: "#F8F8F8", textAlign: "center" }}>
        Já tem conta?{" "}
        <Text
          style={{ color: "#5DD26C" }}
          onPress={() => router.push("/(auth)/login")}
        >
          Entrar
        </Text>
      </Text>
    </ScrollView>
  );
}
