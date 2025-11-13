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
  Modal,
  ModalBackdrop,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Heading,
} from "@gluestack-ui/themed";
import { MotiView } from "moti";
import logo from "@/assets/brand/logo.png";

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
      setShowModal(true); // 👉 exibe o modal de convite pro BodyForm
    }, 1500);
  };

  const handleIrBodyForm = () => {
    setShowModal(false);
    router.push("/(auth)/BodyForm");
  };

  const handlePular = () => {
    setShowModal(false);
    router.push("/(tabs)/Home"); // Vai pra Home sem preencher BodyForm
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
        contentContainerStyle={{ gap: 16 }}
        showsVerticalScrollIndicator={false}
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
        <Input backgroundColor="#202020" borderRadius="xl" padding="$3" mb="$3">
          <InputField
            placeholder="Nome completo"
            value={nome}
            onChangeText={setNome}
            color="#F8F8F8"
            placeholderTextColor="#A3A3A3"
          />
        </Input>

        {/* E-mail */}
        <Input backgroundColor="#202020" borderRadius="xl" padding="$3" mb="$3">
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
        <Input backgroundColor="#202020" borderRadius="xl" padding="$3" mb="$3">
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
          <SelectTrigger bg="#202020" borderRadius="xl" mb="$3">
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

        {/* Nível de experiência */}
        <Select onValueChange={setNivel}>
          <SelectTrigger bg="#202020" borderRadius="xl" mb="$3">
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
          <SelectTrigger bg="#202020" borderRadius="xl" mb="$3">
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
        <Input backgroundColor="#202020" borderRadius="xl" padding="$3" mb="$3">
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
        <Input backgroundColor="#202020" borderRadius="xl" padding="$3" mb="$1">
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
        <Text style={{ color: "#A3A3A3", fontSize: 13, marginBottom: 20 }}>
          A senha deve conter pelo menos 8 caracteres, incluindo letra
          maiúscula, minúscula, número e símbolo.
        </Text>

        {/* Botão Registrar */}
        <Button
          onPress={handleRegister}
          backgroundColor="#5DD26C"
          borderRadius="full"
          padding="$4"
          marginBottom="$4"
        >
          {loading && <ButtonSpinner color="$black" />}
          <ButtonText color="#0F0F0F" fontWeight="$bold" fontSize="$lg">
            {loading ? "Carregando..." : "Registrar"}
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

      {/* 🧩 Modal de convite para BodyForm */}
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <ModalBackdrop />
        <ModalContent bg="#1A1A1A" borderRadius="$2xl" p="$5">
          <ModalHeader>
            <Heading color="$white" fontSize="$xl">
              Complete seu perfil
            </Heading>
          </ModalHeader>
          <ModalBody>
            <Text style={{ color: "#A3A3A3", marginTop: 8 }}>
              Quer deixar seu perfil completo pra treinos mais precisos?
              Adicione seus dados corporais agora 💪
            </Text>
          </ModalBody>
          <ModalFooter
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 16,
            }}
          >
            <Button
              bg="#5DD26C"
              borderRadius="full"
              paddingHorizontal={24}
              onPress={handleIrBodyForm}
            >
              <ButtonText color="#0F0F0F">Preencher agora</ButtonText>
            </Button>
            <Button
              bg="transparent"
              borderColor="#5DD26C"
              borderWidth={1}
              borderRadius="full"
              paddingHorizontal={24}
              onPress={handlePular}
            >
              <ButtonText color="#5DD26C">Depois</ButtonText>
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
