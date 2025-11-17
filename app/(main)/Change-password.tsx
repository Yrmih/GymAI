import React, { useState } from "react";
import { ScrollView, TouchableOpacity } from "react-native";
import { View, Text, Input, InputField, Button } from "@gluestack-ui/themed";
import AppIcon from "@/src/components/icons/AppIcon";

export default function ChangePassword() {
  const [senhaAtual, setSenhaAtual] = useState("");
  const [novaSenha, setNovaSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");

  const [verAtual, setVerAtual] = useState(false);
  const [verNova, setVerNova] = useState(false);
  const [verConfirmar, setVerConfirmar] = useState(false);

  const [erro, setErro] = useState("");

  // 🔐 REGRA EXATA DO REGISTER
  const validar = () => {
    if (!senhaAtual || !novaSenha || !confirmarSenha) {
      return "Preencha todos os campos";
    }

    const senhaValida =
      novaSenha.length >= 8 &&
      /[A-Z]/.test(novaSenha) && // letra maiúscula
      /[a-z]/.test(novaSenha) && // letra minúscula
      /[0-9]/.test(novaSenha) && // número
      /[^A-Za-z0-9]/.test(novaSenha); // símbolo

    if (!senhaValida) {
      return "A senha deve ter pelo menos 8 caracteres, incluindo letra maiúscula, minúscula, número e símbolo.";
    }

    if (novaSenha !== confirmarSenha) {
      return "As senhas não coincidem";
    }

    return null;
  };

  const handleSubmit = () => {
    const erroValidacao = validar();
    if (erroValidacao) {
      setErro(erroValidacao);
      return;
    }

    setErro("");

    // FUTURO: integração com Firebase
    console.log("Senha alterada com sucesso!");
  };

  return (
    <View flex={1} bg="#0F0F0F" padding={24}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* HEADER */}
        <View mb={32} mt={8}>
          <Text color="#FFF" fontSize="$xl" fontWeight="$bold">
            Alterar Senha
          </Text>
          <Text color="#9B9B9B" fontSize="$sm" mt={4}>
            Atualize sua senha com segurança.
          </Text>
        </View>

        {/* ERRO */}
        {erro.length > 0 && (
          <View
            bg="#3A1A1A"
            padding={12}
            borderRadius={12}
            mb={20}
            borderWidth={1}
            borderColor="#FF5C5C"
          >
            <Text color="#FF5C5C" fontSize="$sm">
              {erro}
            </Text>
          </View>
        )}

        {/* SENHA ATUAL */}
        <Text color="#FFF" fontSize="$sm" mb={6}>
          Senha atual
        </Text>
        <Input bg="#1A1A1A" borderRadius={12} mb={20}>
          <InputField
            placeholder="Digite sua senha atual"
            placeholderTextColor="#777"
            secureTextEntry={!verAtual}
            value={senhaAtual}
            onChangeText={setSenhaAtual}
            color="#FFF"
          />
          <TouchableOpacity onPress={() => setVerAtual(!verAtual)}>
            <AppIcon
              name={verAtual ? "eye-off-outline" : "eye-outline"}
              size={22}
              color="#5DD26C"
              shadow={false}
            />
          </TouchableOpacity>
        </Input>

        {/* NOVA SENHA */}
        <Text color="#FFF" fontSize="$sm" mb={6}>
          Nova senha
        </Text>
        <Input bg="#1A1A1A" borderRadius={12} mb={16}>
          <InputField
            placeholder="Digite a nova senha"
            placeholderTextColor="#777"
            secureTextEntry={!verNova}
            value={novaSenha}
            onChangeText={setNovaSenha}
            color="#FFF"
          />
          <TouchableOpacity onPress={() => setVerNova(!verNova)}>
            <AppIcon
              name={verNova ? "eye-off-outline" : "eye-outline"}
              size={22}
              color="#5DD26C"
              shadow={false}
            />
          </TouchableOpacity>
        </Input>

        {/* CONFIRMAR SENHA */}
        <Text color="#FFF" fontSize="$sm" mb={6}>
          Confirmar nova senha
        </Text>
        <Input bg="#1A1A1A" borderRadius={12} mb={32}>
          <InputField
            placeholder="Confirme a nova senha"
            placeholderTextColor="#777"
            secureTextEntry={!verConfirmar}
            value={confirmarSenha}
            onChangeText={setConfirmarSenha}
            color="#FFF"
          />
          <TouchableOpacity onPress={() => setVerConfirmar(!verConfirmar)}>
            <AppIcon
              name={verConfirmar ? "eye-off-outline" : "eye-outline"}
              size={22}
              color="#5DD26C"
              shadow={false}
            />
          </TouchableOpacity>
        </Input>

        {/* BOTÃO */}
        <Button
          onPress={handleSubmit}
          bg="#5DD26C"
          size="lg"
          borderRadius={12}
          mb={50}
        >
          <Text color="#000" fontWeight="$bold">
            Salvar nova senha
          </Text>
        </Button>
      </ScrollView>
    </View>
  );
}
