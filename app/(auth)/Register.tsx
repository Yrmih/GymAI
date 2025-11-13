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
import { InputFieldItem } from "@/src/types/InputFieldItem";
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

  // Array tipado de inputs
  const inputFields: InputFieldItem[] = [
    { placeholder: "Nome completo", value: nome, setValue: setNome, keyboardType: "default" },
    { placeholder: "E-mail", value: email, setValue: setEmail, keyboardType: "email-address", autoCapitalize: "none" },
    { placeholder: "Idade", value: idade, setValue: setIdade, keyboardType: "numeric" },
    { placeholder: "Senha", value: senha, setValue: setSenha, secureTextEntry: true },
    { placeholder: "Confirmar senha", value: confirmarSenha, setValue: setConfirmarSenha, secureTextEntry: true },
  ];

  const validarSenha = (senha: string) => {
    const regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    return regex.test(senha);
  };

  const handleRegister = () => {
    if (!nome || !email || !senha || !confirmarSenha || !idade || !sexo || !nivel || !objetivo) {
      return Alert.alert("Erro", "Preencha todos os campos.");
    }

    if (senha !== confirmarSenha) return Alert.alert("Erro", "As senhas não coincidem.");

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
        style={{ flex: 1, backgroundColor: "#0F0F0F", paddingHorizontal: 24, paddingTop: 40 }}
        contentContainerStyle={{ gap: 20, paddingBottom: 60 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Logo */}
        <View style={{ alignItems: "center", marginBottom: 40 }}>
          <MotiView from={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 120 }}>
            <Image source={logo} style={{ width: 120, height: 120, resizeMode: "contain" }} />
          </MotiView>
        </View>

        {/* Campos de Input */}
        {inputFields.map((item, index) => (
          <Input
            key={index}
            bg="#202020"
            borderRadius={24}
            height={50}
            p={12}
            style={{
              shadowColor: "#5DD26C",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.3,
              shadowRadius: 4,
            }}
          >
            <InputField
              placeholder={item.placeholder}
              value={item.value}
              onChangeText={item.setValue}
              keyboardType={item.keyboardType}
              autoCapitalize={item.autoCapitalize}
              secureTextEntry={item.secureTextEntry}
              color="#F8F8F8"
              placeholderTextColor="#A3A3A3"
              style={{ paddingVertical: 0 }}
            />
          </Input>
        ))}

        {/* Selects */}
        {[
          {
            placeholder: "Sexo",
            value: sexo,
            setValue: setSexo,
            items: [
              { label: "Masculino", value: "masculino" },
              { label: "Feminino", value: "feminino" },
              { label: "Outro", value: "outro" },
            ],
          },
          {
            placeholder: "Nível de experiência",
            value: nivel,
            setValue: setNivel,
            items: [
              { label: "Iniciante", value: "iniciante" },
              { label: "Intermediário", value: "intermediario" },
              { label: "Avançado", value: "avancado" },
            ],
          },
          {
            placeholder: "Objetivo",
            value: objetivo,
            setValue: setObjetivo,
            items: [
              { label: "Ganho de massa", value: "massa" },
              { label: "Perda de gordura", value: "gordura" },
              { label: "Condicionamento", value: "condicionamento" },
            ],
          },
        ].map((selectItem, index) => (
          <Select key={index} onValueChange={selectItem.setValue}>
            <SelectTrigger
              bg="#202020"
              borderRadius={24}
              height={50}
              p={12}
              style={{
                shadowColor: "#5DD26C",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.3,
                shadowRadius: 4,
              }}
            >
              <SelectInput
                placeholder={selectItem.placeholder}
                color={selectItem.value ? "#F8F8F8" : "#A3A3A3"}
                value={selectItem.value}
                style={{ paddingVertical: 0 }}
              />
            </SelectTrigger>
            <SelectPortal>
              <SelectBackdrop />
              <SelectContent bg="#1A1A1A">
                <SelectDragIndicatorWrapper>
                  <SelectDragIndicator />
                </SelectDragIndicatorWrapper>
                {selectItem.items.map((item, i) => (
                  <SelectItem key={i} label={item.label} value={item.value} />
                ))}
              </SelectContent>
            </SelectPortal>
          </Select>
        ))}

        {/* Dica sobre senha */}
        <Text style={{ color: "#A3A3A3", fontSize: 13, marginTop: 4, marginBottom: 16, textAlign: "center" }}>
          A senha deve conter pelo menos 8 caracteres, incluindo letra maiúscula, minúscula, número e símbolo.
        </Text>

        {/* Botão Registrar */}
        <Button
          onPress={handleRegister}
          backgroundColor="#5DD26C"
          borderRadius={24}
          padding="$4"
          mt="$3"
          style={{
            shadowColor: "#5DD26C",
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.4,
            shadowRadius: 8,
          }}
        >
          {loading && <ButtonSpinner color="$black" />}
          <ButtonText color="#0F0F0F" fontWeight="$bold" fontSize="$lg">
            {loading ? "Carregando..." : "Registrar"}
          </ButtonText>
        </Button>

        {/* Link para login */}
        <Text style={{ color: "#F8F8F8", textAlign: "center", marginTop: 24, marginBottom: 60 }}>
          Já tem conta?{" "}
          <Text style={{ color: "#5DD26C" }} onPress={() => router.push("/(auth)/login")}>
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
