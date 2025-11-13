import React, { useState } from "react";
import { ScrollView, Image, Text, Alert } from "react-native";
import { useRouter } from "expo-router";
import { useDispatch } from "react-redux";
import { login } from "@/src/redux/usuarioSlice";
import {
  View,
  Input,
  InputField,
  Button,
  ButtonText,
  ButtonSpinner,
  Select,
  SelectTrigger,
  SelectInput,
  SelectPortal,
  SelectBackdrop,
  SelectContent,
  SelectDragIndicator,
  SelectDragIndicatorWrapper,
  SelectItem,
} from "@gluestack-ui/themed";
import { MotiView } from "moti";
import logo from "@/assets/brand/logo.png";
import BodyFormInviteModal from "@/src/components/modal/BodyFormInviteModal";

export default function Register() {
  const dispatch = useDispatch();
  const router = useRouter();

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [idade, setIdade] = useState("");
  const [sexo, setSexo] = useState("");
  const [nivel, setNivel] = useState("");
  const [objetivo, setObjetivo] = useState("");
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const validarSenha = (senha: string) => {
    const regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    return regex.test(senha);
  };

  const handleRegister = () => {
    if (
      !nome ||
      !email ||
      !senha ||
      !confirmarSenha ||
      !idade ||
      !sexo ||
      !nivel ||
      !objetivo
    )
      return Alert.alert("Erro", "Preencha todos os campos.");

    if (senha !== confirmarSenha)
      return Alert.alert("Erro", "As senhas não coincidem.");

    if (!validarSenha(senha))
      return Alert.alert(
        "Senha inválida",
        "A senha deve ter pelo menos 8 caracteres, com letra maiúscula, minúscula, número e símbolo."
      );

    setLoading(true);
    setTimeout(() => {
      dispatch(login({ nome }));
      setLoading(false);
      setShowModal(true);
    }, 1500);
  };

  const handleIrBodyForm = () => {
    setShowModal(false);
    router.push("/(auth)/BodyForm");
  };

  const handlePular = () => {
    setShowModal(false);
    router.push("/(tabs)/Home");
  };

  return (
    <>
      <ScrollView
        style={{
          flex: 1,
          backgroundColor: "#0F0F0F",
          paddingHorizontal: 24,
          paddingTop: 40,
        }}
        contentContainerStyle={{
          gap: 20,
          paddingBottom: 60, // evita corte do botão no final
        }}
        showsVerticalScrollIndicator={false}
      >
        {/* Logo */}
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
        <Input bg="#202020" borderRadius={20} p="$3">
          <InputField
            placeholder="Nome completo"
            value={nome}
            onChangeText={setNome}
            color="#F8F8F8"
            placeholderTextColor="#A3A3A3"
          />
        </Input>

        {/* E-mail */}
        <Input bg="#202020" borderRadius={20} p="$3">
          <InputField
            placeholder="E-mail"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            color="#F8F8F8"
            placeholderTextColor="#A3A3A3"
          />
        </Input>

        {/* Idade */}
        <Input bg="#202020" borderRadius={20} p="$3">
          <InputField
            placeholder="Idade"
            value={idade}
            onChangeText={setIdade}
            keyboardType="numeric"
            color="#F8F8F8"
            placeholderTextColor="#A3A3A3"
          />
        </Input>

        {/* Sexo */}
        <Select onValueChange={setSexo}>
          <SelectTrigger bg="#202020" borderRadius={20} p="$3">
            <SelectInput
              placeholder="Sexo"
              color={sexo ? "#F8F8F8" : "#A3A3A3"}
              value={sexo}
            />
          </SelectTrigger>
          <SelectPortal>
            <SelectBackdrop />
            <SelectContent bg="#1A1A1A">
              <SelectDragIndicatorWrapper>
                <SelectDragIndicator />
              </SelectDragIndicatorWrapper>
              <SelectItem label="Masculino" value="masculino" />
              <SelectItem label="Feminino" value="feminino" />
              <SelectItem label="Outro" value="outro" />
            </SelectContent>
          </SelectPortal>
        </Select>

        {/* Nível */}
        <Select onValueChange={setNivel}>
          <SelectTrigger bg="#202020" borderRadius={20} p="$3">
            <SelectInput
              placeholder="Nível de experiência"
              color={nivel ? "#F8F8F8" : "#A3A3A3"}
              value={nivel}
            />
          </SelectTrigger>
          <SelectPortal>
            <SelectBackdrop />
            <SelectContent bg="#1A1A1A">
              <SelectDragIndicatorWrapper>
                <SelectDragIndicator />
              </SelectDragIndicatorWrapper>
              <SelectItem label="Iniciante" value="iniciante" />
              <SelectItem label="Intermediário" value="intermediario" />
              <SelectItem label="Avançado" value="avancado" />
            </SelectContent>
          </SelectPortal>
        </Select>

        {/* Objetivo */}
        <Select onValueChange={setObjetivo}>
          <SelectTrigger bg="#202020" borderRadius={20} p="$3">
            <SelectInput
              placeholder="Objetivo"
              color={objetivo ? "#F8F8F8" : "#A3A3A3"}
              value={objetivo}
            />
          </SelectTrigger>
          <SelectPortal>
            <SelectBackdrop />
            <SelectContent bg="#1A1A1A">
              <SelectDragIndicatorWrapper>
                <SelectDragIndicator />
              </SelectDragIndicatorWrapper>
              <SelectItem label="Ganho de massa" value="massa" />
              <SelectItem label="Perda de gordura" value="gordura" />
              <SelectItem label="Condicionamento" value="condicionamento" />
            </SelectContent>
          </SelectPortal>
        </Select>

        {/* Senha */}
        <Input bg="#202020" borderRadius={20} p="$3">
          <InputField
            placeholder="Senha"
            value={senha}
            onChangeText={setSenha}
            secureTextEntry
            color="#F8F8F8"
            placeholderTextColor="#A3A3A3"
          />
        </Input>

        {/* Confirmar Senha */}
        <Input bg="#202020" borderRadius={20} p="$3">
          <InputField
            placeholder="Confirmar senha"
            value={confirmarSenha}
            onChangeText={setConfirmarSenha}
            secureTextEntry
            color="#F8F8F8"
            placeholderTextColor="#A3A3A3"
          />
        </Input>

        {/* Dica sobre senha */}
        <Text
          style={{
            color: "#A3A3A3",
            fontSize: 13,
            marginTop: 4,
            marginBottom: 16,
            textAlign: "center",
          }}
        >
          A senha deve conter pelo menos 8 caracteres, incluindo letra
          maiúscula, minúscula, número e símbolo.
        </Text>

        {/* Botão Registrar */}
        <Button
          onPress={handleRegister}
          backgroundColor="#5DD26C"
          borderRadius={24}
          padding="$4"
          mt="$3"
        >
          {loading && <ButtonSpinner color="$black" />}
          <ButtonText color="#0F0F0F" fontWeight="$bold" fontSize="$lg">
            {loading ? "Carregando..." : "Registrar"}
          </ButtonText>
        </Button>

        {/* Link para login */}
        <Text
          style={{
            color: "#F8F8F8",
            textAlign: "center",
            marginTop: 24,
            marginBottom: 60,
          }}
        >
          Já tem conta?{" "}
          <Text
            style={{ color: "#5DD26C" }}
            onPress={() => router.push("/(auth)/login")}
          >
            Entrar
          </Text>
        </Text>
      </ScrollView>

      {/* Modal separado */}
      <BodyFormInviteModal
        showModal={showModal}
        onClose={() => setShowModal(false)}
        onPreencher={handleIrBodyForm}
        onPular={handlePular}
      />
    </>
  );
}
