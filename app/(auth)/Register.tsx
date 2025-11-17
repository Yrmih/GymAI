import React, { useState } from "react";
import {
  ScrollView,
  Image,
  Text,
  View,
  TouchableOpacity,
  Platform,
  Modal,
} from "react-native";
import { useRouter } from "expo-router";
import { useDispatch } from "react-redux";
import { setUsuario } from "@/src/data/redux/slices/usuarioSlice";
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
import BodyFormInviteModal from "@/src/components/modal/BodyFormInviteModal";

import { useForm, Controller, SubmitHandler,} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema, RegisterFormData, SexoEnum, NivelEnum, ObjetivoEnum } from "@/src/data/schemas/registerSchema";

export default function Register() {
  const dispatch = useDispatch();
  const router = useRouter();

  const [showModal, setShowModal] = useState(false);
  const [showDateModal, setShowDateModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema) as unknown as Resolver<RegisterFormData>,
    defaultValues: {
      nome: "",
      email: "",
      senha: "",
      confirmarSenha: "",
      dataNascimento: undefined,
      sexo: undefined,
      nivel: undefined,
      objetivo: undefined,
    },
  });

  const onSubmit: SubmitHandler<RegisterFormData> = (data) => {
  setLoading(true);
  setTimeout(() => {
    dispatch(
      setUsuario({
        nome: data.nome,
        email: data.email,
        logado: true,
      })
    );
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
        style={{
          flex: 1,
          backgroundColor: "#0F0F0F",
          paddingHorizontal: 24,
          paddingTop: 40,
        }}
        contentContainerStyle={{ gap: 20, paddingBottom: 60 }}
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

        {/* Inputs de texto */}
        <Controller
          control={control}
          name="nome"
          render={({ field }) => (
            <>
              <Input
                bg="#202020"
                borderRadius={12}
                height={50}
                p={12}
                style={{
                  shadowColor: errors.nome ? "red" : "#5DD26C",
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 0.3,
                  shadowRadius: 4,
                  borderWidth: errors.nome ? 1 : 0,
                  borderColor: errors.nome ? "red" : "transparent",
                }}
              >
                <InputField
                  placeholder="Nome completo"
                  value={field.value}
                  onChangeText={field.onChange}
                  color="#F8F8F8"
                  placeholderTextColor="#A3A3A3"
                  style={{ paddingVertical: 0 }}
                />
              </Input>
              {errors.nome && (
                <Text style={{ color: "red", fontSize: 12 }}>{errors.nome.message}</Text>
              )}
            </>
          )}
        />

        <Controller
          control={control}
          name="email"
          render={({ field }) => (
            <>
              <Input
                bg="#202020"
                borderRadius={12}
                height={50}
                p={12}
                style={{
                  shadowColor: errors.email ? "red" : "#5DD26C",
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 0.3,
                  shadowRadius: 4,
                  borderWidth: errors.email ? 1 : 0,
                  borderColor: errors.email ? "red" : "transparent",
                }}
              >
                <InputField
                  placeholder="E-mail"
                  value={field.value}
                  onChangeText={field.onChange}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  color="#F8F8F8"
                  placeholderTextColor="#A3A3A3"
                  style={{ paddingVertical: 0 }}
                />
              </Input>
              {errors.email && (
                <Text style={{ color: "red", fontSize: 12 }}>{errors.email.message}</Text>
              )}
            </>
          )}
        />

        <Controller
          control={control}
          name="senha"
          render={({ field }) => (
            <>
              <Input
                bg="#202020"
                borderRadius={12}
                height={50}
                p={12}
                style={{
                  shadowColor: errors.senha ? "red" : "#5DD26C",
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 0.3,
                  shadowRadius: 4,
                  borderWidth: errors.senha ? 1 : 0,
                  borderColor: errors.senha ? "red" : "transparent",
                }}
              >
                <InputField
                  placeholder="Senha"
                  value={field.value}
                  onChangeText={field.onChange}
                  secureTextEntry
                  color="#F8F8F8"
                  placeholderTextColor="#A3A3A3"
                  style={{ paddingVertical: 0 }}
                />
              </Input>
              {errors.senha && (
                <Text style={{ color: "red", fontSize: 12 }}>{errors.senha.message}</Text>
              )}
            </>
          )}
        />

        <Controller
          control={control}
          name="confirmarSenha"
          render={({ field }) => (
            <>
              <Input
                bg="#202020"
                borderRadius={12}
                height={50}
                p={12}
                style={{
                  shadowColor: errors.confirmarSenha ? "red" : "#5DD26C",
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 0.3,
                  shadowRadius: 4,
                  borderWidth: errors.confirmarSenha ? 1 : 0,
                  borderColor: errors.confirmarSenha ? "red" : "transparent",
                }}
              >
                <InputField
                  placeholder="Confirmar senha"
                  value={field.value}
                  onChangeText={field.onChange}
                  secureTextEntry
                  color="#F8F8F8"
                  placeholderTextColor="#A3A3A3"
                  style={{ paddingVertical: 0 }}
                />
              </Input>
              {errors.confirmarSenha && (
                <Text style={{ color: "red", fontSize: 12 }}>
                  {errors.confirmarSenha.message}
                </Text>
              )}
            </>
          )}
        />

        {/* Data de nascimento */}
        <TouchableOpacity onPress={() => setShowDateModal(true)}>
          <Controller
            control={control}
            name="dataNascimento"
            render={({ field }) => (
              <>
                <Input
                  bg="#202020"
                  borderRadius={12}
                  height={50}
                  p={12}
                  style={{
                    shadowColor: errors.dataNascimento ? "red" : "#5DD26C",
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0.3,
                    shadowRadius: 4,
                    borderWidth: errors.dataNascimento ? 1 : 0,
                    borderColor: errors.dataNascimento ? "red" : "transparent",
                  }}
                >
                  <InputField
                    placeholder="Data de Nascimento"
                    value={field.value ? field.value.toLocaleDateString() : ""}
                    editable={false}
                    color="#F8F8F8"
                    placeholderTextColor="#A3A3A3"
                  />
                </Input>
                {errors.dataNascimento && (
                  <Text style={{ color: "red", fontSize: 12 }}>
                    {errors.dataNascimento.message}
                  </Text>
                )}
              </>
            )}
          />
        </TouchableOpacity>

        {/* Selects */}
        {(["sexo", "nivel", "objetivo"] as const).map((fieldName) => {
          const options =
            fieldName === "sexo"
              ? [
                  { label: "Masculino", value: SexoEnum.Masculino },
                  { label: "Feminino", value: SexoEnum.Feminino },
                  { label: "Outro", value: SexoEnum.Outro },
                ]
              : fieldName === "nivel"
              ? [
                  { label: "Iniciante", value: NivelEnum.Iniciante },
                  { label: "Intermediário", value: NivelEnum.Intermediario },
                  { label: "Avançado", value: NivelEnum.Avancado },
                ]
              : [
                  { label: "Ganho de massa", value: ObjetivoEnum.Massa },
                  { label: "Perda de gordura", value: ObjetivoEnum.Gordura },
                  { label: "Condicionamento", value: ObjetivoEnum.Condicionamento },
                ];

          return (
            <Controller
              key={fieldName}
              control={control}
              name={fieldName}
              render={({ field }) => (
                <>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <SelectTrigger
                      bg="#202020"
                      borderRadius={12}
                      height={50}
                      p={12}
                      style={{
                        shadowColor: errors[fieldName] ? "red" : "#5DD26C",
                        shadowOffset: { width: 0, height: 2 },
                        shadowOpacity: 0.3,
                        shadowRadius: 4,
                        borderWidth: errors[fieldName] ? 1 : 0,
                        borderColor: errors[fieldName] ? "red" : "transparent",
                      }}
                    >
                      <SelectInput
                        placeholder={fieldName}
                        color={field.value ? "#F8F8F8" : "#A3A3A3"}
                        value={field.value}
                        style={{ paddingVertical: 0 }}
                      />
                    </SelectTrigger>
                    <SelectPortal>
                      <SelectBackdrop />
                      <SelectContent bg="#1A1A1A">
                        <SelectDragIndicatorWrapper>
                          <SelectDragIndicator />
                        </SelectDragIndicatorWrapper>
                        {options.map((item, i) => (
                          <SelectItem key={i} label={item.label} value={item.value} />
                        ))}
                      </SelectContent>
                    </SelectPortal>
                  </Select>
                  {errors[fieldName] && (
                    <Text style={{ color: "red", fontSize: 12 }}>
                      {errors[fieldName]?.message}
                    </Text>
                  )}
                </>
              )}
            />
          );
        })}

        {/* Dica de senha */}
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

        {/* Botão */}
        <Button
          onPress={handleSubmit(onSubmit)}
          backgroundColor="#5DD26C"
          borderRadius={12}
          paddingVertical={16}
          paddingHorizontal={12}
          minHeight={50}
          style={{
            shadowColor: "#5DD26C",
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.4,
            shadowRadius: 8,
          }}
        >
          {loading && <ButtonSpinner color="$black" />}
          <ButtonText>{loading ? "Carregando..." : "Registrar"}</ButtonText>
        </Button>

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

      {/* Modal */}
      <BodyFormInviteModal
        showModal={showModal}
        onClose={() => setShowModal(false)}
        onPreencher={handleIrBodyForm}
        onPular={handlePular}
      />

      {/* Modal Data de Nascimento */}
      {showDateModal && (
        <Modal transparent animationType="slide">
          <View
            style={{
              flex: 1,
              backgroundColor: "rgba(0,0,0,0.4)",
              justifyContent: "flex-end",
            }}
          >
            <TouchableOpacity
              style={{ flex: 1 }}
              activeOpacity={1}
              onPress={() => setShowDateModal(false)}
            />
            <View
              style={{
                backgroundColor: "#1A1A1A",
                padding: 16,
                borderTopLeftRadius: 16,
                borderTopRightRadius: 16,
              }}
            >
              <DateTimePicker
                value={watch("dataNascimento") || new Date(2000, 0, 1)}
                mode="date"
                display={Platform.OS === "ios" ? "spinner" : "default"}
                onChange={(_, selectedDate) => {
                  if (selectedDate) setValue("dataNascimento", selectedDate);
                }}
                maximumDate={new Date()}
                style={{ backgroundColor: "#1A1A1A" }}
              />
              <Button
                mt="$2"
                backgroundColor="#5DD26C"
                borderRadius={12}
                onPress={() => setShowDateModal(false)}
                style={{ alignSelf: "flex-end" }}
              >
                <ButtonText>Confirmar</ButtonText>
              </Button>
            </View>
          </View>
        </Modal>
      )}
    </>
  );
}
