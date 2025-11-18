import React from "react";
import { ScrollView, View, Text } from "react-native";
import { useDispatch } from "react-redux";
import { updateUserBody } from "@/src/data/redux/slices/usuarioBodySlice";
import { useRouter } from "expo-router";
import { MotiView } from "moti";
import {
  Input,
  InputField,
  Button,
  ButtonText,
  ButtonSpinner,
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectIcon,
  SelectPortal,
  SelectBackdrop,
} from "@gluestack-ui/themed";

import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  bodyFormSchema,
  BodyFormData,
  BiotipoEnum,
  TempoTreinoEnum,
  FrequenciaSemanalEnum,
} from "@/src/data/schemas/bodyFormSchema";

export default function BodyForm() {
  const dispatch = useDispatch();
  const router = useRouter();

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<BodyFormData>({
    resolver: zodResolver(bodyFormSchema),
    defaultValues: {
      altura: "",
      peso: "",
      biotipo: BiotipoEnum.Ectomorfo,
      tempoTreino: TempoTreinoEnum["0-6 meses"],
      frequenciaSemanal: FrequenciaSemanalEnum["3x por semana"],
      gruposPrioritarios: "",
      lesoes: "",
    },
  });

  const onSubmit: SubmitHandler<BodyFormData> = (data) => {
    dispatch(
      updateUserBody({
        altura: Number(data.altura),
        peso: Number(data.peso),
        biotipo: data.biotipo,
        tempoTreino: data.tempoTreino,
        frequenciaSemanal: data.frequenciaSemanal,
        gruposPrioritarios: data.gruposPrioritarios,
        lesoes: data.lesoes,
      })
    );

    setTimeout(() => {
      router.replace("/(main)/index");
    }, 1000);
  };

  const getBorderColor = (fieldName: keyof BodyFormData) =>
    errors[fieldName] ? "#FF4D4F" : "#202020";

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: "#0F0F0F" }}
      contentContainerStyle={{
        paddingHorizontal: 24,
        paddingTop: 60,
        paddingBottom: 100,
        gap: 32,
      }}
      showsVerticalScrollIndicator={false}
    >
      <MotiView
        from={{ opacity: 0, translateY: 25 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.6 }}
        style={{ gap: 32 }}
      >
        {/* Cabeçalho */}
        <Text
          style={{
            color: "#5DD26C",
            fontSize: 26,
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Dados Corporais
        </Text>
        <Text
          style={{
            color: "#A1A1A1",
            fontSize: 15,
            textAlign: "center",
            marginTop: -4,
          }}
        >
          Ajude a GymAI a montar treinos sob medida para você.
        </Text>

        {/* ===== DADOS FÍSICOS ===== */}
        <View style={{ gap: 24 }}>
          {/* Altura */}
          <Controller
            control={control}
            name="altura"
            render={({ field: { onChange, value } }) => (
              <Input
                backgroundColor="#202020"
                borderRadius={14}
                paddingHorizontal={20}
                height={56}
                style={{
                  borderColor: getBorderColor("altura"),
                  borderWidth: 1,
                }}
              >
                <InputField
                  value={value}
                  onChangeText={onChange}
                  keyboardType="numeric"
                  placeholder="Altura (cm)"
                  placeholderTextColor="#A1A1A1"
                  color="#F8F8F8"
                  fontSize={16}
                />
              </Input>
            )}
          />
          {errors.altura && (
            <Text style={{ color: "#FF4D4F" }}>{errors.altura.message}</Text>
          )}

          {/* Peso */}
          <Controller
            control={control}
            name="peso"
            render={({ field: { onChange, value } }) => (
              <Input
                backgroundColor="#202020"
                borderRadius={14}
                paddingHorizontal={20}
                height={56}
                style={{ borderColor: getBorderColor("peso"), borderWidth: 1 }}
              >
                <InputField
                  value={value}
                  onChangeText={onChange}
                  keyboardType="numeric"
                  placeholder="Peso (kg)"
                  placeholderTextColor="#A1A1A1"
                  color="#F8F8F8"
                  fontSize={16}
                />
              </Input>
            )}
          />
          {errors.peso && (
            <Text style={{ color: "#FF4D4F" }}>{errors.peso.message}</Text>
          )}

          {/* Biotipo */}
          <Controller
            control={control}
            name="biotipo"
            render={({ field: { onChange, value } }) => (
              <View>
                <Text
                  style={{ color: "#F8F8F8", marginBottom: 10, fontSize: 15 }}
                >
                  Biotipo corporal
                </Text>
                <Select
                  selectedValue={value}
                  onValueChange={onChange}
                  style={{
                    borderColor: getBorderColor("biotipo"),
                    borderWidth: 1,
                    borderRadius: 14,
                  }}
                >
                  <SelectTrigger
                    backgroundColor="#202020"
                    paddingHorizontal={20}
                    height={56}
                  >
                    <Text style={{ color: "#F8F8F8", fontSize: 16 }}>
                      {value}
                    </Text>
                    <SelectIcon />
                  </SelectTrigger>
                  <SelectPortal>
                    <SelectBackdrop />
                    <SelectContent>
                      {Object.values(BiotipoEnum).map((b) => (
                        <SelectItem key={b} label={b} value={b} />
                      ))}
                    </SelectContent>
                  </SelectPortal>
                </Select>
                {errors.biotipo && (
                  <Text style={{ color: "#FF4D4F" }}>
                    {errors.biotipo.message}
                  </Text>
                )}
              </View>
            )}
          />

          {/* Tempo de treino */}
          <Controller
            control={control}
            name="tempoTreino"
            render={({ field: { onChange, value } }) => (
              <View>
                <Text
                  style={{ color: "#F8F8F8", marginBottom: 10, fontSize: 15 }}
                >
                  Tempo de treino
                </Text>
                <Select
                  selectedValue={value}
                  onValueChange={onChange}
                  style={{
                    borderColor: getBorderColor("tempoTreino"),
                    borderWidth: 1,
                    borderRadius: 14,
                  }}
                >
                  <SelectTrigger
                    backgroundColor="#202020"
                    paddingHorizontal={20}
                    height={56}
                  >
                    <Text style={{ color: "#F8F8F8", fontSize: 16 }}>
                      {value}
                    </Text>
                    <SelectIcon />
                  </SelectTrigger>
                  <SelectPortal>
                    <SelectBackdrop />
                    <SelectContent>
                      {Object.values(TempoTreinoEnum).map((t) => (
                        <SelectItem key={t} label={t} value={t} />
                      ))}
                    </SelectContent>
                  </SelectPortal>
                </Select>
                {errors.tempoTreino && (
                  <Text style={{ color: "#FF4D4F" }}>
                    {errors.tempoTreino.message}
                  </Text>
                )}
              </View>
            )}
          />
        </View>

        {/* ===== DADOS DE TREINO ===== */}
        <View style={{ gap: 24, marginTop: 8 }}>
          <Text
            style={{
              color: "#F8F8F8",
              fontSize: 18,
              fontWeight: "bold",
              marginBottom: 4,
            }}
          >
            Preferências de treino
          </Text>

          {/* Frequência semanal */}
          <Controller
            control={control}
            name="frequenciaSemanal"
            render={({ field: { onChange, value } }) => (
              <View>
                <Text
                  style={{ color: "#F8F8F8", marginBottom: 10, fontSize: 15 }}
                >
                  Frequência semanal
                </Text>
                <Select
                  selectedValue={value}
                  onValueChange={onChange}
                  style={{
                    borderColor: getBorderColor("frequenciaSemanal"),
                    borderWidth: 1,
                    borderRadius: 14,
                  }}
                >
                  <SelectTrigger
                    backgroundColor="#202020"
                    paddingHorizontal={20}
                    height={56}
                  >
                    <Text style={{ color: "#F8F8F8", fontSize: 16 }}>
                      {value}
                    </Text>
                    <SelectIcon />
                  </SelectTrigger>
                  <SelectPortal>
                    <SelectBackdrop />
                    <SelectContent>
                      {Object.values(FrequenciaSemanalEnum).map((f) => (
                        <SelectItem key={f} label={f} value={f} />
                      ))}
                    </SelectContent>
                  </SelectPortal>
                </Select>
                {errors.frequenciaSemanal && (
                  <Text style={{ color: "#FF4D4F" }}>
                    {errors.frequenciaSemanal.message}
                  </Text>
                )}
              </View>
            )}
          />

          {/* Grupos prioritários */}
          <Controller
            control={control}
            name="gruposPrioritarios"
            render={({ field: { onChange, value } }) => (
              <Input
                backgroundColor="#202020"
                borderRadius={14}
                paddingHorizontal={20}
                height={56}
              >
                <InputField
                  value={value}
                  onChangeText={onChange}
                  placeholder="Grupos musculares prioritários (ex: costas e pernas)"
                  placeholderTextColor="#A1A1A1"
                  color="#F8F8F8"
                  fontSize={16}
                />
              </Input>
            )}
          />

          {/* Lesões */}
          <Controller
            control={control}
            name="lesoes"
            render={({ field: { onChange, value } }) => (
              <Input
                backgroundColor="#202020"
                borderRadius={14}
                paddingHorizontal={20}
                height={56}
              >
                <InputField
                  value={value}
                  onChangeText={onChange}
                  placeholder="Possui alguma lesão ou limitação física?"
                  placeholderTextColor="#A1A1A1"
                  color="#F8F8F8"
                  fontSize={16}
                />
              </Input>
            )}
          />
        </View>

        {/* Botão Continuar */}
        <MotiView
          from={{ opacity: 0, translateY: 10 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Button
            backgroundColor="#5DD26C"
            borderRadius={14}
            height={56}
            onPress={handleSubmit(onSubmit)}
            disabled={isSubmitting}
          >
            {isSubmitting && <ButtonSpinner color="#0F0F0F" />}
            <ButtonText
              color="#0F0F0F"
              fontWeight="$bold"
              fontSize="$lg"
              marginLeft="$2"
            >
              {isSubmitting ? "Carregando..." : "Concluir cadastro corporal"}
            </ButtonText>
          </Button>
        </MotiView>
      </MotiView>
    </ScrollView>
  );
}
