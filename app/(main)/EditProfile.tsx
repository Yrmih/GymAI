// app/(main)/EditProfile.tsx
import React, { useState } from "react";
import { ScrollView, Text, TouchableOpacity, Image } from "react-native";
import { View, Avatar, Button, ButtonText, ButtonSpinner, Input, InputField, Select, SelectTrigger, SelectContent, SelectItem, SelectIcon, SelectPortal, SelectBackdrop } from "@gluestack-ui/themed";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { editProfileSchema, EditProfileFormData, MetaFitnessEnum } from "@/src/data/schemas/editProfileSchema";
import { MotiView } from "moti";
import AppIcon from "@/src/components/icons/AppIcon";

export default function EditProfile() {
  const [imageUri, setImageUri] = useState("https://i.pravatar.cc/200?img=68");

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<EditProfileFormData>({
    resolver: zodResolver(editProfileSchema),
    defaultValues: {
      nome: "",
      username: "",
      bio: "",
      metaFitness: undefined,
    },
  });

  const onSubmit: SubmitHandler<EditProfileFormData> = (data) => {
    console.log("Dados enviados:", data);
    // Aqui você chamaria a action/redux ou API
  };

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: "#0F0F0F" }}
      contentContainerStyle={{
        paddingHorizontal: 24,
        paddingTop: 48,
        paddingBottom: 100,
        gap: 32,
      }}
      showsVerticalScrollIndicator={false}
    >
      <MotiView from={{ opacity: 0, translateY: 20 }} animate={{ opacity: 1, translateY: 0 }} transition={{ duration: 0.6 }} style={{ gap: 32 }}>
        
        {/* Avatar */}
        <View style={{ alignItems: "center", marginBottom: 16 }}>
          <Avatar
            size="xl"
            style={{
              borderWidth: 3,
              borderColor: "#5DD26C",
              shadowColor: "#5DD26C",
              shadowOffset: { width: 0, height: 0 },
              shadowOpacity: 0.8,
              shadowRadius: 10,
            }}
          >
            <Image source={{ uri: imageUri }} style={{ width: "100%", height: "100%", borderRadius: 999 }} />
          </Avatar>
          <TouchableOpacity
            style={{
              position: "absolute",
              bottom: 0,
              right: 0,
              backgroundColor: "#5DD26C",
              width: 36,
              height: 36,
              borderRadius: 18,
              alignItems: "center",
              justifyContent: "center",
            }}
            onPress={() => console.log("Alterar foto")}
          >
            <AppIcon name="pencil-outline" size={20} color="#0F0F0F" shadow={false} />
          </TouchableOpacity>
        </View>

        {/* Nome */}
        <Controller
          control={control}
          name="nome"
          render={({ field: { onChange, value } }) => (
            <Input
              backgroundColor="#202020"
              borderRadius={14}
              paddingHorizontal={20}
              height={56}
              style={{ borderColor: errors.nome ? "#FF4D4F" : "#202020", borderWidth: 1 }}
            >
              <InputField
                value={value}
                onChangeText={onChange}
                placeholder="Nome"
                placeholderTextColor="#A1A1A1"
                color="#F8F8F8"
                fontSize={16}
              />
            </Input>
          )}
        />
        {errors.nome && <Text style={{ color: "#FF4D4F" }}>{errors.nome.message}</Text>}

        {/* Username */}
        <Controller
          control={control}
          name="username"
          render={({ field: { onChange, value } }) => (
            <Input
              backgroundColor="#202020"
              borderRadius={14}
              paddingHorizontal={20}
              height={56}
              style={{ borderColor: errors.username ? "#FF4D4F" : "#202020", borderWidth: 1 }}
            >
              <InputField
                value={value}
                onChangeText={onChange}
                placeholder="Username"
                placeholderTextColor="#A1A1A1"
                color="#F8F8F8"
                fontSize={16}
              />
            </Input>
          )}
        />
        {errors.username && <Text style={{ color: "#FF4D4F" }}>{errors.username.message}</Text>}

        {/* Bio */}
        <Controller
          control={control}
          name="bio"
          render={({ field: { onChange, value } }) => (
            <Input
              backgroundColor="#202020"
              borderRadius={14}
              paddingHorizontal={20}
              height={80}
              multiline
              style={{ borderColor: errors.bio ? "#FF4D4F" : "#202020", borderWidth: 1 }}
            >
              <InputField
                value={value}
                onChangeText={onChange}
                placeholder="Bio"
                placeholderTextColor="#A1A1A1"
                color="#F8F8F8"
                fontSize={16}
              />
            </Input>
          )}
        />
        {errors.bio && <Text style={{ color: "#FF4D4F" }}>{errors.bio.message}</Text>}

        {/* Meta Fitness */}
        <Controller
          control={control}
          name="metaFitness"
          render={({ field: { onChange, value } }) => (
            <View>
              <Text style={{ color: "#F8F8F8", marginBottom: 10, fontSize: 15 }}>Meta Fitness</Text>
              <Select selectedValue={value} onValueChange={onChange} style={{ borderColor: "#202020", borderWidth: 1, borderRadius: 14 }}>
                <SelectTrigger backgroundColor="#202020" paddingHorizontal={20} height={56}>
                  <Text style={{ color: "#F8F8F8", fontSize: 16 }}>{value || "Selecione sua meta"}</Text>
                  <SelectIcon />
                </SelectTrigger>
                <SelectPortal>
                  <SelectBackdrop />
                  <SelectContent>
                    {Object.values(MetaFitnessEnum._def.values).map((m) => (
                      <SelectItem key={m} label={m} value={m} />
                    ))}
                  </SelectContent>
                </SelectPortal>
              </Select>
            </View>
          )}
        />

        {/* Botão Salvar */}
        <MotiView from={{ opacity: 0, translateY: 10 }} animate={{ opacity: 1, translateY: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
          <Button backgroundColor="#5DD26C" borderRadius={14} height={56} onPress={handleSubmit(onSubmit)} disabled={isSubmitting}>
            {isSubmitting && <ButtonSpinner color="#0F0F0F" />}
            <ButtonText color="#0F0F0F" fontWeight="$bold" fontSize="$lg" marginLeft="$2">
              {isSubmitting ? "Salvando..." : "Salvar alterações"}
            </ButtonText>
          </Button>
        </MotiView>
      </MotiView>
    </ScrollView>
  );
}
