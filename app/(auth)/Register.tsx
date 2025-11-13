import React, { useState } from "react";
import {
  ScrollView,
  Image,
  Text,
  View,
  Platform,
  KeyboardAvoidingView,
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
  const [dataNascimento, setDataNascimento] = useState<Date | undefined>();
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [sexo, setSexo] = useState("");
  const [nivel, setNivel] = useState("");
  const [objetivo, setObjetivo] = useState("");
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const inputFields: InputFieldItem[] = [
    { placeholder: "Nome completo", value: nome, setValue: setNome, keyboardType: "default" },
    { placeholder: "E-mail", value: email, setValue: setEmail, keyboardType: "email-address", autoCapitalize: "none" },
    { placeholder: "Senha", value: senha, setValue: setSenha, secureTextEntry: true },
    { placeholder: "Confirmar senha", value: confirmarSenha, setValue: setConfirmarSenha, secureTextEntry: true },
  ];

  const validarSenha = (senha: string) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    return regex.test(senha);
  };

  const handleRegister = () => {
    if (!nome || !email || !senha || !confirmarSenha || !dataNascimento || !sexo || !nivel || !objetivo)
      return alert("Preencha todos os campos.");

    if (senha !== confirmarSenha) return alert("As senhas não coincidem.");
    if (!validarSenha(senha))
      return alert("A senha deve ter pelo menos 8 caracteres, incluindo letra maiúscula, minúscula, número e símbolo.");

    setLoading(true);
    setTimeout(() => {
      dispatch(login({ nome }));
      setLoading(false);
      setShowModal(true);
    }, 1500);
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: "#0F0F0F" }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1, justifyContent: "center", paddingHorizontal: 24, paddingVertical: 40, gap: 20 }}
        keyboardShouldPersistTaps="handled"
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
            backgroundColor="#202020"
            borderRadius={12}
            paddingVertical={14}
            paddingHorizontal={12}
            minHeight={50}
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
            />
          </Input>
        ))}

        {/* Campo Data de Nascimento */}
        <Input
          backgroundColor="#202020"
          borderRadius={12}
          paddingVertical={14}
          paddingHorizontal={12}
          minHeight={50}
          onTouchStart={() => setShowDatePicker(true)}
        >
          <InputField
            placeholder="Data de nascimento"
            value={dataNascimento ? dataNascimento.toLocaleDateString() : ""}
            editable={false}
            color="#F8F8F8"
            placeholderTextColor="#A3A3A3"
          />
        </Input>
        {showDatePicker && (
          <DateTimePicker
            value={dataNascimento || new Date()}
            mode="date"
            display="default"
            maximumDate={new Date()}
            onChange={(event, selectedDate) => {
              setShowDatePicker(false);
              if (selectedDate) setDataNascimento(selectedDate);
            }}
          />
        )}

        {/* Selects */}
        {[
          { placeholder: "Sexo", value: sexo, setValue: setSexo, items: [
              { label: "Masculino", value: "masculino" },
              { label: "Feminino", value: "feminino" },
              { label: "Outro", value: "outro" },
            ]
          },
          { placeholder: "Nível de experiência", value: nivel, setValue: setNivel, items: [
              { label: "Iniciante", value: "iniciante" },
              { label: "Intermediário", value: "intermediario" },
              { label: "Avançado", value: "avancado" },
            ]
          },
          { placeholder: "Objetivo", value: objetivo, setValue: setObjetivo, items: [
              { label: "Ganho de massa", value: "massa" },
              { label: "Perda de gordura", value: "gordura" },
              { label: "Condicionamento", value: "condicionamento" },
            ]
          },
        ].map((selectItem, index) => (
          <Select key={index} onValueChange={selectItem.setValue}>
            <SelectTrigger
              backgroundColor="#202020"
              borderRadius={12}
              paddingVertical={14}
              paddingHorizontal={12}
              minHeight={50}
            >
              <SelectInput
                placeholder={selectItem.placeholder}
                color={selectItem.value ? "#F8F8F8" : "#A3A3A3"}
                value={selectItem.value}
              />
            </SelectTrigger>
            <SelectPortal>
              <SelectBackdrop />
              <SelectContent backgroundColor="#1A1A1A">
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

        {/* Botão Registrar */}
        <Button
          onPress={handleRegister}
          backgroundColor="#5DD26C"
          borderRadius={12}
          paddingVertical={16}
          paddingHorizontal={24}
          minHeight={50}
        >
          {loading && <ButtonSpinner color="$black" />}
          <ButtonText style={{ textAlign: "center" }}>
            {loading ? "Carregando..." : "Registrar"}
          </ButtonText>
        </Button>

        {/* Link para login */}
        <Text style={{ color: "#F8F8F8", textAlign: "center", marginTop: 12 }}>
          Já tem conta?{" "}
          <Text style={{ color: "#5DD26C", fontWeight: "bold" }} onPress={() => router.push("/(auth)/login")}>
            Entrar
          </Text>
        </Text>
      </ScrollView>

      {/* Modal */}
      <BodyFormInviteModal
        showModal={showModal}
        onClose={() => setShowModal(false)}
        onPreencher={() => router.push("/(auth)/BodyForm")}
        onPular={() => router.push("/(tabs)/Home")}
      />
    </KeyboardAvoidingView>
  );
}
