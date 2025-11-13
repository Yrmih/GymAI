import React, { useState } from "react";
import {
  ScrollView,
  Image,
  Text,
  Alert,
  View,
  TouchableOpacity,
  Platform,
  Modal,
} from "react-native";
import { useRouter } from "expo-router";
import { useDispatch } from "react-redux";
import { login } from "@/src/redux/usuarioSlice";
import {
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
import DateTimePicker from "@react-native-community/datetimepicker";
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
  const [dataNascimento, setDataNascimento] = useState<Date | null>(null);
  const [sexo, setSexo] = useState("");
  const [nivel, setNivel] = useState("");
  const [objetivo, setObjetivo] = useState("");
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showDateModal, setShowDateModal] = useState(false);

  const inputFields: InputFieldItem[] = [
    { placeholder: "Nome completo", value: nome, setValue: setNome },
    {
      placeholder: "E-mail",
      value: email,
      setValue: setEmail,
      keyboardType: "email-address",
      autoCapitalize: "none",
    },
    { placeholder: "Senha", value: senha, setValue: setSenha, secureTextEntry: true },
    { placeholder: "Confirmar senha", value: confirmarSenha, setValue: setConfirmarSenha, secureTextEntry: true },
  ];

  const validarSenha = (senha: string) => {
    const regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    return regex.test(senha);
  };

  const handleRegister = () => {
    if (!nome || !email || !senha || !confirmarSenha || !dataNascimento || !sexo || !nivel || !objetivo)
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
    router.push("/BodyForm");
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
            borderRadius={12}
            height={50}
            p={12}
            style={{ shadowColor: "#5DD26C", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.3, shadowRadius: 4 }}
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

        {/* Campo Data de Nascimento */}
        <TouchableOpacity onPress={() => setShowDateModal(true)}>
          <Input
            bg="#202020"
            borderRadius={12}
            height={50}
            p={12}
            style={{ shadowColor: "#5DD26C", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.3, shadowRadius: 4 }}
          >
            <InputField
              placeholder="Data de Nascimento"
              value={dataNascimento ? dataNascimento.toLocaleDateString() : ""}
              editable={false}
              color="#F8F8F8"
              placeholderTextColor="#A3A3A3"
            />
          </Input>
        </TouchableOpacity>

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
              borderRadius={12}
              height={50}
              p={12}
              style={{ shadowColor: "#5DD26C", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.3, shadowRadius: 4 }}
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
          borderRadius={12}
          paddingVertical={16}
          paddingHorizontal={12}
          minHeight={50}
          style={{ shadowColor: "#5DD26C", shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.4, shadowRadius: 8 }}
        >
          {loading && <ButtonSpinner color="$black" />}
          <ButtonText>{loading ? "Carregando..." : "Registrar"}</ButtonText>
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
      <BodyFormInviteModal showModal={showModal} onClose={() => setShowModal(false)} onPreencher={handleIrBodyForm} onPular={handlePular} />

      {/* Modal Data de Nascimento */}
      {showDateModal && (
        <Modal transparent animationType="slide">
          <View style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.4)", justifyContent: "flex-end" }}>
            <TouchableOpacity style={{ flex: 1 }} activeOpacity={1} onPress={() => setShowDateModal(false)} />
            <View style={{ backgroundColor: "#1A1A1A", padding: 16, borderTopLeftRadius: 16, borderTopRightRadius: 16 }}>
              <DateTimePicker
                value={dataNascimento || new Date(2000, 0, 1)}
                mode="date"
                display={Platform.OS === "ios" ? "spinner" : "default"}
                onChange={(_, selectedDate) => selectedDate && setDataNascimento(selectedDate)}
                maximumDate={new Date()}
                style={{ backgroundColor: "#1A1A1A" }}
              />
              <Button mt="$2" backgroundColor="#5DD26C" borderRadius={12} onPress={() => setShowDateModal(false)} style={{ alignSelf: "flex-end" }}>
                <ButtonText>Confirmar</ButtonText>
              </Button>
            </View>
          </View>
        </Modal>
      )}
    </>
  );
}
